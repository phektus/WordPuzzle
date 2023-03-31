const categoryData = require('../data/categories.json');
const { takeRandom } = require('./CustomUtils');

class Game {
    static categories = categoryData;
    static randomizeCategory = () => {
        const self = this;
        const keys = Object.keys(self.categories);
        return takeRandom(keys);
    }
    static getItems = (category, difficulty) => {
        const self = this;
        return self.categories[category]['items'][difficulty];
    }
    static generateItems = (category) => {
        const self = this;
        return {
            'easy': takeRandom(self.getItems(category, 'easy')),
            'medium': takeRandom(self.getItems(category, 'medium')),
            'hard': takeRandom(self.getItems(category, 'hard'))
        };
    }
    static getPoints = (difficulty) => {
        return {
            'easy': 10,
            'medium': 15,
            'hard': 25
        }[difficulty];
    }
};    
export default Game;