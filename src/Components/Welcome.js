//Dependences
import React from "react"

//Style
import "./CSS/Welcome.css"

class Welcome extends React.Component {

    render() {

        const { LogoT1, LogoT2, GifUp, BG, Information} = this.props;

        return (
            <div className="o-FullContainer"
                style={{
                    background: `url(${BG})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }}
            >
                <div id="BloqueLogo">
                    <img className={"o-LogoTipo"} src={LogoT1} alt="" />
                    <img className="o-LogoTipo2" src={LogoT2} alt="" />
                    <img className="o-GifUp" src={GifUp} alt="" />
                </div>
                <div id="BloqueSlogan">
                    {Information.map(
                        (Information, key) =>
                            <h1 id="Slogan">{Information.Slogan}</h1>
                    )}

                </div>

            </div>
        )
    }
}

export default Welcome;