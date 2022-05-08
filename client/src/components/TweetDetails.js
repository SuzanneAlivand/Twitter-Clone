import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import TweetProvider from "./TweetProvider";
import styled from "styled-components";
import { FiArrowLeft } from "react-icons/fi";
import BigTweet from "./BigTweet";
import Error from "./Error";
import Spinner from "./Spinner";

const TweetDetails = () => {
  const [ tweetFetch, setTweetFetch ] = useState(false);
  const [ fetchError, SetFetchError ] = useState(false);
  const [ tweet, setTweet ] = useState();
  const { tweetId } = useParams();

  useEffect(() => {
    if (!tweetFetch) {
      fetch(`/api/tweet/${tweetId}`)
        .then((response) => response.json())
        .then((data) => {
          setTweet(data.tweet);
          console.log(data.tweet);
        })
        .catch((error) => {
          SetFetchError(true);
        })
        .finally(() => {
          setTweetFetch(true);
        });
    }
  }, []);
  
  const history = useHistory();
  const goTohome = (event) => {
    history.push('/');
    event.stopPropagation();
  };

  return (
    <BodyTweetDetails>
      <TweetdHeader>
        <div>
          <FiArrowLeft onClick={goTohome} ></FiArrowLeft>
        </div>
        Meow
      </TweetdHeader>
      {fetchError ? (<Error/>): tweetFetch ?(
      <TweetProvider tweet={tweet}>
        <BigTweet/>
      </TweetProvider>): (<Spinner/>)}
    </BodyTweetDetails>
  );
};

export default TweetDetails;

const BodyTweetDetails = styled.div`
  flex: 0.5;
  border-right: 1px solid var(--twitter-background);
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const TweetdHeader = styled.div`
  border: 1px solid var(--twitter-background);
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 15px 20px;
  font-size: 20px;
  font-weight: 700;
  background-color: white;
  display: flex;
  div {
    margin-right: 15px;
    :hover {
      cursor: pointer;
      color: hsl(258deg, 100%, 50%);
    }
  }
`;
