/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

const Blog = ({ blog }) => {
    const { Title, Cover, Author, AuthorImg, PostedDate, read_time, Hashtags } =
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
            <span>{read_time} min read</span>
          </div>
        </div>
        <h1>title: {Title}</h1>
        <p>{Hashtags.map(hash => <span className="text-blue-400"><a href="">{hash}</a></span>)}</p>
      </div>
    );
};

export default Blog;