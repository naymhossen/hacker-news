// import { data } from "autoprefixer";
import { useEffect, useState } from "react";


const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect( () => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/react-knowledge-cafe/main/public/blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    return (
        <div className="md:w-2/3 bg-gray-400">
            <h1 className="text-5xl font-bold text-center">My First Blogs: {blogs.length}</h1>
        </div>
    );
};

export default Blogs;