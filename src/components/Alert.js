import React from 'react'
const Capitalization = (word) => {
    let lower = word.toLowerCase()
    return lower.charAt(0).toUpperCase() + lower.slice(1);
};

export default function Alert(props){
    return(
        <div style={{height:'35px'}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
 <strong>{Capitalization (props.alert.type)}</strong> : {props.alert.msg}
</div>}
</div>
    )
}




