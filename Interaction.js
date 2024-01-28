export class Interaction {
  constructor({id, type = 'Default', prompt = '', response = '', feedback = 0}) {
    this.id = id;
    this.type = type;
    this.prompt = prompt;
    this.response = response;
    this.feedback = feedback;
  }
  getType() {
    return this.type;
  }
  getId() {
    return this.id;
  }
  setId(id) {
    this.id = id;
  }
  getFeedback() {
    return this.feedback;
  }
  setFeedback(feedback) {
    this.feedback = feedback;
  }
  show() {
    console.log(`-----------------------------------------------------------------------------`);
    console.log(`Interaction ${this.id} is a ${this.type} one.`);
    console.log(`Prompt: ${this.prompt.slice(0, 20)}...`);
    console.log(`Response: ${this.response.slice(0, 20)}...`);
    console.log(`Feedback: ${this.feedback}`);
    console.log(`-----------------------------------------------------------------------------`);
  }
  isDalle() {
    return false;
  }
}

export default Interaction;
