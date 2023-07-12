import React from 'react'
import './CSS/ButtonThreeLines.css'

const boton = props => (
    <button className="o-MenuBotton" onClick={props.OpenSideNavbarClickHandler}>
        <div id="o-Lines" />
        <div id="o-Lines" />
        <div id="o-Lines" />
    </button>
)

export default boton;