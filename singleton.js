class Singleton {
  constructor() {
    if (Singleton.instance) {
      return console.warn("Warning: Singleton class already instantiated");
    }
    Singleton.instance = this;
    this.version = Date.now();
    this.config = "Singleton";
  }
  static getInstance() {
    if (!this.instance) {
      this.instance = new Singleton();
    }
    return this.instance;
  }
}

module.exports = Singleton;