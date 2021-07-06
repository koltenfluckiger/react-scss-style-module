'use strict';

export default new class Mapper {

  attach(styles, classes) {
    if (classes === undefined) {
      return undefined
    };
    return Object.values(classes).map(cls => {
      if (styles[cls]) {
        return styles[cls]
      } else {
        return cls;
      }
    })
  }

  attachEvents(styles, events) {
    if (events === undefined) {
      return
    };

    var style = [];

    Object.keys(events).forEach(event => {
      Object.keys(events[event]).forEach(key => {
        const state = events[event][key]
        const value = events[event][state]
        if (value) {
          if (styles[value]) {
            style.push(styles[value])
          } else {
            style.push(value)
          }
        }
      })
    })
    return style;
  }

  map(styles, options = {
    classes: undefined,
    defaults: undefined,
    events: undefined
  }) {
    if ((options.classes === undefined) && (options.defaults === undefined) && (options.events === undefined)) {
      console.log("MODULES: sass-css-modules-class-mapper\n Classes, defaults, and events were not specified. Please make sure to properly pass in the object like so.\nClassMapper.map(styles, {classes: props.variant})");
      return
    }
    var classes = options.classes
      ? options.classes.split(" ")
      : undefined;
    var defaults = options.defaults
      ? options.defaults.split(" ")
      : undefined;
    var events = options.events
      ? options.events
      : undefined;

    classes = this.attach(styles, classes)
      ? this.attach(styles, classes)
      : [];
    defaults = this.attach(styles, defaults)
      ? this.attach(styles, defaults)
      : [];
    events = this.attachEvents(styles, events)
      ? this.attachEvents(styles, events)
      : [];

    const results = [].concat(classes, defaults, events);
    return results.join(" ");
  }
}();
