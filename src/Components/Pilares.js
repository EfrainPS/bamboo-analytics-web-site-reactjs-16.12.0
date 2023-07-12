//Dependences
import React from 'react'
import { Accordion, AccordionItem } from 'react-sanfona';

//Styles
import "./CSS/Pilares.css"

//Configuration
//import Colors from "../Configuration/InformationPilars"

class Pilares extends React.Component {
    render() {

        const { Object } = this.props;


        return (

            Object.map(
                (Inf, Key) =>

                    <div className="o-FullContainerPilares">
                        <h1>{Inf.TitlePilares}</h1>
                        <div className="o-PilarsContainer">

                            <Accordion className="Acordion" allowMultiple={true} isHovered={false} allActive={true} openNextAccordionItem={false}>
                                {
                                    Inf.Pilars.map(
                                        (Color, key) =>
                                            <AccordionItem key={key} className="CardTitle" style={{ backgroundColor: Color.Color, width: Color.width }}
                                                title={
                                                    <div className="o-TitlePillar">
                                                        <div>
                                                            {Color.Title}
                                                        </div>
                                                        <div>
                                                            <img src="https://media1.giphy.com/media/24G0F8lQWYMb6jD47X/source.gif" alt="" />
                                                        </div>

                                                    </div>

                                                }
                                            >
                                                <div style={{ backgroundColor: Color.ColorDark }} className="CardDesc">
                                                    <p>{Color.Paragraph}</p>
                                                </div>
                                            </AccordionItem>
                                    )}
                            </Accordion>

                        </div>
                    </div>
            )
        )
    }

}

export default Pilares;