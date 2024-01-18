export function handleServices(str) {
  return str.split(",").map((service) => service.trim());
}

export function handleAddress(address) {
  const regex = /(\w+[\s\w]*),\s*(\w{2})\s*\d{5}(?:\s*\(Apt\s*(\d+)\))?/;
  const matches = address.match(regex);

  if (matches && matches.length > 2) {
    let formattedAddress = `${matches[1]}, ${matches[2]}`;
    if (matches[3]) {
      formattedAddress += ` (Apt ${matches[3]})`;
    }
    return formattedAddress;
  }
  return address;
}

export function handlePhone(str) {
  return str.replace(/\s+/g, "");
}

export function formatDate(offset) {
  const date = new Date();
  date.setDate(date.getDate() + offset);
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

export function handleSameDay(filteredData, handleServices) {
  return filteredData.some((item) => {
    const services = handleServices(item.service);
    return services.includes("Same Day");
  });
}

export function mountCount(filteredData) {
  let fixedMountCount = 0;
  let fullMotionCount = 0;

  filteredData.forEach((item) => {
    if (item.service.includes("Fixed Mount")) {
      fixedMountCount += 1;
    }
    if (item.service.includes("Full Motion Mount")) {
      fullMotionCount += 1;
    }
  });

  return {
    fixedMountCount,
    fullMotionCount,
  };
}
