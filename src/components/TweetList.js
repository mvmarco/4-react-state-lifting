/* 
  In order to: click submit and clear the "state", bringing back to the initial state "".
  And create another state that contains, like a sort of an array, a list of all
  the previous submited status.
*/

import Tweet from "./Tweet";

function TweetList ({name, message, setName}) {
  const changeName = () => {
    setName('john')
  }
  return (
    <div className="tweet-list">
      <button onClick={changeName}> BUTTTON CHANGE ALL THE NAMES</button>
      <Tweet name={name} status='Active' message={message}/>
      <Tweet name={name} status='Offline' message={message} />
      <Tweet name={name} status='Busy' message={message} />
    </div>
  )
}


export default TweetList