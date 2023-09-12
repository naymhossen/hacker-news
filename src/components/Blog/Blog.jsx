import { FaBookmark } from "react-icons/fa";

const Blog = ({ myBlog, hamdaleAddBookmarks }) => {
  const {
    title,
    cover,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = myBlog;
  return (
    <div className="pt-5 space-y-5">
      <img className="w-full" src={cover} alt="" />

      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img className="w-16" src={author_img} alt="" />
          <div className="ml-4">
            <h3 className="text-2xl font-semibold">{author}</h3>
            <h2>{posted_date}</h2>
          </div>
        </div>
        <div className="flex justify-center gap-3 mr-10 text-2xl">
          <h4 className="">{reading_time} min read</h4>
          <button
            onClick={() => hamdaleAddBookmarks(myBlog)}
            className="text-red-700"
          >
            <FaBookmark></FaBookmark>
          </button>
        </div>
      </div>
      <h1 className="text-3xl font-bold">{title}</h1>
      <p>
        {hashtags.map((has, idx) => (
          <span key={idx}>
            <a href=""> #{hashtags}</a>
          </span>
        ))}
      </p>
      <button className="underline text-2xl font-semibold text-red-600">
        Mark As Read
      </button>
    </div>
  );
};

export default Blog;
