  /* 
    // THIS WAS THE ORIGINAL FUNCTION
    function Tweet({name, message, status}) {
      return (
        <div className="tweet">
        <h2>Name: {name}</h2>
        <h3>Message: {message}, status: {status}</h3>
        <button>Delete</button>
        <button>Like</button>
        </div>
      )
    }
    export default Tweet;

    here we "message" before was referring to const message = "I love my dog" in App.js
    now in App.js we have something more complex: We have tweets in App.js refers to the array
    with a bunch of tweets, in "Tweetlist.js" we take each single tweet, and we pass it
    as a prop of Tweet named message={tweet} as displayed here:

  */
  
  function Tweet({name, message, status}) {
    return (
      <div className="tweet">
        <h2>Name: {name}</h2>
        <h3>Message: {message}, status: {status}</h3>
        <button>Delete</button>
        <button>Like</button>
      </div>
    )
  }
  export default Tweet;