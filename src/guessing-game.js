class GuessingGame {
    constructor() {
    this.item = null;
    this.right = null;
    this.left = null;}

    setRange(min, max) {
        this.item = (min+max)/2
        this.left = min+1;
        this.right = max-1;

    }

    guess() {
return this.item;
    }

    lower() { this.setRange (this.left, this.item)

    }

    greater() { this.setRange(this.item, this.right)

    }
}

module.exports = GuessingGame;
