import React from 'react'

export default function Button ({OnPress,children}){
    return (
        <button onClick={OnPress}> {children}</button>
    )
}