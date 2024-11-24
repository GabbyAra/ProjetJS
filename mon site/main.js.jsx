class Guerrier {
    constructor(attack, precision, life) {
    this.attack = attack;
    this.precision = precision;
    this.life = life;
    }
    getAttack() {
        console.log(this.attack);
    }
}
let Oliver = new Guerrier(7, 0.7, 45)
