import React from "react";

function SelectMenu (props) {

    const options = props.lista.map((item, index)=>{
        return (<option key={index} value={item.value} >{item.label}</option>)
    })

    return (
        <select {...props}>
            {options}
        </select>
    )
}


export default SelectMenu