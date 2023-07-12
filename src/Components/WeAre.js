//Dependences
import React from "react"
import renderHTML from 'react-render-html'

import Carousel from "react-bootstrap/Carousel"

import 'bootstrap/dist/css/bootstrap.min.css';

//Style
import "./CSS/WeAre.css"

class WeAre extends React.Component {

    render() {

        const { Title, Paragraph, Photo } = this.props;

        return (
            <div className="o-FullContainerWA">
                <h1>{Title}</h1>
                <p>{renderHTML(Paragraph)}</p>
                <br />

                <Carousel style={{width: "100%", textAlign: "center", backgroundColor: "rgba(0,0,0,0.0)"}}>
                    {Photo.map(
                        (PhotoOffice) =>

                            <Carousel.Item >
                                <img
                                    className="ImgCarousel"
                                    src={PhotoOffice.photo}
                                    alt={PhotoOffice.photo}
                                />
                            </Carousel.Item>
                    )
                    }

                </Carousel>

            </div>

        )
    }
}

export default WeAre;