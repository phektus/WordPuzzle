class Game {
    static categories = {
        'cities': {
            label: 'Cities',
            items: [],
        },
        'foods': {
            label: 'Foods',
            items: [],
        },
        'animals': {
            label: 'Animals',
            items: []
        }
    };
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