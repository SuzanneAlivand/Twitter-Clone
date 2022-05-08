import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import TweetProvider from "./TweetProvider";
import moment from "moment";
import Tweet from "./Tweet";
import Error from "./Error";
import Spinner from "./Spinner";
import OtherTabs from "./OtherTabs";
import { FiMapPin ,FiCalendar} from "react-icons/fi";




const Profile = () => {
  const [profileLoadingStatus, setProfileLoadingStatus] = useState(false);
  const [fetchError, setFetchError] = useState(false);
  const [profile, setProfile] = useState("");
  const { profileId } = useParams();
  const [tweetsById, setTweetsById] = useState([]);
  const [tweetIds, setTweetsIds] = useState([]);
  const [userTweetError, setUserTweetError] = useState(null);

  useEffect(() => {
    if (!profileLoadingStatus) {
      fetch(`api/${profileId}/profile`)
        .then((response) => response.json())
        .then((data) => {
          setProfile(data.profile);
          console.log(profile.isFollowingYou);
        })
        .catch((error) => {
          setFetchError(true);
        })
        .finally(() => {
          profileLoadingStatus(true);
        });
    }
  }, []);

  useEffect(() => {
    fetch(`api/${profileId}/feed`)
      .then((response) => response.json())
      .then((data) => {
        setTweetsById(data.tweetsById);
        setTweetsIds(data.tweetIds);
      })
      .catch((error) => {
        setUserTweetError(true);
      })
      .finally(() => {});
  }, []);

  const [currentTab, setCurrentTab] = useState("Meows");
  const tabs = ["Meows", "Media", "Likes"];
  const joinedDate = moment(profile.joined).format("MMMM YYYY");
  console.log(profile.location);
  return (
    <>
      {fetchError ? (
        <Error />
      ) : profile ? (
        <ProfileDiv>
          <Banner src={profile.bannerSrc} />
          <Avatar src={profile.avatarSrc} />
          <Button>following</Button>
          <Header>
          <h3>{profile.displayName}</h3>
          <span>@{profile.handle}&ensp;</span>
          {profile.isFollowingYou ? <SpanFollowing>Follows you</SpanFollowing>:''}
          </Header>
          <p>{profile.bio}</p>
          <History>
          <FiMapPin/>
          <div>&nbsp;{profile.location}&nbsp;&nbsp;&nbsp;</div>
          <FiCalendar/>
          <span>&nbsp;{joinedDate}</span>
          </History>
          <Relationship>
          <span><span style={{fontWeight: "bold"}}>{profile.numFollowing}&nbsp;</span>following &nbsp;</span>
          <span><span style={{fontWeight: "bold"}}>{profile.numFollowers} &nbsp;</span>followers</span>
          </Relationship>
          <Tabs>
            {tabs.map((tab) => {
              return (
                <OtherTabs
                  key={tab}
                  title={tab}
                  setCurrentTab={setCurrentTab}
                />
              );
            })}
          </Tabs>
          <Tweetdiv>
          {currentTab === "Meows"
            ? tweetIds.map((id) => {
                return (
                  <TweetProvider tweet={tweetsById[id]} key={id}>
                    <Tweet />
                  </TweetProvider>
                );
              })
            : null}
            </Tweetdiv>
        </ProfileDiv>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Profile;

const ProfileDiv = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--twitter-background);
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  p{
    font-size: 18px;
    margin:10px 0px 20px 10px;
  }
`;
const Banner = styled.img`
  min-height: 280px;
  background-size: cover;
  position: relative;
  background-position: center;
  background-repeat: no-repeat;
`;
const Avatar = styled.img`
  border-radius: 50%;
  border: 2px solid white;
  width: 150px;
  height: 150px;
  z-index: 1;
  margin: -75px 0 0 15px;
  
`;
const Button = styled.button`
  width: 120px;
  min-height: 40px;
  font-size: 17px;
  font-weight:600;
  background-color: hsl(258deg, 100%, 50%);
  color: white;
  border-radius: 20px;
  border: none;
  margin: -30px 20px 15px 480px;
`;
const Header=styled.div`
margin:0px 0px 10px 10px;
h3{
  font-size: 20px;
  margin-bottom: 7px;
}
span{
  color: #808080;
  font-size: 15px;
}
`;
const SpanFollowing=styled.span`
background-color: #F0F0F0;
padding: 5px;
border-radius: 13px;
font-size: 15px;
`
const History=styled.div`
display: flex;
margin:0px 0px 20px 10px;
color: #808080;
font-size: 15px;
`
const Relationship =styled.div`
display: flex;
margin:0px 0px 20px 10px;
`
const Tabs = styled.div`
display:flex;
justify-content: space-around;
border-bottom: 1px solid var(--twitter-background);
padding: 10px 0px 20px 0px;
`;
const Tweetdiv = styled.div`
`