import React, {FC, useState, useEffect} from 'react';
import List from './List';

interface Item{
    name: string,
    quantity: number
}

const Main : FC = () => {
    const [item, setItem] = useState<Item>({
        name: '',
        quantity: 0
    })
    const [allItems, setAllItems] = useState<Item[]>(() => {
        const localData = localStorage.getItem('items')
        return localData ? JSON.parse(localData) : []
    })
    const items = allItems.map(i => {
        return <List 
                key={i.name} 
                item= {i.name} 
                increase={increaseQuantity}
                decrease={decreaseQuantity}
                quantity={i.quantity} 
                delete={deleteItem}
                />
    })

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(allItems))
    }, [allItems])

    function handleChange(event: React.SyntheticEvent){
        const target = event.target as HTMLInputElement
        const value = target.value
        const name = target.name
        setItem(prevItem => ({
            ...prevItem,
            [name]: value
        }))
    }

    function addItem(event : React.SyntheticEvent){
        event.preventDefault()
        if(item.name === '' || item.name.match(/[0-9]+/g)){
            alert('Please enter an item (without numbers)')
        }else if(item.quantity === 0 || (item.quantity).toString().match(/[^0-9]+/g)){
            alert('Please enter an appropriate quantity')
        }else{
            const found = allItems.find(i => item.name === i.name)
            if(found){
                const newArr = allItems.map(i =>{
                    if(i.name === found.name){
                        return{...item, quantity: Number(i.quantity)+Number(item.quantity)}
                    }else{
                        return i
                    }
                })
                setAllItems(newArr)
            }else{
                setAllItems(prevArr => [...prevArr, item])
                setItem({
                    name: '',
                    quantity: 0
                })
            }
            
        }   
    }

    function increaseQuantity(itemName: string){
        const newItemsArr = allItems.map(item => {
            if(item.name === itemName){
                const newQuantity = Number(item.quantity) + 1
                return{...item, quantity: newQuantity}
            }else{
                return item
            }
        })
        setAllItems(newItemsArr)
    }

    function decreaseQuantity(itemName: string){
        const newItemsArr = allItems.map(item => {
            if(item.name === itemName){
                const newQuantity = Number(item.quantity) - 1
                return{...item, quantity: newQuantity}
            }else{
                return item
            }
        })
        setAllItems(newItemsArr)
    }

    function deleteItem(itemName: string){
        const newArray = allItems.filter(word => word.name !== itemName)
        setAllItems(newArray)
    }


    return (
        <main>
            <form className='input-area'>
                <input id='input-field' type="text" placeholder='Enter a item' name='name' value={item.name} onChange={handleChange}></input>
                <input title='Enter a quantity' id='quantity-field' type="text" placeholder='Enter the quantity' name="quantity" value={item.quantity} onChange={handleChange}></input>
                <button id='submit-btn' type='submit' onClick={addItem}>Enter</button>
            </form>
            <div className='display-area'>
                {items}
            </div>
        </main>
    );
};

export default Main;