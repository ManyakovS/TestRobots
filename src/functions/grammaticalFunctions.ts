import Nouns from './Nouns.json'

export const getNoun = (number: number, one: string, two: string, five: string) : string => {
    let returned;
    let n = Math.abs(number);
    n %= 100;
    while(n > 20)
        n %= 10;
    
    if (n >= 5 && n <= 20 || n == 0) {
        returned = five;
    }
/*     n %= 10; */
    if (n === 1) {
        returned = one;
    }
    if (n >= 2 && n <= 4) {
        returned = two;
    }
    return `${number} ${returned}`;
};

export const getNounForName = (number: number, name: string) : string => {
    let noun = Nouns.find(n => n.name == name)
    let returned;
    let n = Math.abs(number);
    n %= 100;
    while(n > 20)
        n %= 10;

    if (n >= 5 && n <= 20 || n == 0) {
        returned = noun?.five;
    }
/*     n %= 10; */
    if (n === 1) {
        returned = noun?.one;
    }
    if (n >= 2 && n <= 4) {
        returned = noun?.two;
    }
    return `${number} ${returned}`;
};

export const getPunctuation = (index: number, length: number ) :string => {
    let punctuation;
        switch (index) {
            case 0:
                punctuation = ''
                break;

            case (length - 1):
                punctuation = " и"
                break;

            default:
                punctuation = ","
                break;
        }
    return punctuation
}


