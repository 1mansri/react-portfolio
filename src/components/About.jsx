import React from 'react'

export const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>
                <p className='text-xl mt-20'>
                    As a beginner front-end developer, I have a strong foundation in HTML, CSS, JavaScript,
                    React, and Tailwind CSS, with hands-on experience in Git and GitHub. I've applied these
                    skills to various projects, developing a keen eye for design and user experience. Currently,
                    I'm pursuing a dual degree (B.Tech + M.Tech) in Civil Engineering at IIT Kharagpur, where
                    I balance rigorous technical studies with my passion for coding.
                </p>

                <br />
                <p className='text-xl'>
                    Beyond the technical realm, I’m a published co-author of several books and the author of a novel available on the Pocket Novel app. I’m now delving into writing a mythological sci-fi thriller that artfully blends elements of romance and suspense. This unique combination of technical expertise and creative storytelling drives me to craft innovative, engaging user experiences that resonate on multiple levels.
                </p>
            </div>
        </div>
    )
}
