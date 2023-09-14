


import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title}=bookmark;
    return (
        <div className='bg-slate-300 p-3 m-2 rounded'>
            <h3 className='text-2xl '>{title}</h3>
        </div>
    );
};
Bookmark.propTypes={
    bookmark:PropTypes.object
}
export default Bookmark;