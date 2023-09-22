interface styles {
  [key: string]: string;
}
interface eventStyles {
  [key: string]: {[key: string]: string};
}
interface opts {
  classes?: string;
  defaults?: string;
  events?: eventStyles;
}

class ReactSCSS {
  private compile = (styles: styles, classes: string[]): string[] => {
    return classes.map((cls) => styles[cls] || cls);
  };

  private compileEvents = (styles: styles, events: eventStyles): string[] => {
    const style: string[] = [];
    for (let event in events) {
      for (let key in events[event]) {
        const state = events[event][key];
        const value = events[event][state];
        if (value) {
          style.push(styles[value] || value);
        }
      }
    }
    return style;
  };

  public bind = (styles: styles, opts: opts = {}): string | undefined => {
    const cls = opts.classes ? opts.classes.split(" ") : [];
    const dflts = opts.defaults ? opts.defaults.split(" ") : [];
    const evts = opts.events || {};
    const compiled = this.compile(styles, cls).join(" ");
    const compiledDefaults = this.compile(styles, dflts).join(" ");
    const compiledEvents = this.compileEvents(styles, evts).join(" ");
    return [compiled, compiledDefaults, compiledEvents].join(" ").trim();
  };
}

export default new ReactSCSS();
