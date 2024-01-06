import React from 'react';
import { useState } from 'react';

export default function ButtonInc() {
    const [counter, setCount] = useState(0);

    return (
        <div className='ButtonInc'>
            <h2>COUNTER</h2>
            <p>COUNT: {counter}</p>
            <button onClick={ () => setCount(counter + 1)}>Increment</button>
        </div>
    )

}