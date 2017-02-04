class GuessingGame {
    constructor() {
        this.min_num = 0;
        this.max_num = 0;
        this.final = 0;

    }

    setRange(min, max) {
        this.min_num = min;
        this.max_num = max;
    }

    guess() {
        this.final = Math.ceil((this.min_num+this.max_num)/2);
        return this.final;
    }

    lower() {
        this.max_num = this.final;
        return this.max_num;
    }

    greater() {
        this.min_num = this.final;
       return this.min_num;
    }
}

module.exports = GuessingGame;
