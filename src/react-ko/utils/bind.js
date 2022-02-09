const bind = (...values) => {
  let bindings = "";
  for (let i = 0; i < values.length; i += 2) {
    bindings += `${values[i]}: ${values[i + 1]}`;
  }
  return { "data-bind": bindings };
};

export default bind;
