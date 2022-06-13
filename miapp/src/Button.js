import React from 'react';



export default function Button(props) {
    let {text, clase, icono, onClick}=props
    return(
        <button  className={clase} text={text} onClick={onClick} > 

            {icono?<div style={{justifyContent: 'flex-start'}}>icono</div>:""}
        </button>

    )

}

// onClick{}