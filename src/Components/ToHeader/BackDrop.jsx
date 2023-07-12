import React from 'react'
import './CSS/BackDrop.css'

const BackDrop = props => (
    <div className={"o-BackDrop"} onClick={props.OpenSideNavbarClickHandler}/>
)

export default BackDrop;