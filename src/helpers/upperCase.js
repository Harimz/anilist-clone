const upperCase = (text) => {
  if (typeof text === "string") {
    return text
      .toLowerCase()
      .split(" ")
      .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
      .join(" ");
  }
  return text;
};

export default upperCase;
