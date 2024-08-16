
import React from 'react'
import '../index.css'

export const Input = () => {
    return (
        <div className="container">
            <input required="" type="text" name="text" className="input" />
            <label className="label">Username</label>
        </div>
    )
}

