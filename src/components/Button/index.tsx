import './styles.scss'
import React from "react";

type buttonTypes = {
    onClick:React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({onClick}:buttonTypes) =>{
    return (
        <>
          <button className="button" onClick={onClick}>+</button>
        </>
    )
}

export default Button

