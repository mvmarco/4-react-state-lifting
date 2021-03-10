/*
  Using the chrome extension "React tools" you can see the section "components"
  by selecting for instance, the "App" you see under "hooks" a "state" called "Marco".
  Or again by selecting "TweetList" we can see the "Props", "message", "name", "setName".

  The thing is that if you go to "CreateTweet", the "state" is empty and when we type something
  is gonna fill up or it updates also there. What we want is: click submit and clear the "state", 
  bringing back to the initial state "". And Create another state that contains, like a sort 
  of an array, a list of all the previous submited status.

  So what we can do is creating another state const with as user state an empty array:
  const [tweets, setTweets] = useState([]);

  To avoid oto click submit and having the page refreshed (default behaviour of the browser)
  we can add. This because in React we do not want anything refreshed, React does it by itself.

*/

import {useState} from 'react';
function CreateTweet() {
  // state
  const [textInput, setTextInput] = useState('');
  const [tweets, setTweets] = useState([]);
  // functions
  const userInputHandler = (e) => {
    setTextInput(e.target.value);
  };
  function submitTweetHandler(e) {
    console.log("hey");
    e.preventDefault();
  }
  return (
    <form>
      <textarea value={textInput} onChange={userInputHandler} name="" id="" cols="50" rows="5"></textarea>
      <button onClick={submitTweetHandler}>Submit</button>
      <p> <strong> Tweet output: {textInput} </strong></p>
    </form>
  )
}

export default CreateTweet;