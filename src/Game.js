const categoryData = require('../data/categories.json');

class Game {
    static categories = categoryData;
    static randomizeCategory = () => {
        const self = this;
        const keys = Object.keys(self.categories);
        const index = Math.floor(Math.random() * (keys.length));
        return keys[index];
    }
    static init = () => {
        const self = this;
        return new self();
    };
};    
export default Game;