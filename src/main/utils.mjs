// import { ask } from 'stdio';
// export async function getUserInput (message) {
//     let userInput = await ask(message);
//     return userInput;
// }

export function createRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}
