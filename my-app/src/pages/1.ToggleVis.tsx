import React from 'react';
import { useState } from 'react';

export default function ToggleVis() {
    const [visibility, setVisibility] = useState<Boolean>(false);

    return (
        <div className='ButtonInc'>
            <h2>VIS</h2>
            <button onClick={ () => setVisibility(!visibility)}>Toggle Vis</button>
            {visibility && <p>This is a paragraph that can be shown or hidden.</p>}
        </div>
    )

}