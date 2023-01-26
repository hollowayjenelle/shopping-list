import React, {FC, useState} from 'react';
import List from './List';

const Main : FC = () => {
    const [item, setItem] = useState<string>("")
    const [allItems, setAllItems] = useState<string[]>([])
    const items = allItems.map(i => {
        return <List key={i} item= {i} delete={deleteItem}/>
    })

    function handleChange(event: React.SyntheticEvent){
        const target = event.target as HTMLInputElement
        const value = target.value
        setItem(value)
    }

    function addItem(event : React.SyntheticEvent){
        event.preventDefault()
        setAllItems(prevArr => [...prevArr, item])
        setItem('')
    }

    function deleteItem(itemName: string){
        const newArray = allItems.filter(word => word !== itemName)
        setAllItems(newArray)
    }

    console.log(item)
    console.log(allItems)
    return (
        <main>
            <div className='input-area'>
                <input id='input-field' type="text" placeholder='Enter item here (one item at a time)' value={item} onChange={handleChange}></input>
                <button id='submit-btn' type='submit' onClick={addItem}>Enter</button>
            </div>
            <div className='display-area'>
                {items}
            </div>
        </main>
    );
};

export default Main;