import { useContext } from "react";
import { TweetContext } from "./TweetProvider";
import moment from "moment";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { FiHeart, FiMessageCircle, FiShare, FiRepeat } from "react-icons/fi";

const Tweet = () => {
  const {
    retweetFrom,
    status,
    handle,
    displayName,
    timestamp,
    media,
    avatarSrc,
    id,
    numOfLikes,
    numOfRetweets,
    handleToggleLike,
  } = useContext(TweetContext);

  const date = moment(timestamp).format("MMM • Do");
  let mediaSrc = "";
  if (media[0]) {
    mediaSrc = media[0].url;
  }

  const history = useHistory();
  const goToTweetDetails = () => {
    history.push(`/tweet/${id}`);
  };

  const goToProfile = (event) => {
    history.push(`/${handle}`);
    event.stopPropagation();
  };

  return (
    <TweetContainer onClick={goToTweetDetails}>
      <Remeow>
        {retweetFrom && (
          <>
            <FiRepeat></FiRepeat>
            <span>&nbsp;{retweetFrom.handle} remeowd</span>
          </>
        )}
      </Remeow>
      <TweetDiv>
        <Avatar src={avatarSrc} />
        <TweetBody>
          <TweetHeader>
            <h3 onClick={goToProfile}>{displayName}</h3>
            <span>
              &nbsp;@{handle} {date}
            </span>
          </TweetHeader>
          <p>{status}</p>
          <div>{media[0] && <TweetImg src={mediaSrc}></TweetImg>}</div>
          <Icons>
            <IconDiv>
              <FiMessageCircle />
            </IconDiv>
            <IconDiv>
              <FiRepeat />
              {retweetFrom && <span>{1}</span>}
            </IconDiv>
            <IconDiv>
              <IcButton onClick={handleToggleLike}>
                <FiHeart />
              </IcButton>
              {numOfLikes > 0 ? <span>{numOfLikes}</span> : ""}
            </IconDiv>
            <IconDiv>
              <FiShare />
            </IconDiv>
          </Icons>
        </TweetBody>
      </TweetDiv>
    </TweetContainer>
  );
};
export default Tweet;

const TweetContainer = styled.div`
  border-bottom: 1px solid var(--twitter-background);
  padding-bottom: 10px;
  padding-right: 10px;
  /* &:active {
    border: 1px solid hsl(258deg, 100%, 50%);
  } */
`;
const Remeow = styled.div`
  color: #808080;
  font-size: 15px;
  padding: 10px 20px;
`;
const TweetDiv = styled.div`
  display: flex;
  align-items: flex-start;
`;
const Avatar = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin: 10px;
`;
const TweetImg = styled.img`
  width: 100%;
  height: 320px;
  border-radius: 20px;
`;
const TweetBody = styled.div`
  padding: 10px;
  flex: 1;
  p {
    margin-bottom: 15px;
  }
`;
const TweetHeader = styled.div`
  margin-bottom: 10px;
  display: flex;
  span {
    color: #808080;
    font-size: 15px;
  }
  h3 {
    :hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;
const Icons = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
`;
const IconDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    margin-left: 5px;
  }
`;

const IcButton = styled.button`
  border-radius: 50%;
  border: 1px solid lightgray;
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
