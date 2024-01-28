import Interaction from './Interaction.js'
import DalleInteraction from './DalleInteraction.js'

export class PromptManager {
  constructor() {
    this.interactions = [];
  }
  getCount() {
    return this.interactions.length;
  }
  getType(i) {
    if (this.interactions.length === 0) {
      console.log(`Oops! We don't have any interaction now.`);
      return;
    }
    if (i < 0 || i >= this.interactions.length) {
      console.log(`Oops! This interactions id is invalid! You must enter an integer in [0, ${this.interactions.length - 1}].`);
      return;
    }
    return this.interactions[i].getType();
  }
  isDalle(i) {
    if (this.interactions.length === 0) {
      console.log(`Oops! We don't have any interaction now.`);
      return;
    }
    if (i < 0 || i >= this.interactions.length) {
      console.log(`Oops! This interactions id is invalid! You must enter an integer in [0, ${this.interactions.length - 1}].`);
      return;
    }
    return this.interactions[i].isDalle();
  }
  show(i) {
    if (this.interactions.length === 0) {
      console.log(`Oops! We don't have any interaction now.`);
      return;
    }
    if (i < 0 || i >= this.interactions.length) {
      console.log(`Oops! This interactions id is invalid! You must enter an integer in [0, ${this.interactions.length - 1}].`);
      return;
    }
    this.interactions[i].show();
  }
  showAll() {
    console.log(`Now we have ${this.interactions.length} interaction(s).`);
    for (let interaction of this.interactions) {
      interaction.show();
    }
  }
  showAllDefault() {
    const defaults = this.interactions.filter(interaction => interaction.getType() === 'Default');
    console.log(`Now we have ${defaults.length} default interaction(s)`);
    for (let interaction of defaults) {
      interaction.show();
    }
  }
  showAllDalle() {
    const dalles = this.interactions.filter(interaction => interaction.getType() === 'Dalle');
    console.log(`Now we have ${dalles.length} dalle interaction(s)`);
    for (let interaction of dalles) {
      interaction.show();
    }
  }
  remove(i) {
    if (this.interactions.length === 0) {
      console.log(`Oops! We don't have any interaction now.`);
      return;
    }
    if (i < 0 || i >= this.interactions.length) {
      console.log(`Oops! This interactions id is invalid! You must enter an integer in [0, ${this.interactions.length - 1}].`);
      return;
    }
    this.interactions.splice(i, 1);
    while (i < this.interactions.length) {
      this.interactions[i].setId(i);
      i += 1;
    }
    console.log(`Removed interaction ${i}!`);
  }
  removeAll() {
    this.interactions = [];
    console.log(`Removed all!`);
  }
  setFeedback(i, x) {
    if (this.interactions.length === 0) {
      console.log(`Oops! We don't have any interaction now.`);
      return;
    }
    if (i < 0 || i >= this.interactions.length) {
      console.log(`Oops! This interactions id is invalid! You must enter an integer in [0, ${this.interactions.length - 1}].`);
      return;
    }
    if (x < -1 || x > 1) {
      console.log(`Oops! You have to enter an integer in [-1, 0, 1] (1 for good, -1 for bad, 0 for null or normal) to set the feedback`);
      return;
    }
    this.interactions[i].setFeedback(x);
  }
  addInteraction({prompt, response, feedback}) {
    const p = new Interaction({id: this.interactions.length, prompt, response, feedback});
    this.interactions.push(p);
  }
  addDalleInteraction({prompt, promptImgUrl, response, responseImgUrl, feedback}) {
    const p = new DalleInteraction({id: this.interactions.length, prompt, promptImgUrl, response, responseImgUrl, feedback});
    this.interactions.push(p);
  }
}

export default PromptManager;
