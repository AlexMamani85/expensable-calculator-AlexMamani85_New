import React from 'react';



export default function Display(props) {
    let {text, clase, value}=props
    return(
        <div  className={clase} text={text} > 
            <p>{value}</p>

        </div>

    )

}

// onClick{}