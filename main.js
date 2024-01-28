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
manager.addInteraction({prompt: 'seond prompt', response: 'second response', feedback: NORMAL});
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
