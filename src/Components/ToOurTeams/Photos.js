//Dependences
import React from 'react'

//Style
import "./CSS/Photos.css"

class Photos extends React.Component {

    render() {
        return (
            <div className="o-PhotoTeam">
                <div className="ContainerImage">
                    <img src={this.props.Photo} alt="" />
                </div>

                    <div className="o-TeamInformation">
                        <h4>
                            {this.props.Member}
                        </h4>
                    </div>
            </div>
        )
    }
}

export default Photos;