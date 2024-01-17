/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */



const Blog = ({ blog, handleAddToBookmarks, handleMarkAsRead }) => {
  const {ID,Title, Cover, Author, AuthorImg, PostedDate, read_time, Hashtags } =
    blog;
  return (
    <div>
      <img
        className="w-full h-80"
        src={Cover}
        alt={`cover picture of the title ${Title}`}
      />
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <img className="w-14" src={AuthorImg} alt="" />
          <div>
            <h3>{Author}</h3>
            <p>{PostedDate}</p>
          </div>
        </div>
        <div>
          <span>{read_time} min read: </span>
          <button onClick={() => handleAddToBookmarks(blog)}>bookmark</button>
        </div>
      </div>
      <h1>title: {Title}</h1>
      <button onClick={() => handleMarkAsRead(ID,read_time)}>mark as read</button>
      <p>
        {Hashtags.map((hash) => (
          <span className="text-blue-400">
            <a href="">{hash}</a>
          </span>
        ))}
      </p>
    </div>
  );
};

export default Blog;