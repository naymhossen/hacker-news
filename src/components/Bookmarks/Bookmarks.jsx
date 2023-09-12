import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readTime }) => {
  return (
    <div className="w-1/3 bg-neutral-300">
        <div className="p-2 mt-3 rounded-xl border-b-2 w-11/12 mx-auto bg-white">
            <h3 className="text-3xl font-bold text-center text-blue-400">Spent time on read: {readTime}</h3>
        </div>
      <h2 className="text-3xl font-bold text-center pt-5 border-b-2 w-11/12 mx-auto">
        Bookmarked Blogs: {bookmarks.length}
      </h2>
      {
        bookmarks.map( bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
      }
    </div>
  );
};

Bookmarks.PropTypes = {
  bookmarks: PropTypes.array,
};

export default Bookmarks;
