function createInputFilter(filter) {
  return function (value) {
    const valurArray = [...value];
    const i = valurArray.findIndex((x) => !filter(x));
    if (i < 0) {
      return value;
    }

    return valurArray.slice(0, i).join("");
  };
}

export { createInputFilter };
