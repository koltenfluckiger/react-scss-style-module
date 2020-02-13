'use strict';

exports.map = (styles, options = {
  names: [],
  default: ""
}) => {
  const names = typeof(options.names) === "string"
    ? options.names.split(" ")
    : [];
  return Object.values(names).map(css => {
    if (styles[css]) {
      return styles[css];
    } else {
      return css;
    }
  }).concat(styles[options.default]).join(" ");
};
