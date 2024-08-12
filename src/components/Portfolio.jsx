import React from 'react'
import javascriptProject from '../assets/Portfolio/javascriptProject.jpg'
import cssPortfolio from '../assets/Portfolio/cssPortfolio.jpg'
import htmlPortfolio from '../assets/Portfolio/htmlPortfolio.jpg'
import novel from '../assets/Portfolio/novel.jpg'
import weather from '../assets/Portfolio/weather.jpg'

export const Portfolio = () => {

    const portfolio = [
        {
            id: 1,
            src: weather
        },
        {
            id: 2,
            src: javascriptProject
        },
        {
            id: 3,
            src: cssPortfolio
        },
        {
            id: 4,
            src: htmlPortfolio
        },
        {
            id: 5,
            src: novel
        },

    ]

    return (
        <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800
        w-full text-white  md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6'>Have a look at some of my projects right here </p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

                    {
                        portfolio.map(({ id, src }) => (
                            <div key={id} className='shadow-md shadow-gray-400 rounded-lg'>
                                <img src={src} alt='weather app demo pic'
                                    className='rounded-md duration-200 hover:scale-105'
                                />
                                <div className='flex items-center justify-center'>
                                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}
