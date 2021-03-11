/*
  // ORIGINAL VERSION

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
*/

/* 
  In order to display multiple tweets as independent messages, we can get rid of:
      <Tweet name={name} status='Active' message={message} />
      <Tweet name={name} status='Offline' message={message} />
      <Tweet name={name} status='Busy' message={message} />
  and instead take tweets, now stored inside the message property (tweets={tweets}) in App.js,
  and do:

  message={tweet} which basicaly takes each single item of the array and display it as
  a single tweet component


*/


import Tweet from "./Tweet";

function TweetList({ name, tweets, setName }) {
  const changeName = () => {
    setName('john')
  }
  return (
    <div className="tweet-list">
      <button onClick={changeName}> BUTTTON CHANGE ALL THE NAMES</button>
      {tweets.map(tweet => (
        <Tweet name={name} status='Active' message={tweet} />
      ))}

    </div>
  )
}


export default TweetList