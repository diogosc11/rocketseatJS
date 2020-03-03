module.exports = function parseStringAsArray(arrayAsString) {
    arrayAsString.split(',').map(techs => techs.trim());
}