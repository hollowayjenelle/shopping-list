import React from 'react';

const Header : React.FC = () => {
    return (
        <div className='header-container'>
            <i className="fa fa-shopping-basket"></i>
            <h2 className='header-title'>my shopping list</h2>
        </div>
    );
};

export default Header;