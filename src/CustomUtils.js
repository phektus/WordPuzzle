export const takeRandom = (items) => {
    const index = Math.floor(Math.random() * items.length);
    return items[index];
}

export const shuffle = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}