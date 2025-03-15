
import javascriptProject from '../assets/Portfolio/javascriptProject.jpg'
// import cssPortfolio from '../assets/Portfolio/cssPortfolio.jpg'
// import htmlPortfolio from '../assets/Portfolio/htmlPortfolio.jpg'
import novel from '../assets/Portfolio/novel.jpg'
import weather from '../assets/Portfolio/weather.jpg'
import passChanger from '../assets/Portfolio/passChanger.jpeg'
import mip from '../assets/Portfolio/mip.png'
import megalith from '../assets/Portfolio/megalith-2025.png'
import musicnext from '../assets/Portfolio/musicnext.png'
import atoms from '../assets/Portfolio/atoms.jpeg'
import whisper from '../assets/Portfolio/WhisperBox.jpeg'
export const Portfolio = () => {

    const portfolio = [
        {
            id: 0,
            src: whisper,
            demo: 'https://whisper-box-git-main-1mansris-projects.vercel.app/',
            code: 'https://github.com/1mansri/WhisperBox'
        },
        {
            id: 1,
            src: mip,
            demo: 'https://www.mip.megalith.co.in/',
            code: 'https://www.mip.megalith.co.in/'
        },
        {
            id: 2,
            src: musicnext,
            demo: 'https://musixnext.vercel.app/',
            code: 'https://github.com/1mansri/musixnext'
        },
        {
            id: 3,
            src: atoms,
            demo: 'https://landing-megalith.netlify.app/',
            code: 'https://github.com/1mansri/atoms'
        },
        {
            id: 4,
            src: megalith,
            demo: 'https://www.megalith.co.in/',
            code: 'https://www.megalith.co.in/'
        },
        {
            id: 5,
            src: weather,
            demo: 'https://1mansri.github.io/weather/',
            code: 'https://github.com/1mansri/weather'
        },
        {
            id: 6,
            src: passChanger,
            demo: 'https://passwordchanger.netlify.app/',
            code: 'https://github.com/1mansri/Password-Changer'
        },
        {
            id: 7,
            src: javascriptProject,
            demo: 'https://1mansri.github.io/Durgesh-keyboard/',
            code: 'https://github.com/1mansri/Durgesh-keyboard'
        },
        {
            id: 8,
            src: novel,
            demo: 'https://www.pocketnovel.com/novel/5981e851f84273c250e384349f3000cf23cfa9fb',
            code: 'https://www.yourquote.in/aman-sri-doxjv/quotes'
        },

    ]

    return (
        <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800
        w-full text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full min-h-screen h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6'>Have a look at some of my projects right here </p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

                    {
                        portfolio.map(({ id, src, demo, code }) => (
                            <div key={id} className='shadow-md shadow-gray-400 rounded-lg'>
                                <img src={src} alt='weather app demo pic'
                                    className='rounded-md duration-200 hover:scale-105'
                                />
                                <div className='flex items-center justify-center'>
                                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'> <a target='_blank' href={demo}>Demo</a> </button>
                                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a target='_blank' href={code}>Code</a></button>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}
