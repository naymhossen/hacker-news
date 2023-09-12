// import Blog from "../Blog/Blog";
import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ hamdaleAddBookmarks, handleMarkReadTime }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/react-knowledge-cafe/main/public/blogs.json"
    )
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="md:w-2/3 bg-gray-400">
      {blogs.map((getBlog) => (
        <Blog
          key={getBlog.id}
          myBlog={getBlog}
          hamdaleAddBookmarks={hamdaleAddBookmarks}
          handleMarkReadTime = {handleMarkReadTime}
        ></Blog>
      ))}
    </div>
  );
};

export default Blogs;
