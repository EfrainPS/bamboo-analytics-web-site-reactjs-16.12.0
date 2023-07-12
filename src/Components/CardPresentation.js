import React from 'react'

import "./CSS/CardPresentation.css"

class CardPresentation extends React.Component {

    render() {
        const { Author, Photo } = this.props;
        return (
            <div className="o-CardPresentation">
                <div id="Image"><img src={Photo} alt={Author}/></div>
                
                <h4>{Author}</h4>
                <h5>Consultor BI</h5>
                <h5>Contacto:</h5>
                <div className="o-SocialNetworks">
                    {/**Información de contacto*/}
                </div>
            </div>
        )
    }
}

export default CardPresentation;