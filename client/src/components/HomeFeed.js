import styled from "styled-components";
import NewTweet from "./NewTweet";
import { CurrentUserContext } from "./CurrentUserContext";
import { useContext, useState, useEffect } from "react";
import Error from "./Error";
import Spinner from "./Spinner";
import TweetProvider from "./TweetProvider";
import Tweet from "./Tweet";

const HomeFeed = () => {
  const { errorUser } = useContext(CurrentUserContext);
  const [feedLoadingStatus, setFeedLoadingStatus] = useState(false);
  const [tweetsById, setTweetsById] = useState();
  const [tweetIds, setTweetIds] = useState([]);
  const [homeFeederror, SetHomeFeederror] = useState(false);

  useEffect(() => {
    if (!feedLoadingStatus) {
      fetch("api/me/home-feed")
        .then((response) => response.json())
        .then((data) => {
          setTweetsById(data.tweetsById);
          setTweetIds(data.tweetIds);
          console.log(data.tweetsById);
          console.log(data.tweetIds);
        })
        .catch((error) => {
          SetHomeFeederror(true);
        })
        .finally(() => {
          setFeedLoadingStatus(true);
        });
    }
  }, [feedLoadingStatus]);

  return (
    <>
      {errorUser ? (
        <Error />
      ) : (
        <FeedHom>
          <FeedHeader>Home</FeedHeader>
          <NewTweet feedLoadingStatus={feedLoadingStatus} setFeedLoadingStatus={setFeedLoadingStatus} />
          {homeFeederror ? (
            <Error></Error>
          ) : feedLoadingStatus ? (
            tweetIds.map((id) => {
              return <TweetProvider tweet={tweetsById[id]} key={id}>
                <Tweet/>
              </TweetProvider>;
            })
          ) : (
            <Spinner />
          )}
        </FeedHom>
      )}
    </>
  );
};

export default HomeFeed;

// styling Home
const FeedHom = styled.div`
  flex: 0.5;
  border-right: 1px solid var(--twitter-background);
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const FeedHeader = styled.div`
  border: 1px solid var(--twitter-background);
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 15px 20px;
  font-size: 20px;
  font-weight: 700;
  background-color: white;
`;
