class GuessingGame {
    constructor() {
    this.item = null;
    this.right = null;
    this.left = null;}

    setRange(min, max) {
        
        this.left = min;
        this.right = max;

    }

    guess() { this.item = Math.round(max-min)/2;
                return this.item;
    }

    lower() { this.setRange (this.left, this.item)

    }

    greater() { this.setRange(this.item, this.right)

    }
}

module.exports = GuessingGame;
