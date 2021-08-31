class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, res, power) {
        super(name, cost);
        this.res = res;
        this.power = power;
    }

    attack(target) {
        if (target.name == this.name) {
            console.log('Cannot attack yourself');
        } else {
            this.play(target);
            target.res -= this.power;
        }
    }

    play(target) {
        if (target instanceof Unit) {
            console.log('Target is a unit')
        } else {
            throw new Error('Target must be a unit!');
        }
    }
}

class Effect extends Card {
    constructor(name, cost, mag) {
        super(name, cost);
        this.mag = mag;
    }

    effects(target) {
        if (this.name == 'Hard Algorithm') {
            target.res += this.mag;
            target.cost -= this.cost;
        } else if (this.name == 'Unhandled Promise Rejection') {
            target.res -= this.mag;
            target.cost -= this.cost;
        } else {
            target.power += this.mag;
            target.cost -= this.cost;
        }
    }
}

const rd = new Unit('Red Belt Ninja', 3, 4, 3);
const bl = new Unit('Black Belt Ninja', 4, 4, 5);

const ha = new Effect('Hard Algorithm', 2, 3);
const upr = new Effect('Unhandled Promise Rejection', 1, -2);
const pp = new Effect('Pair Programming', 3, 2);


console.log('name:', rd.name);
console.log('cost:', rd.cost);
console.log('res:', rd.res);
console.log('power:', rd.power);
console.log();

console.log('name:', bl.name);
console.log('cost:', bl.cost);
console.log('res:', bl.res);
console.log('power:', bl.power);
console.log();

ha.effects(rd);
upr.effects(rd);
pp.effects(rd);

rd.attack(bl);

console.log('name:', rd.name);
console.log('cost:', rd.cost);
console.log('res:', rd.res);
console.log('power:', rd.power);
console.log();

console.log('name:', bl.name);
console.log('cost:', bl.cost);
console.log('res:', bl.res);
console.log('power:', bl.power);