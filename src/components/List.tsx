import React from 'react';
import { VoidExpression } from 'typescript';

interface Props{
    item: string,
    quantity: number,
    increase: (params: string) => void,
    decrease: (params: string) => void,
    delete: (params : string) => void
}

const List = (props: Props) => {
    return (
        <div className='list-item'>
            <p className='item-name'>{props.item}</p>
            <div className='buttons'>
                <button className='arrow-btns' title='Subtract' onClick={() => props.decrease(props.item)}><i className="fa fa-caret-left"></i></button>
                <p className='quantity'>{props.quantity}</p>
                <button className='arrow-btns' title='Add' onClick={() => props.increase(props.item)}><i className="fa fa-caret-right"></i></button>
                <button id='delete-btn' title='Delete' onClick={() => props.delete(props.item)}><i className="fa fa-trash-o"></i></button>
            </div> 
        </div>
    );
};

export default List;