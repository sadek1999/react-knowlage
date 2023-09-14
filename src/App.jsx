
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmark from './components/Bookmarks'
import Header from './components/Header/Header'



function App() {
  const [bookMarks, setBookmarks] = useState([])
  const handleBookMark = (blog) => {
    const newbookMarks = [...bookMarks, blog];
    setBookmarks(newbookMarks)
  }
   const [readingtime,setredingtime]=useState(0)

   const handlereadintime=(time,id)=>{
    let Time=parseInt(time)
    let a=Time+readingtime;
    // console.log(a)
    setredingtime(a)
    //  console.log(id)
     const readingbooks= bookMarks.filter(book=>book.id!=id)
     setBookmarks(readingbooks);
   }


  return (
    <>

      <Header></Header>
      <div className='flex max-w-7xl mx-auto '>
        <Blogs
          handleBookMark={handleBookMark}
          handlereadintime={handlereadintime}
        ></Blogs>
        <Bookmark
          bookMarks={bookMarks}
          readingtime={readingtime}
          ></Bookmark>
      </div>


    </>
  )
}

export default App
