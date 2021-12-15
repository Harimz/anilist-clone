const setDate = (date) => {
  if (date) {
    return new Date(date);
  } else {
    return null;
  }
};

export default setDate;
