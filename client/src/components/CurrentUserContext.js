import { createContext, useEffect, useState } from "react";

export const CurrentUserContext = createContext();

const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [status, setStatus] = useState(false);
  const [errorUser, setErrorUser] = useState(false);

  useEffect(() => {
    fetch("api/me/profile")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setCurrentUser(data.profile);
      })
      .catch((error) => {
        setErrorUser(true);
      })
      .finally(() => {
        setStatus(true);
      });
  }, []);
  console.log(currentUser.handle);
  return (
    <CurrentUserContext.Provider value={{ currentUser, status, errorUser }}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserProvider;
