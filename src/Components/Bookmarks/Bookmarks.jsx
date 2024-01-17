/* eslint-disable react/prop-types */

import Bookmark from "../Bookmark/Bookmark";





const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md: w-1/3">
      <div>
        <h2>reading Time:{readingTime}</h2>
      </div>
      <h1 className="text-4xl">Bookmarks:{bookmarks.length}</h1>
      {bookmarks.map((bookmark) => (
        <Bookmark key={bookmark.ID} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};

export default Bookmarks;