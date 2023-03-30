export const generateMeow = (limit = 10) => {
    const word = "meow";
    let result = "Meow";
    let iterator = Math.floor(Math.random()*limit)-1;
    for (let index = 0; index < iterator; index++) {
        result += ` ${word}`;
    }
    return result;
}