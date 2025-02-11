import img from '../assets/New folder/lostfound.jpg'

const AboutUs = () => {
    return (
        <div className='text-center mt-10 mb-12 bg-orange-100 text-gray-700 p-6 rounded-2xl w-11/12 mx-auto'>

            <h3 className="font-bold text-3xl mb-3">Who Are We ?</h3>
            <p className='text-sm'>Lost Something? We’re Here to Help!</p>

            <div className='mt-6 mb-6 p-8 flex justify-around gap-3'>
                <div className='w-1/2 py-16 text-pretty text-left'>
                    <p className='font-poppins font-medium '>
                        At ReclaimIt, we believe in giving lost and unclaimed items a second chance. Our mission is to connect lost belongings with their rightful owners through an easy-to-use and efficient platform. Whether you’ve misplaced something valuable or stumbled upon an item that needs to be returned, ReclaimIt serves as the bridge between lost and found.

                        With a commitment to transparency, security, and community-driven solutions, we strive to make the process of reclaiming lost items seamless and stress-free. Join us in creating a world where every lost item finds its way back home.
                    </p>


                </div>
                <div className='w-1/2 text-center'>
                    <img className='w-10/12 mx-auto h-96 rounded-2xl' src={img} alt="" />
                </div>
            </div>


        </div>
    );
};

export default AboutUs;