
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmark from './components/Bookmark'
import Header from './components/Header/Header'
import Blog from './components/blog/blog'

function App() {
  

  return (
    <>
      
     <Header></Header>
     <div className='flex max-w-7xl mx-auto '>
     <Blogs></Blogs>
     <Bookmark></Bookmark>
     </div>
           
     
    </>
  )
}

export default App
