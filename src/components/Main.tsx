import React, {FC, useState} from 'react';
import List from './List';

const Main : FC = () => {
    const [item, setItem] = useState<string>("")
    const [allItems, setAllItems] = useState<string[]>([])
    const items = allItems.map(i => {
        return <List key={i} item= {i}/>
    })

    function handleChange(event: React.SyntheticEvent){
        const target = event.target as HTMLInputElement
        const value = target.value
        setItem(value)
    }

    function addItem(){
        setAllItems(prevArr => [...prevArr, item])
        setItem('')
    }

    console.log(item)
    console.log(allItems)
    return (
        <main>
            <div className='input-area'>
                <input className='input-field' type="text" placeholder='Enter item here (one item at a time)' value={item} onChange={handleChange}></input>
                <button className='submit-btn' onClick={addItem}>Enter</button>
            </div>
            <div className='display-area'>
                {items}
            </div>
        </main>
    );
};

export default Main;