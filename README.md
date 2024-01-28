# OOP Coding - PromptManager

This project implement a prompt manager, recording interactions with GPT. There three types of interactions: default, Dalle and Timestamp.

Each of them includes different features. Taking advantadge of prompt manager, you can add, show, modify and delete interactions.

License: MIT

## Test

### Build

Enter commands below in the terminal, there will be test output.

You can write your own code in `main.js` to play around.

```
git clone git@github.com:Daniel777y/PromptManager.git
cd PromptManager
npm i
node main.js
```

## Usage

Here is the introduction of prompt manager. It will show you how to create a manager, add a new interaction, show information of interactions, delete some of them, and so on.

### PromptManager

We can create a new prompt manager.

```
const manager = new PromptManager();
```

### getCount

This function will show the number of interactions currently stored in the manager.

```
console.log(manager.getCount());
```

### getType

This function will show the type of an interaction (0 is the first one).

```
console.log(manager.getType(0));
```

### isDalle

This function will return a boolean value, `true` for Dalle interaction, `false` for not (0 is the first one).

```
console.log(manager.isDalle(0));
```

### show

This function will show the information of an interaction (0 is the first one).

```
manager.show(0);
```

This is an example output:

```
-----------------------------------------------------------------------------
Interaction 3 is a Default one.
Prompt: A secret prompt...
Response: A public response...
Feedback: 0
-----------------------------------------------------------------------------
```

### showAll

This function will show all the interactions.

```
manager.showAll();
```


### showAllDefault

This function will show all the default interactions (only text prompt and response).

```
manager.showAllDefault();
```

### showAllDalle

This function will show all the Dalle interactions.

```
manager.showAllDalle();
```

### remove

This function will remove an interaction from manager (0 is the first one).

```
manager.remove(0);
```

### removeAll

This function will remove all the interactions.
```
manager.removeAll();
```

### setFeedback

This function has 2 parameters `i` and `x`, meaning that you set the i-th interaction's feedback to `x`.

Note that `x` should be an integer in `[-1, 0, 1]`, `-1` for bad, `0` from null or normal, `1` for good.

```
manager.setFeedback(0, 1);
```


### addInteraction

This function receives an object as the parameter, creating a default interaction (only text prompt and response).

```
// change the value to create your own default interaction!
manager.addInteraction({
  prompt: '',
  response: '',
  feedback: 0,
});
```

### addDalleInteraction

This function receives an object as the parameter, creating a Dalle interaction (with images in prompt and response).

```
// change the value to create your own Dalle interaction!
manager.addDalleInteraction({
  prompt: '',
  promptImgUrl: '404',
  response: '',
  responseImgUrl: '404',
  feedback: 0,
})
```


## Implement of Interaction

### Interaction

#### Fields

A default interaction contains fields listed below:

```
{
  id: integer, a unique id of this interaction in the manager.
  type: string, default value is 'Default'.
  prompt: string, default value is ''.
  response: string, default value is ''.
  feedback: integer, one of [-1, 0, 1].
}
```

#### Functions

A default interaction contains functions listed below:

```
getType(): return a string represents its type.
isDalle(): return a boolean value represents if it is a Dalle interaction.
getId(): return an integer which is its id.
setId(id): update its id.
getFeedback(): return an integer which is its feedback.
setFeedback(feedback): update its feedback.
show(): print the information.
```

### DalleInteraction

#### Fields

A Dalle interaction contains all the fields in a default interaction. Other than that, it also contains two images in prompt and response.

```
{
  promptImgUrl: string, default value is '404'.
  responseImgUrl: string, default value is '404'.
}
```

#### Functions

A Dalle interactions contains all the functions in a default interaction.

### TimestampInteraction

#### Fields

A Timestamp interaction contains all the fields in a default interaction. Other than that, it also contains a timestamp.

```
{
  timestamp: a number, Date.now()
}
```

#### Functions

A Timestamp interactions contains all the functions in a default interaction.

## Creative Feature

### Feedback

In ChatGPT, whenever you ask a question then get response, you can click a button "good response" or "bad response" to give your feedback.

This feedback is useful to update the training data and improve GPT's performance. In my code, every interaction contains a field `feedback`, where `1` for good response, `0` for null value or normal response, `-1` for bad response.

By using the `show()` method, a prompt manager will display the feedback of interactions, or you can reset the feedback by using `setFeedback(i, x)` method.
