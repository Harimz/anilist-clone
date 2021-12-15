const numToString = (num) => {
  if (num || num === 0) {
    return num.toString();
  } else if (num === null) {
    return "NA";
  } else {
    return null;
  }
};

export default numToString;
