import React from 'react';

interface Props{
    item: string,
    delete: (params : string) => void
}

const List = (props: Props) => {
    return (
        <div className='list-item'>
            <p className='item-name'>{props.item}</p>
            <button id='delete-btn' title='Delete' onClick={() => props.delete(props.item)}><i className="fa fa-trash-o"></i></button>
        </div>
    );
};

export default List;