class GuessingGame {
    constructor() {
    this.number = null;
    this.right = null;
    this.left = null;}

    setRange(min, max) {
        
        this.left = min;
        this.right = max;

    }

    guess() { this.number = Math.round((this.right-this.left)/2);
                return this.number;
    }

    lower() { this.setRange(this.left, this.number);

    }

    greater() { this.setRange(this.number, this.right);

    }
}

module.exports = GuessingGame;
