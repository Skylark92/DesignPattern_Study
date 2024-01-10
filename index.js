/* Singleton */

const Singleton = require('./singleton');

const s1 = new Singleton();
const s2 = new Singleton();

console.log(s1, s2);

const g1 = Singleton.getInstance();
const g2 = Singleton.getInstance();

console.log(g1 === g2);
