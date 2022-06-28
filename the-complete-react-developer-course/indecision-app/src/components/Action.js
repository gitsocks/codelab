import React from 'react'

const Action = (props) => (
    <div>
        <button className="big-button" disabled={props.disabled} onClick={props.onClick}>What Should I Do</button>
    </div>
)


export default Action