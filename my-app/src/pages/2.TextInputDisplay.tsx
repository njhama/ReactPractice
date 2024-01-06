import React, { useEffect } from 'react';
import { useState } from 'react';

export default function TextInputDisplay() {
    const [text, setText] = useState("");
    
    useEffect(() => {
        console.log("UPDATED")
    }, [text])

    const handleChange = (event: any) => {
        setText(event.target.value)
    }

    return (
        <div className='TextInputDisplay'>
            <input type="text" onChange={handleChange}/>
            <p>{text}</p>
        </div>
    )

}