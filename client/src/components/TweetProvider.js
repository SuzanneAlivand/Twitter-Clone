import { createContext, useState } from "react";
export const TweetContext = createContext(null);

const TweetProvider = ({ tweet, children }) => {
  const [numOfLikes, setNumOfLikes] = useState(tweet.numLikes);
  const [numOfRetweets, setNumOfRetweets] = useState(tweet.numRetweets);
  const [isLiked, setIsLiked] = useState(tweet.isLiked);
  const [isRetweeted, setIsRetweeted] = useState(tweet.isRetweeted);

  const handleToggleLike = (ev) => {
    ev.stopPropagation();
    setIsLiked(!isLiked);
    if (!isLiked) {
      setNumOfLikes((c) => c + 1);
    } else {
      setNumOfLikes((c) => c - 1);
    }
  };

  // const handleToggleRetweet = (ev) => {
  //   ev.stopPropagation();
  //   setIsRetweeted(!isRetweeted);
  //   if (!isRetweeted) {
  //     setNumOfRetweets((c) => c + 1);
  //   } else {
  //     setNumOfRetweets((c) => c - 1);
  //   }
  // };

  return (
    <TweetContext.Provider
      value={{
        author: tweet.author,
        status: tweet.status,
        id: tweet.id,
        displayName: tweet.author.displayName,
        handle: tweet.author.handle,
        avatarSrc: tweet.author.avatarSrc,
        media: tweet.media,
        numLikes: tweet.numLikes,
        numRetweets: tweet.numRetweets,
        timestamp: tweet.timestamp,
        isRetweetedByCurrentUser: isRetweeted,
        isLikedByCurrentUser: isLiked,
        numOfLikes,
        numOfRetweets,
        handleToggleLike,
        retweetFrom: tweet.retweetFrom,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
};

export default TweetProvider;
