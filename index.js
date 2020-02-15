'use strict';

export default new class ClassMapper {

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

  map(styles, options) {
    var names = options.names
      ? options.names.split(" ")
      : undefined;
    var defaults = options.defaults
      ? options.defaults.split(" ")
      : undefined;
    var events = options.events
      ? options.events
      : undefined;
    names = this.attach(styles, names)
      ? this.attach(styles, names)
      : [];
    defaults = this.attach(styles, defaults)
      ? this.attach(styles, defaults)
      : [];
    events = this.attachEvents(styles, events)
      ? this.attachEvents(styles, events)
      : [];

    if ((names.length === 0) && (defaults.length === 0) && (events.length === 0)) {
      return
    }
    const results = [].concat(names, defaults, events);
    return results.join(" ");
  }
}();
