import React from 'react'
import renderHTML from 'react-render-html'

import "./CSS/CardServiceExpand.css"

class CardServiceExpand extends React.Component {

    render() {

        const { Image, ServiceTec, Color } = this.props;

        return (
            <div className="o-ContainerServiceExpand" >
                <div className="o-Presentation" style={{ backgroundColor: Color }}>
                    <img className="o-IconServ" src={Image} alt="" />
                </div>
                <div className="o-Description" style={{ backgroundColor: "WhiteSmoke", color: Color }}>
                    <div className="Paragraph">

                        {renderHTML(ServiceTec)}
                    </div>


                </div>
            </div>
        )
    }
}

export default CardServiceExpand;