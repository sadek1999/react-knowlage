
import profile from '../../../images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between border-b-2 max-w-7xl mx-auto'>
            <h1 className='text-4xl font-bold'>React-Knowledge</h1>
            <img src={profile} alt="" />
            
             
        </div>
    );
};

export default Header;