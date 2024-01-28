import PromptManager from './PromptManager.js';


// feedback constants
const GOOD = 1;
const BAD = -1;
const NORMAL = 0;

// init a prompt manager
const manager = new PromptManager();

manager.showAll();

// add some default interactions
manager.addInteraction({prompt: 'this is my first prompt', response: 'this is my first response', feedback: GOOD});
manager.addInteraction({prompt: 'second prompt', response: 'second response', feedback: NORMAL});
manager.addInteraction({prompt: 'default prompt!', response: 'default response!', feedback: BAD});
manager.addInteraction({prompt: 'Daniel\'s prompt', response: 'Daniel\'s response', feedback: GOOD});
manager.addInteraction({prompt: 'A secret prompt', response: 'A public response', feedback: NORMAL});
// get the number of interactions
console.log(manager.getCount());
manager.showAll();

// remove an interaction
// invalid input
manager.show(6);
// remove interaction 1
manager.show(1);
manager.remove(1);
console.log(manager.getCount());
manager.show(1);
manager.showAll();

// add some Dalle interactions
manager.addDalleInteraction({prompt: 'this is my first dalle prompt', promptImgUrl: 'myPromptUrl', response: 'this is my first dalle response', responseImgUrl: 'myResponseUrl', feedback: NORMAL});
manager.addDalleInteraction({prompt: 'A dalle prompt', promptImgUrl: 'WhatAPromptImg', response: 'A dalle response', responseImgUrl: 'WahtAResponseImg', feedback: GOOD});
// get the number of interactions
console.log(manager.getCount());
manager.showAll();

// show all dalle interactions
manager.showAllDalle();
// show all default interactions
manager.showAllDefault();

// test getType() function
console.log(manager.getType(0));
console.log(manager.getType(5));

// test isDalle() function
console.log(manager.isDalle(1));
console.log(manager.isDalle(4));

// test show() function and remove a dalle interaction
manager.show(5);
manager.remove(5);
manager.showAllDalle();

// test invalid input
manager.remove(7);
manager.show(-1);
manager.setFeedback(9);
manager.getType(10);

// remove all the interactions
manager.removeAll();
manager.showAll();

// test invalid input
manager.remove(7);
manager.show(-1);
manager.setFeedback(9);
manager.getType(10);
