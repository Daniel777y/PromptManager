import Interaction from './Interaction.js'
import DalleInteraction from './DalleInteraction.js'

export class PromptManager {
  constructor() {
    this.interactions = [];
  }
  showAll() {
    console.log(`Now we have ${this.interactions.length} interaction(s).`);
    for (let interaction of this.interactions) {
      interaction.show();
    }
  }
  show(i) {
    if (i < 0 || i >= this.interactions.length) {
      console.log(`Oops! This interactions id is invalid! You must enter an integer in [0, ${this.interactions.length}].`);
      return;
    }
    this.interactions[i].show();
  }
  remove(i) {
    if (i < 0 || i >= this.interactions.length) {
      console.log(`Oops! This interactions id is invalid! You must enter an integer in [0, ${this.interactions.length}].`);
      return;
    }
    this.interactions.splice(i, 1);
    while (i < this.interactions.length) {
      this.interactions[i].setId(i);
      i += 1;
    }
    console.log(`Removed interaction i!`);
  }
  removeAll() {
    this.interactions = [];
    console.log(`Removed all!`);
  }
  setFeedback(i, x) {
    if (i < 0 || i >= this.interactions.length) {
      console.log(`Oops! This interactions id is invalid! You must enter an integer in [0, ${this.interactions.length}].`);
      return;
    }
    if (x < -1 || x > 1) {
      console.log(`Oops! You have to enter an integer in [-1, 0, 1] (1 for good, -1 for bad, 0 for null or normal) to set the feedback`);
      return;
    }
    this.interactions[i].setFeedback(x);
  }
  addInteraction({type, prompt, response, feedback}) {
    const p = new Interaction({id: this.interactions.length, type, prompt, response, feedback});
    this.interactions.push(p);
  }
  addDalleInteraction({type, prompt, promptImgUrl, response, responseImgUrl, feedback}) {
    const p = new DalleInteraction({id: this.interactions.length, type, prompt, promptImgUrl, response, responseImgUrl, feedback});
    this.interactions.push(p);
  }
  getCount() {
    return this.interactions.length;
  }
}

export default PromptManager;
