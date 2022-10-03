const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Library',
    weapon: 'Rope'
};

const declareMurderer = function() {
    return `The murderer is ${scenario.murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);
// The output will show that the murderer is Miss Scarlett because she is the scenario.murderer

const murderer = 'Professor Plum';

const changeMurderer = function() {
murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
// There will be an error - murderer has already been declared with a const as Professor Plum and cannot be changed to Mrs. Peacock

let murderer = 'Professor Plum';

const declareMurderer = function() {
let murderer = 'Mrs. Peacock';
return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);
// The first verdict will show Mrs Peacock
// The second verdict will show Prof Plum

let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
let suspectThree = 'Colonel Mustard';
return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);
// The console will print Mustard instead of Peacock
// The console will print Peacock

const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Kitchen',
    weapon: 'Candle Stick'
};

const changeWeapon = function(newWeapon) {
    scenario.weapon = newWeapon;
}

const declareWeapon = function() {
    return `The weapon is the ${scenario.weapon}.`;
}

changeWeapon('Revolver');
const verdict = declareWeapon();
console.log(verdict);
// The console will print Revolver

let murderer = 'Colonel Mustard';

const changeMurderer = function() {
murderer = 'Mr. Green';

const plotTwist = function() {
    murderer = 'Mrs. White';
}

plotTwist();
}

const declareMurderer = function () {
return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// The murderer is Mrs White

let murderer = 'Professor Plum';

const changeMurderer = function() {
murderer = 'Mr. Green';

const plotTwist = function() {
    let murderer = 'Colonel Mustard';

    const unexpectedOutcome = function() {
    murderer = 'Miss Scarlet';
    }

    unexpectedOutcome();
}

plotTwist();
}

const declareMurderer = function() {
return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// Mr Green will be the murderer because Mustard and Scarlett are local variables

const scenario = {
    murderer: 'Mrs. Peacock',
    room: 'Conservatory',
    weapon: 'Lead Pipe'
};

const changeScenario = function() {
    scenario.murderer = 'Mrs. Peacock';
    scenario.room = 'Dining Room';

    const plotTwist = function(room) {
    if (scenario.room === room) {
        scenario.murderer = 'Colonel Mustard';
    }

    const unexpectedOutcome = function(murderer) {
        if (scenario.murderer === murderer) {
        scenario.weapon = 'Candle Stick';
        }
    }

    unexpectedOutcome('Colonel Mustard');
    }

    plotTwist('Dining Room');
}

const declareWeapon = function() {
    return `The weapon is ${scenario.weapon}.`
}

changeScenario();
const verdict = declareWeapon();
console.log(verdict);

// Weapon = candlestick because the changescenario function calls plot twist before unexpected outcome, resulting in a truthy unexpected outcome