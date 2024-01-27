export function handleServices(str) {
  return str.split(",").map((service) => service.trim());
}

export function lowercaseServices(str) {
  return str.split(",").map((service) => service.trim().toLowerCase());
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

export function handleSameDay(data) {
  return data?.some((item) => {
    const services = lowercaseServices(item.service);
    return services.includes("same day");
  });
}

export function itemsCount(data) {
  let fixedMountCount = 0;
  let fullMotionCount = 0;
  let cordMaskingCount = 0;
  let milesCount = 0;

  data?.forEach((item) => {
    const services = lowercaseServices(item.service);

    if (services.includes("fixed mount")) {
      fixedMountCount += 1;
    }
    if (services.includes("full motion mount")) {
      fullMotionCount += 1;
    }
    if (services.includes("cord masking")) {
      cordMaskingCount += 1;
    }

    if (milesCount === 0 && item.miles && item.miles !== "") {
      milesCount = item.miles;
    }
  });

  return {
    fixedMountCount,
    fullMotionCount,
    cordMaskingCount,
    milesCount,
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

  const route = data?.map((item) => formatAddress(item.address)).join("/");

  return baseUrl + startingAddress + "/" + route;
}

export function abbreviateName(name) {
  const parts = name.split(" ");
  if (parts.length > 1) {
    const lastNameInitial = parts[parts.length - 1][0];
    return `${parts[0]} ${lastNameInitial}.`;
  }
  return name;
}

export function formatForWhatsApp(data) {
  return data
    ?.map((item) => {
      return `${item.name} - ${item.phone}\n*${item.date}, ${item.time}*\n${
        item.address
      }\n${item.service.replace(/, /g, "\n")}\n*${item.payment}*\n---\n`;
    })
    .join("\n");
}

export async function copyToClipboard(text, setterFunction) {
  try {
    setterFunction(true);
    await navigator.clipboard.writeText(text);
    setTimeout(() => setterFunction(false), 700);
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
}
