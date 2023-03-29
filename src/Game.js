const categoryData = require('../data/categories.json');

class Game {
    static categories = categoryData;
    static #takeRandom = (items) => {
        const index = Math.floor(Math.random() * items.length);
        return items[index];
    }
    static randomizeCategory = () => {
        const self = this;
        const keys = Object.keys(self.categories);
        return self.#takeRandom(keys);
    }
    static getItems(category, difficulty) {
        const self = this;
        return self.categories[category]['items'][difficulty];
    }
    static generateItems(category) {
        const self = this;
        return {
            'easy': self.#takeRandom(self.getItems(category, 'easy')),
            'medium': self.#takeRandom(self.getItems(category, 'medium')),
            'hard': self.#takeRandom(self.getItems(category, 'hard'))
        };
    }
};    
export default Game;