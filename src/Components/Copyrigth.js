import React from 'react'

import "./CSS/Copyrigth.css"
import Logo from "../Images/ICO/Bamboo Blanco.ico"

class Copyrigth extends React.Component {
    render() {
        const {
            TitleDirection,
            Direction,
            TitleEmail,
            Email,
            TitlePhone,
            Phone,
            TitleAtentionHour,
            Day,
            Hour
        } = this.props;

        return (
            <div className="o-CopyRContainer">
                <div className="o-InfoContactCopy">
                    <h5>{TitleAtentionHour}:   {Day} {Hour}</h5>
                    <h5>{TitleDirection}:   {Direction}</h5>
                    <h5>{TitleEmail}:   {Email}</h5>
                    <h5>{TitlePhone}:   {Phone}</h5>
                </div>
                <img className="o-LogoB" src={Logo} alt="" />
                <h6>© {(new Date().getFullYear())} Bamboo analytics. All Rights Reserved</h6>
            </div>
        )
    }
}

export default Copyrigth;