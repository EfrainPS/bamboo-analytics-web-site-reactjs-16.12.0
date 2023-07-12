import React from "react"

//Styles
import "./CSS/CardService.css"

class CardService extends React.Component {
    render() {
        return (
            <div className="o-ContainerCardService" style={{borderColor: this.props.Color}}>
                <div className="o-ContainerVisuals" >
                    <img className="o-ServiceImage" src={this.props.Image} alt="" />
                    <h1 style={{ color: this.props.Color, fontSize: "2rem" }}>{this.props.Service}</h1>
                </div>
                <div className="o-ContainerServiceInfo">
                    
                    <p style={{ color: "var(--GrayOscure)" }}>{this.props.ServiceDesc}</p>
                    
                </div>
                <img className="o-ServiceClick" src={"https://media1.giphy.com/media/24G0F8lQWYMb6jD47X/source.gif"} alt="" />
            </div>
        )
    }
}

export default CardService;