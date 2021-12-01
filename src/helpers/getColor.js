function colorByPercent(percent, start, end) {
  var a = percent / 100,
    b = (end - start) * a,
    c = b + start;

  // Return a CSS HSL string
  return "hsl(" + c + ", 100%, 50%)";
}

export default colorByPercent;
