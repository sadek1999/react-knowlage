import { useState } from 'react';

import { useEffect } from 'react';
import Blog from '../blog/blog';


const Blogs = () => {
    const [blogs,setblogs]=useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setblogs(data))
    },[])

    
    return (
        <div className='md:w-2/3'>
            <h3>Blogs : {blogs.length}</h3>
             {
                blogs.map(blog=><Blog key={blog.id} blog={blog}></Blog>)
             }
        </div>
    );
};

export default Blogs;