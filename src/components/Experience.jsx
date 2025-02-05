import React from 'react'

import html from "../assets/html.png";
import css from "../assets/css.png";
import github from "../assets/github.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import tailwindImage from "../assets/tailwind.png";
import next from "../assets/next.js.svg";
import node from "../assets/node.svg"
import express from "../assets/express.png"
import mongo from "../assets/mongodb.svg"
import Three from "../assets/Three.js.svg"

export const Experience = () => {
    const techs = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500',
            style2: ""
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500',
            style2: ""
        },
        {
            id: 3,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500',
            style2: ""
        },
        {
            id: 4,
            src: github,
            title: 'GitHub',
            style: 'shadow-gray-400',
            style2: ""
        },
        {
            id: 5,
            src: reactImage,
            title: 'React',
            style: 'shadow-blue-600',
            style2: ""
        },
        {
            id: 6,
            src: tailwindImage,
            title: 'TailWind',
            style: 'shadow-sky-400',
            style2: ""
        },
        {
            id: 7,
            src: next,
            title: 'NextJs',
            style: 'shadow-purple-400',
            style2: "bg-purple-700 rounded-full"
        },
        {
            id: 8,
            src: node,
            title: 'NodeJs',
            style: 'shadow-green-400',
            style2: ""
        },
        {
            id: 9,
            src: express,
            title: 'ExpressJs',
            style: 'shadow-rose-700',
            style2: " rounded-full"
        },
        {
            id: 10,
            src: mongo,
            title: 'mongoDB',
            style: 'shadow-green-800',
            style2: "bg-gray-100 rounded-full px-1 py-1"
        },
        {
            id: 11,
            src: Three,
            title: 'Three Js',
            style: 'shadow-gray-300',
            style2: "bg-gray-100 rounded-full "
        }
    ]




    return (
        <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full '>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full md:py-10 min-h-screen h-full text-white'>
                <div>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                    <p className='py-6'>These are the technologies i have experience in</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:pb-10 gap-8 text-center py-8 px-12 sm:px-0'>
                    {
                        techs.map(({ id, src, title, style, style2 }) => (
                            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style} `}>
                                <img src={src} className={`w-20 mx-auto ${style2} `} alt="one of the image of technologies i have experience"  />
                                <p className='mt-4'>{title}</p>
                            </div>
                        ))
                    }


                </div>
            </div>
        </div>
    )
}
