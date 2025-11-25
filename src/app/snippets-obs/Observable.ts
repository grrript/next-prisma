export default class Observable {
  _value = null;
  observers: any[] = [];

  constructor(initValue: any) {
    this._value = initValue;
  }

  set(newValue: any) {
    this._value = newValue;
  }

  get() {
    return this._value;
  }

  subscribe = (subscribeCallback: any) => {
    this.observers.push(subscribeCallback);
    this.notify();
  };

  notify() {
    this.observers.forEach((observer) => {
      observer(this._value);
    });
  }
}
