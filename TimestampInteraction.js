import Interaction from './Interaction.js'

export class TimestampInteraction extends Interaction {
  constructor({id, type = 'Timestamp', prompt = '', response = '', timestamp = Date.now(), feedback = 0}) {
    super({id, type, prompt, response, feedback});
    this.timestamp = timestamp;
  }
  show() {
    console.log(`----------------------------------------------------------------------------`);
    console.log(`Interaction ${this.id} is a ${this.type} one.`);
    console.log(`Prompt: ${this.prompt.slice(0, 20)}...`);
    console.log(`Response: ${this.response.slice(0, 20)}...`);
    console.log(`Feedback: ${this.feedback}`);
    console.log(`Timestamp: ${this.timestamp}`);
    console.log(`----------------------------------------------------------------------------`);
  }
}

export default TimestampInteraction;
