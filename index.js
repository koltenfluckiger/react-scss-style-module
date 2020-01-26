'use strict';

exports.map = (styles, classNames) => {

  if (Object.keys(styles).length < 1) {
    // new Error("Styles is empty. Please check this and try again.");
    return "";
  };
  if (styles.constructor != Object) {
    //new Error('Styles is not of an object type. Pass in the styles object from the import. EX: import styles from "./container.module.css";')
    return "";
  };
  if ((typeof(classNames) != "string") && (typeof(classNames) != "array")) {
    // new Error('Class Names is not of an string type or array. Type: ' + typeof(classNames) + '. Pass in the class names in string or array format. EX: (styles, "container red visible") or (styles, ["container", "red", "visible"]);')
    return "";
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
