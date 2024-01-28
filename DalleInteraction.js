import Interaction from './Interaction.js'

export class DalleInteraction extends Interaction {
  constructor({id, type = 'Dalle', prompt = '', promptImgUrl = '404', response = '', responseImgUrl = '404', feedback = 0}) {
    super({id, type, prompt, response, feedback});
    this.promptImgUrl = promptImgUrl;
    this.responseImgUrl = responseImgUrl;
  }
  show() {
    console.log(`-----------------------------------------------------------------------------`);
    console.log(`Interaction ${this.id} is a ${this.type} one.`);
    console.log(`Prompt: ${this.prompt.slice(0, 20)}:`);
    console.log(`PromptImgUrl: ${this.promptImgUrl}`);
    console.log(`Response: ${this.response.slice(0, 20)}`);
    console.log(`ResponseImgUrl: ${this.responseImgUrl}`);
    console.log(`Feedback: ${this.feedback}`);
    console.log(`-----------------------------------------------------------------------------`);
  }
  isDalle() {
    return true;
  }
}

export default DalleInteraction;
