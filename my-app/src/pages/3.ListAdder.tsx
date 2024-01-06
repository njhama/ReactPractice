import React, { useEffect } from 'react';
import { useState } from 'react';

export default function ListAdder() {
    const [items, setItems] = useState<string[]>([]);
    const [newItem, setNewItem] = useState<string>("");

    const handleChange = (event: any) => {
        setNewItem(event.target.value);
    }

    const addItem = (event: any) => {
        setItems([...items, newItem]);
        setNewItem("");
    }

    return (
        <div className='TextInputDisplay'>
            <p>Add to list</p>
            <input type="text" onChange={handleChange}/>
            <button onClick={addItem}>Add</button>
            <ul>
                {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
            </ul>
        </div>
    )

}