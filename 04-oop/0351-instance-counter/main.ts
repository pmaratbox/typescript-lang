class Widget {
  static count = 0;

  constructor() {
    Widget.count++;
  }
}

new Widget();
new Widget();
new Widget();

console.log(Widget.count);
