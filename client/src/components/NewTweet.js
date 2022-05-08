import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { CurrentUserContext } from "./CurrentUserContext";
import CharCounter from "./CharCounter";

const NewTweet = ({ feedLoadingStatus, setFeedLoadingStatus }) => {
  const { currentUser } = useContext(CurrentUserContext);
  const [buttonStatus, setButtonStatus] = useState(false);
  const [input, setInput] = useState("");
  const [characters, setCharacters] = useState(0);
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (280 - characters <= 0 || characters === 0) {
      setButtonStatus(true);
    } else {
      setButtonStatus(false);
    }
  }, [characters]);

  const posting = (ev) => {
    ev.preventDefault();
    console.log(status);
    fetch("api/tweet", {
      method: "post",
      body: JSON.stringify({
        status: status,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("success", data);
      })
      .catch((error) => {
        console.log("Error", error);
      })
      .finally(() => {
        setFeedLoadingStatus(!feedLoadingStatus);
      });
  };

  useEffect(() => {
    if (!feedLoadingStatus) {
      setInput("");
    }
  }, [feedLoadingStatus]);

  return (
    <MakeTweet>
      <form>
        <InputDiv>
          <Avatar src={currentUser.avatarSrc}></Avatar>
          <TextArea
            type="text"
            value={input}
            placeholder="What's happening?"
            onChange={(e) => {
              setInput(e.target.value);
              setCharacters(e.target.value.length);
              setStatus(e.target.value);
            }}
          ></TextArea>
        </InputDiv>
        <Buttons>
          <CharCounter characters={characters} />
          <Button disabled={buttonStatus} onClick={posting}>
            Meow
          </Button>
        </Buttons>
      </form>
    </MakeTweet>
  );
};

export default NewTweet;

const MakeTweet = styled.div`
  border-bottom: 7px solid var(--twitter-background);
  padding-bottom: 10px;
  form {
    display: flex;
    flex-direction: column;
  }
`;
const InputDiv = styled.div`
  display: flex;
  padding: 20px;
  input {
    margin-left: 8px;
    font-size: 20px;
    flex: 1;
    border: none;
    margin-left: 20px;
    outline: none;
  }
`;
const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  z-index: 1;
`;
const Button = styled.button`
  background-color: hsl(258deg, 100%, 50%);
  color: white;
  width: 90px;
  border: none;
  font-size: 15px;
  font-weight: 600;
  height: 35px;
  border-radius: 30px;
  cursor: pointer;
`;

const Buttons = styled.div`
  display: flex;
  margin-right: 10px;
  justify-content: flex-end;
`;
const TextArea = styled.textarea`
  height: 100px;
  font-family: inherit;
  width: 500px;
  margin-left: 8px;
  font-size: 20px;
    flex: 1;
    border: none;
    margin-left: 20px;
    outline: none;
`;
