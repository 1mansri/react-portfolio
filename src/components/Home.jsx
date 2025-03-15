
import HeroImage from '../assets/pho22.jpg'
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import { Link } from 'react-scroll'
export const Home = () => {
    return (
        <div name='home' className='bg-gradient-to-b from-black via-black to-gray-800'>
            <div className='max-w-screen-lg mx-auto md:pt-[5rem] flex flex-col items-center justify-center h-full min-h-screen px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-4xl sm:text-7xl max-sm:pt-10 font-bold text-white'>
                        I&apos;m a coder by day, a writer by night.
                    </h2>
                    <p className='text-gray-500 py-4 max-w-md'>
                        I&apos;m a full-stack development while pursuing my B.Tech at IIT Kharagpur. When I&apos;m not buried in code, I like to unwind by writing poetry and stories. It&apos;s my way of blending creativity with logic, and I find that one inspires the other.
                    </p>
                    <div>
                        <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-green-500 via-green-700 to-green-800 cursor-pointer'>
                            Portfolio
                            <span className='group-hover:rotate-90 duration-300'>
                                < MdOutlineKeyboardArrowRight size={25} className='ml-1' />
                            </span>
                        </Link>

                    </div>
                </div>
                <div className='max-sm:pt-10' >
                    <img src={HeroImage} alt='my profile' className='rounded-2xl mx-auto w-2/3 md:max-w-[80rem]' />
                </div>
            </div>
        </div>
    )
}
