// https://stackoverflow.com/questions/32000865/simplest-way-to-merge-es6-maps-sets
function union<T>(...sets: Set<T>[]): Set<T> {
    return sets.reduce((combined, list) => {
        return new Set([...combined, ...list]);
    }, new Set());
}

export { union };
