import Logo from "./Logo";
import SidbarItem from "./SidebarItem";
import { NavLink } from "react-router-dom";
import { FiUser, FiBell, FiBookmark, FiHome } from "react-icons/fi";
import styled from "styled-components";
import { CurrentUserContext } from "./CurrentUserContext";
import { useContext } from "react";

const Sidebar = () => {
  const {currentUser:{handle}}= useContext(CurrentUserContext)
  return (
    <SidbarParent>
      <Logo></Logo>
      <StyledNavLink exact to="/">
        <SidbarItem text="Home" Icon={FiHome} />
      </StyledNavLink>
      <StyledNavLink to={`/${handle}`}>
        <SidbarItem text="Profile" Icon={FiUser} />
      </StyledNavLink>
      <StyledNavLink to="/notifications">
        <SidbarItem text="Notifications" Icon={FiBell} />
      </StyledNavLink>
      <StyledNavLink to="/bookmarks">
        <SidbarItem text="Bookmarks" Icon={FiBookmark} />
      </StyledNavLink>
      <Button>Meow</Button>
    </SidbarParent>
  );
};

export default Sidebar;

// styling the sidebar
const SidbarParent = styled.div`
  flex: 0.2;
  border-right: 1px solid var(--twitter-background);
  margin-top: 20px;
  padding: 0px 20px;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  &.active {
    color: hsl(258deg, 100%, 50%);
  }
`;
const Button = styled.button`
  background-color: hsl(258deg, 100%, 50%);
  color: white;
  width: 100%;
  border: none;
  font-size: 18px;
  font-weight: 600;
  height: 40px;
  border-radius: 30px;
  margin-top: 15px;
`;
