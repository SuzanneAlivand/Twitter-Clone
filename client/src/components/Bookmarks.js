import styled from "styled-components";

const Bookmarks = () => {
  return (
     <Bookmark>
        <BookmarkHeader>Bookmarks</BookmarkHeader>
    </Bookmark>
  );
};

export default Bookmarks;

// styling Home
const Bookmark = styled.div`
  flex: 0.5;
  border-right: 1px solid var(--twitter-background);
`;
const BookmarkHeader = styled.div`
border:1px solid var(--twitter-background);
position: sticky;
top:0;
z-index: 100;
padding: 15px 20px;;
font-size: 20px;
font-weight:700;
background-color: white;
`