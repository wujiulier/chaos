import React,{ FC } from 'react';


interface ButtonProps {
    text: string;
    onClick?: (e:any) => void;
}
const Button:FC<ButtonProps> = ({ text,onClick }) => {
    return <div>
        <div id='button' onClick={onClick}>{text}</div>
    </div>
};

export default Button;
