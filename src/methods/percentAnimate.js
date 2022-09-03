const percentAnimate = (start, end, duration, element, value) => {
  if (start >= end) {
    return;
  }
  let range = end - start;
  let current = start;
  let increment = end > start ? 1 : -1;
  let stepTime = Math.abs(Math.floor(duration / range));
  let timer = setInterval(() => {
    current += increment;
    if (value) {
      this.$refs[element].value = current;
    } else {
      this.$refs[element].textContent = current;
    }
    if (current === end) {
      clearInterval(timer);
    }
  }, stepTime);
};

module.exports = percentAnimate;
