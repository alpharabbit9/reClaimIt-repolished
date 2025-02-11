import { Link } from 'react-router-dom';
import img from '../assets/New folder/404.gif'

const Error = () => {
    return (
        <div className='p-16'>
            <Link to={'/'} className='btn btn-outline'>Back to Home</Link>
            <div className='flex justify-center items-center'>
                <img src={img} alt="" />
            </div>

            
        </div>



    );
};

export default Error;