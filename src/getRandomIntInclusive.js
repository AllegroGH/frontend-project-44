export default (min, max) => {
  const minInt = Math.ceil(min);
  const maxInt = Math.floor(max);
  /* The maximum is inclusive and the minimum is inclusive */
  return Math.floor(Math.random() * (maxInt - minInt + 1) + minInt);
};
