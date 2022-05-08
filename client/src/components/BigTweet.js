import { TweetContext } from "./TweetProvider";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import moment from "moment";
import styled from "styled-components";
import { FiHeart, FiMessageCircle, FiShare, FiRepeat } from "react-icons/fi";

const BigTweet = () => {
  const {
    retweetFrom,
    displayName,
    handle,
    avatarSrc,
    media,
    timestamp,
    status,
    handleToggleLike,
    numOfLikes,
  } = useContext(TweetContext);

  const history = useHistory();
  const goToProfile = (event) => {
    history.push(`/${handle}`);
    event.stopPropagation();
  };

  let mediaSrc = "";
  if (media[0]) {
    mediaSrc = media[0].url;
  }

  const date = moment(timestamp).format("h:mm A • MMM Do, YYYY");

  return (
    <TweetContainer>
      <Remeow>
        {retweetFrom && (
          <>
            <FiRepeat></FiRepeat>
            <span>&nbsp;{retweetFrom.handle} remeowd</span>
          </>
        )}
      </Remeow>
      <TweetDiv>
        <Topic>
          <Avatar src={avatarSrc} />
          <TweetHeader>
            <h3 onClick={goToProfile}>{displayName}</h3>
            <span>
              @{handle} {date}
            </span>
          </TweetHeader>
        </Topic>
        <TweetBody>
          <p>{status}</p>
          <div>{media[0] && <TweetImg src={mediaSrc}></TweetImg>}</div>
          <Time>{date} . Critter web app</Time>
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
export default BigTweet;

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
  flex-direction: column;
  align-items: flex-start;
`;
const Avatar = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin: 10px;
`;
const TweetImg = styled.img`
  width: 600px;
  height: 340px;
  border-radius: 20px;
`;
const TweetBody = styled.div`
  padding: 10px;
  p {
    margin-bottom: 15px;
    font-size: 20px;
  }
`;
const TweetHeader = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
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
  padding-top:10px ;
  border-top: 1px solid var(--twitter-background);
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
const Time = styled.div`
  color: #808080;
  font-size: 16px;
  padding: 10px 10px;
`;
const Topic = styled.div`
  display: flex;
`;
