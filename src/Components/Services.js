//Depemdences
import React from 'react'

//Style
import "./CSS/Services.css"

//Components
import CardService from "./ToServices/CardService"
import CardServiceExpand from "./ToServices/CardServiceExpand"
import PopUP from "./Modal/Modal"


class Services extends React.Component {

    render() {

        const { Object } = this.props;
        return (

            Object.map(
                (Info, Key) =>

                    <div className="o-FullContainerServices">
                        <h1>{Info.TitleServices}</h1>

                        <div className="o-Card">

                            {Info.Services.map(
                                (Info, key) =>
                                    <PopUP
                                        Color={Info.Color}
                                        content1={
                                            <CardService
                                                Service={Info.Title}
                                                ServiceDesc={Info.Paragraph}
                                                Color={Info.Color}
                                                Image={Info.Image}
                                            />
                                        }
                                        content2={
                                            <CardServiceExpand
                                                Service={Info.Title}
                                                ServiceDesc={Info.Paragraph}
                                                ServiceTec={Info.Desc_Tecnic}
                                                Color={Info.Color}
                                                Image={Info.Image}
                                                Point={Info.Point}
                                            />
                                        }
                                    />
                            )}
                        </div>
                    </div>
            )
        )
    }
}

export default Services;