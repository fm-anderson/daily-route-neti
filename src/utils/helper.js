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

export function handleSameDay(data, formatter) {
  return data.some((item) => {
    const services = formatter(item.service);
    return services.includes("Same Day");
  });
}

export function milesCount(data) {
  const firstEntryWithMiles = data.find((item) => item.miles !== "");
  return firstEntryWithMiles ? firstEntryWithMiles.miles : "0";
}

export function mountCount(data) {
  let fixedMountCount = 0;
  let fullMotionCount = 0;

  data.forEach((item) => {
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

export function removeAptNumber(address) {
  return address.replace(/\s\(.*?\)/, "");
}

export function createMapsRoute(data) {
  const baseUrl = "https://www.google.com/maps/dir/";
  const startingAddress = import.meta.env.VITE_STARTING_ADDRESS;

  const formatAddress = (address) => {
    return address.replace(/\s\(.*?\)/, "").replace(/\s/g, "+");
  };

  const route = data.map((item) => formatAddress(item.address)).join("/");

  return baseUrl + startingAddress + "/" + route;
}
