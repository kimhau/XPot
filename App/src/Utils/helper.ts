function randomIntFromInterval(min: number, max: number) {
  // min and max included

  const val = Math.floor(Math.random() * (max - min + 1) + min);
  return val.toString();
}

export {randomIntFromInterval};
