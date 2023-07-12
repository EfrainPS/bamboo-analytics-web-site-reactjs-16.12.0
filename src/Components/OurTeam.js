//Dependences
import React from 'react'

//Style
import "./CSS/OurTeam.css"

//Component
import Photos from "./ToOurTeams/Photos"

class OurTeam extends React.Component {

    render() {

        const { Object } = this.props;

        return (
            <div className="o-FullContainerOurTeam">
                <h1>{Object.TitleTeam}</h1>
                <br/>
                <br/>


                <div className="o-ContainerPhotoTeam">
                    {Object.Team.map((Info, Key) =>
                        <Photos Key={Key} Photo={Info.Photo} Member={Info.Name} Extension={Info.Extension} Role={Info.Role} />
                    )
                    }
                </div>


            </div>

        )
    }

}

export default OurTeam;