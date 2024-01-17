
import { useState } from 'react';
import './App.css'

import Blogs from './Components/Blogs/Blogs';
import Bookmarks from './Components/Bookmarks/Bookmarks';
import Header from './Components/Header/Header';

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0)
  const handleMarkAsRead = (ID,time) => {
    setReadingTime(readingTime + time);
    console.log("remove", ID);
    const reamingBookmarks = bookmarks.filter(bookmark => bookmark.ID !== ID);
    setBookmarks(reamingBookmarks)
    
  };
   
  const handleAddToBookmarks = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks)
  }
   
  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto">
        <Blogs
          handleAddToBookmarks={handleAddToBookmarks}
          handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      
      </div>
    </>
  );
}

export default App
