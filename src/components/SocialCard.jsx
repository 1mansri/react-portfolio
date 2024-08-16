import React from "react"
import '../index.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from "react-icons/md"
import { BsFillPersonLinesFill } from "react-icons/bs"
import { RiBook2Fill } from "react-icons/ri"


export const SocialCard = () => {

    const links = [
        {
            id: 1,
            child: (
                <div className="text">
                    Linkedin
                </div>
            ),
            href: 'https://linkedin.com/in/durgesh-kumar-31b88a246',
            icon: <FaLinkedin className="svg " />,
        },
        {
            id: 2,
            child: (
                <div className="text">
                    GitHub
                </div>
            ),
            href: 'https://github.com/1mansri',
            icon: <FaGithub className="svg " />,
        },
        {
            id: 3,
            child: (
                <div className="text">
                    Mail
                </div>
            ),
            href: 'mailto:durgeshku2018@gmail.com',
            icon: <MdEmail className="svg " />,
        },
        {
            id: 4,
            child: (
                <div className="text">
                    Novel
                </div>
            ),
            href: 'https://www.pocketnovel.com/novel/5981e851f84273c250e384349f3000cf23cfa9fb',
            icon: <RiBook2Fill className="svg " />,

        },
        {
            id: 5,
            child: (
                <div className="text">
                    Resume
                </div>
            ),
            href: '/resume.pdf',
            download: true,
            icon: <BsFillPersonLinesFill className="svg " />,
        },

    ]

    return (
        <div className='hidden lg:flex flex-col top-[26%] left-0 fixed'>
            <div className="card">
                <ul>
                    {links.map(({ id, child, href, style, download, icon }) => (
                        <li key={id} className="iso-pro">
                            <span></span>
                            <span></span>
                            <span></span>
                            <a href={href} target="_blank" rel="noopener noreferrer" download={download}>
                                {icon}
                            </a>
                            {child}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}