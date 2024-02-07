const promptSync = require('prompt-sync')();

function countCharactersAndWords(text: string): { characters: number, words: number } {
    const characters = text.replace(/\s/g, '').length;
    const words = text.trim().split(/\s+/).length;
    return { characters, words };
}

console.log('Word Counter');
const paragraph = promptSync('Enter your paragraph: ');

const { characters, words } = countCharactersAndWords(paragraph);

console.log(`Number of characters (excluding whitespaces): ${characters}`);
console.log(`Number of words: ${words}`);
