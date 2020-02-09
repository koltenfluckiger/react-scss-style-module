'use strict';

exports.map = (styles, options) => {
  const names = typeof(options.names) === "string"
    ? options.names.split(" ")
    : options.names;

  const classes = names.map(css => {
    if (styles[css]) {
      return styles[css]
    } else {
      return css;
    }
  });
  classes.push(options.default);
  return classes.join(" ");
};
