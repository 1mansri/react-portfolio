import React from 'react'
import "../index.css"

export const NewButton = () => {
    return (
        <button className="pushable px-6 my-6 mx-auto flex items-center">
            <span className="shadow"></span>
            <span className="edge"></span>
            <span className="front bg-gradient-to-r from-rose-500 via-rose-700 to-red-800">
                Submit
            </span>
        </button>
    )
}
