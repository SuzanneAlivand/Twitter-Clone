import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeFeed from "./components/HomeFeed";
import Notifications from "./components/Notifications";
import Bookmarks from "./components/Bookmarks";
import TweetDetails from "./components/TweetDetails";
import Profile from "./components/Profile";
import GlobalStyle from "./components/GlobalStyles";
import Sidebar from "./components/Sidebar";
import {CurrentUserContext} from "./components/CurrentUserContext";
import Spinner from "./components/Spinner";
import Error from "./components/Error";
import { useContext } from "react";


const App = () => {
  const{status,errorUser}= useContext(CurrentUserContext)
  return (
    <>
      <GlobalStyle />
      <Div>
      <Router>
        <Sidebar></Sidebar>
        { errorUser ? (<Error/>) : status ? (
          <Switch>
            <Route exact path="/" component={HomeFeed} />
            <Route exact path="/notifications" component={Notifications} />
            <Route exact path="/bookmarks" component={Bookmarks} />
            <Route path="/tweet/:tweetId" component={TweetDetails} />
            <Route path="/:profileId" component={Profile} />
          </Switch>) : (<Spinner/>)}
        </Router>
      </Div>
    </>
  );
};

export default App;

const Div = styled.div`
  display: flex;
  height: 100vh;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
`;
