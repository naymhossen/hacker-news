import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";
// import Blog from "./components/Blog/Blog";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold text-center underline">HACKER NEWS</h1>

      <Header></Header>
      <div className="md:flex gap-3 w-11/12 mx-auto mt-5">
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
        {/* <Blog></Blog> */}
      </div>
    </>
  );
}

export default App;
