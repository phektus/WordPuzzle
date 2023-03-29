class Game {
    getCategories = () => {
        return {
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
    };
    static init = () => {
        return new this();
    };
};    
export default Game;