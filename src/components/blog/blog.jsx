import {  FaBookmark } from 'react-icons/fa';
import PropTypes from 'prop-types';
const Blog = ({blog,handleBookMark,handlereadintime}) => {
    const{name,id ,authorimg,publisheddate,coverimg,readingtime,title,hashtags}=blog;
    // let newreading=parseInt(readingtime);
    // console.log(typeof(time)) 
    return (
        <div className="mb-4">
           
           <img className='w-full rounded-md' src={coverimg} alt="" />
           <div className='flex justify-between'>
           <div className='flex'>
            <img className='w-14' src={authorimg} alt="" />
            <div>
            <h4 className='text-2xl'>{name}</h4>
            <p>  {publisheddate}</p>

            </div>
            

           </div>
           <div className='flex items-center gap-2'>
                  <h3>{readingtime}min ago</h3>
                  <button onClick={()=> handleBookMark(blog)}
                  ><FaBookmark></FaBookmark>
                  </button>
                  
           </div>
           
           </div>
           <p className='text-3xl font-bold'> {title}</p>
           <p className='space-x-2 font-bold'>
        {
            hashtags.map((hash,idx)=> <span key={idx}> <a href=''># {hash}  </a></span>)
        }
           </p>
           <button onClick={()=>handlereadintime(readingtime,id)}>ReadingTime</button>
        </div>
    );
};

Blog.propTypes={
  blog:PropTypes.object.isRequired ,
  handleBookMark:PropTypes.func,
  handlereadintime:PropTypes.func
  }


export default Blog;