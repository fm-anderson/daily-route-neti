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
