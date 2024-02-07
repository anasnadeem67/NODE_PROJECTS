var promptSync = require('prompt-sync')();
function countCharactersAndWords(text) {
    var characters = text.replace(/\s/g, '').length;
    var words = text.trim().split(/\s+/).length;
    return { characters: characters, words: words };
}
console.log('Word Counter');
var paragraph = promptSync('Enter your paragraph: ');
var _a = countCharactersAndWords(paragraph), characters = _a.characters, words = _a.words;
console.log("Number of characters (excluding whitespaces): ".concat(characters));
console.log("Number of words: ".concat(words));
