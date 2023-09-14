
import PropTypes from 'prop-types';
import Bookmark from './Bookmark/Bookmark';
const Bookmarks = ({bookMarks,readingtime}) => {
    

    return (
        <div className="md:w-1/3 bg-cyan-50">
            <h1>Book Mark :{bookMarks.length} </h1>
            <h3 className='tex-3xl '>Total readingTime ={readingtime}</h3>
            {
                bookMarks.map(bookmark=><Bookmark key={bookmark.id}
                bookmark={bookmark}
                ></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes={
    bookMarks:PropTypes.array,
    readingtime:PropTypes.number
   
}

export default Bookmarks;