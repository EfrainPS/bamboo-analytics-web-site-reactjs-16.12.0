//Dependencies
import React from "react"
import renderHTML from 'react-render-html'
//import { Redirect } from 'react-router';

//Styles
import "./CSS/index.css"

//Components
import Copyrigth from "../../Components/Copyrigth"
import Contact from "../../Components/Contact"
import Header from "../../Components/Header"

//Images
import DefaultImage from "../../Images/PNG/DefaultImage.png"

class Post extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ok: true,
            Po: [],
            Load: "Cargando"
        }
    }

    componentWillMount() {
        window.scrollTo(0, 0);
    }

    ExisteBlog = (Po) => {
        return (

            Po.map(
                (Posts) =>
                    <div className="o-ContentPost">
                        <div className="o-PostContainerImage">

                            <img className="o-ImagePost"
                                src={Posts.featured_media === 0 ? DefaultImage : Posts._embedded['wp:featuredmedia']['0'].source_url}
                                alt="" />

                            <div id="TitleContent">
                                <h1 id="Titulo">{Posts.title.rendered}</h1>
                                <h4 id="Autor" >{Posts._embedded.author[0].name}</h4>
                            </div>

                        </div>
                        <div id="BodyPost">
                            {renderHTML(Posts.content.rendered)}
                        </div>
                    </div>
            )
        )
    }

    render() {

        const { Posts, InfButton, Information, PDFPolitycs, Loading } = this.props;
        const Po = Posts.filter((user) => user.id == this.props.match.params.id);

        return (

            InfButton.map((InfButton) =>
                <div className="o-PostIndex">

                    <Header
                        Pages={InfButton.Pages}
                        ChangeLanguage={this.props.ChangeLanguage}
                        Imgs={this.props.Imgs}
                    />

                    {
                        Po == "" ?
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    margin: "8vh 0"
                                }}
                            >
                                <img 
                                    src={Loading} 
                                    alt=""
                                    style={{
                                        width: "5vw"
                                    }}
                                />
                                La publicación está cargando o probablemente no existe
                            </div> :
                            this.ExisteBlog(Po)
                    }

                    {Information.map(
                        (Inf) =>

                            Inf.Contact.map(
                                (InfContac) =>

                                    InfContac.Localization.map(
                                        (InfLocalization) =>

                                            <section>
                                                <Contact
                                                    Button={InfButton.Submit}
                                                    Title={InfContac.Title}
                                                    Paragraph={InfContac.Paragraph}
                                                    NameLabel={InfContac.NameLabel}
                                                    NameExample={InfContac.NameExample}
                                                    EmailLabel={InfContac.EmailLabel}
                                                    EmailExample={InfContac.EmailExample}
                                                    PhoneLabel={InfContac.PhoneLabel}
                                                    PhoneExample={InfContac.PhoneExample}
                                                    MessageLabel={InfContac.MessageLabel}
                                                    MessageExample={InfContac.MessageExample}
                                                    TitleDirection={InfLocalization.TitleDirection}
                                                    Direction={InfLocalization.Direction}
                                                    TitleEmail={InfLocalization.TitleEmail}
                                                    Email={InfLocalization.Email}
                                                    TitlePhone={InfLocalization.TitlePhone}
                                                    Phone={InfLocalization.Phone}
                                                    TitleAtentionHour={InfLocalization.TitleAtentionHour}
                                                    Day={InfLocalization.Day}
                                                    Hour={InfLocalization.Hour}
                                                    DataPolitic1={InfContac.DataPolitic1}
                                                    DataPolitic2={InfContac.DataPolitic2}
                                                    SendSuccess={InfContac.SendSuccess}
                                                    MessageSuccess={InfContac.MessageSuccess}
                                                    PDFPolitycs={PDFPolitycs}

                                                />
                                                <Copyrigth
                                                    TitleDirection={InfLocalization.TitleDirection}
                                                    Direction={InfLocalization.Direction}
                                                    TitleEmail={InfLocalization.TitleEmail}
                                                    Email={InfLocalization.Email}
                                                    TitlePhone={InfLocalization.TitlePhone}
                                                    Phone={InfLocalization.Phone}
                                                    TitleAtentionHour={InfLocalization.TitleAtentionHour}
                                                    Day={InfLocalization.Day}
                                                    Hour={InfLocalization.Hour}
                                                />
                                            </section>
                                    )
                            )
                    )
                    }
                </div>
            )



        )
    }
}

export default Post;