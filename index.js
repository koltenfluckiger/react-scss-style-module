'use strict';

exports.map = (styles, classNames) => {

  if ((Object.keys(styles).length < 1) || classNames.length < 1) {
    return new Error("Styles or Class Names is empty. Please check these and try again.")
  };
  if (styles.constructor != Object) {
    return new Error('Styles is not of an object type. Pass in the styles object from the import. EX: import styles from "./container.module.css";')
  };
  if ((typeof(classNames) != "string") && (typeof(classNames) != "array")) {
    return new Error('Class Names is not of an string type or array. Type: ' + typeof(classNames) + '. Pass in the class names in string or array format. EX: (styles, "container red visible") or (styles, ["container", "red", "visible"]);')
  };

  const classNamesArray = typeof(classNames) === "string"
    ? classNames.split(" ")
    : classNames;

  return Object.values(classNamesArray).map(cssClass => {
    if (styles[cssClass]) {
      return styles[cssClass]
    } else {
      return cssClass
    }
  }).join(" ");
};
