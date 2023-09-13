import { FaBeer, FaBookmark } from 'react-icons/fa';
import PropTypes from 'prop-types';
const Blog = ({blog}) => {
    console.log(blog)
    
    return (
        <div className="">
           
           <img className='w-full rounded-md' src={blog.coverimg} alt="" />
           <div className='flex justify-between'>
           <div className='flex'>
            <img className='w-14' src={blog.authorimg} alt="" />
            <div>
            <h4 className='text-2xl'>{blog.name}</h4>
            <p>  {blog.publisheddate}</p>

            </div>
            

           </div>
           <div className='flex items-center gap-2'>
                  <h3>{blog.readingtime}</h3>
                  <button><FaBookmark></FaBookmark></button>
           </div>
           
           </div>
           <p className='text-3xl font-bold'> {blog.title}</p>
           <p>
        {
            blog.hashtags.map((hash,idx)=> <span key={idx}> <a href=''>#{hash}  </a></span>)
        }
           </p>
        </div>
    );
};

Blog.propTypes={
  blog:PropTypes.object.isRequired 
}

export default Blog;