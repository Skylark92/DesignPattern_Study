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

const s1 = new Singleton();
const s2 = new Singleton();

Singleton.instance = null;
const s3 = new Singleton();

console.log(s1, s2, s3);

// 외부에서 instance 접근이 가능해 견고하지 못하다
// 빈 object가 반환되는 게 맞나?

const g1 = Singleton.getInstance();
const g2 = Singleton.getInstance();

console.log(g1 === g2);