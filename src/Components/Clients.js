//Dendences
import React from 'react'

//Styles
import "./CSS/Clients.css"

class Clients extends React.Component {

    render() {
        const {Object} = this.props;

        return (


            Object.map(
                (Info) => 
                
                <div className="o-FullContainerClients">
                <h1>{Info.TitleClients}</h1>
                <div className="o-ImgContainerClients">

                    {Info.Clients.map(
                        (Info, Key) =>
                            <img 
                            Key={Key} 
                            src={Info.Image} 
                            alt={Info.Name}
                            style={{
                                height: Info.Size
                            }} 
                            />
                    )}

                </div>
            </div>
                
                )

            
        )
    }

}

export default Clients;