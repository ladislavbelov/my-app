import React from 'react';

const Button = (props) => {
    return (
            <button className={props.color + ' ' +  'button'}>Click me</button>
    );
};

export default Button;