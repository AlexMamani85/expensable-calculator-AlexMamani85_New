import React from 'react';
export default function Button(props) {
    let {clase, input, children}=props
    return(
        <button className={clase}>{input}</button>

    )

}