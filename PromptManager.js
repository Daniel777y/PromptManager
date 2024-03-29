import Interaction from './Interaction.js'
import DalleInteraction from './DalleInteraction.js'
import TimestampInteraction from './TimestampInteraction.js'

export class PromptManager {
  constructor() {
    this.interactions = [];
  }
  getCount() {
    // return the number of interactions.
    return this.interactions.length;
  }
  getType(i) {
    // check invalid input
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
    // check invalid input
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
    // check invalid input
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
  showAllTimestamp() {
    const timestamps = this.interactions.filter(interaction => interaction.getType() === 'Timestamp');
    console.log(`Now we have ${timestamps.length} timestamp interaction(s)`);
    for (let interaction of timestamps) {
      interaction.show();
    }
  }
  remove(i) {
    // check invalid input
    if (this.interactions.length === 0) {
      console.log(`Oops! We don't have any interaction now.`);
      return;
    }
    if (i < 0 || i >= this.interactions.length) {
      console.log(`Oops! This interactions id is invalid! You must enter an integer in [0, ${this.interactions.length - 1}].`);
      return;
    }
    // delete the i-th interaction
    this.interactions.splice(i, 1);
    // reset the id of interactions following the removed one.
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
    // check invalid input
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
    if (prompt === '' || response === '') {
      console.log(`The prompt and response shouldn't be empty`);
      return;
    }
    const p = new Interaction({id: this.interactions.length, prompt, response, feedback});
    this.interactions.push(p);
  }
  addDalleInteraction({prompt, promptImgUrl, response, responseImgUrl, feedback}) {
    if (prompt === '' || response === '') {
      console.log(`The prompt and response shouldn't be empty`);
      return;
    }
    const p = new DalleInteraction({id: this.interactions.length, prompt, promptImgUrl, response, responseImgUrl, feedback});
    this.interactions.push(p);
  }
  addTimestampInteraction({prompt, response, timestamp = Date.now(), feedback}) {
    if (prompt === '' || response === '') {
      console.log(`The prompt and response shouldn't be empty`);
      return;
    }
    const p = new TimestampInteraction({id: this.interactions.length, prompt, response, timestamp ,feedback});
    this.interactions.push(p);
  }
}

export default PromptManager;
