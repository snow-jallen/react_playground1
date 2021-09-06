import React from 'react'
const Greeter = ({text}) => {
    return (
        <h1>{text ?? "Default Greeter Value"}</h1>
    );
}

export {Greeter}