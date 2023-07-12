//Dependences
import React from "react"

//Components
import Header from "../../Components/Header"
import WeAre from "../../Components/WeAre"
import Pilares from "../../Components/Pilares"
import OurTeam from "../../Components/OurTeam"
import Contact from "../../Components/Contact"
import Copyrigth from "../../Components/Copyrigth"

//Styles
import "./CSS/index.css"

class Home extends React.Component {

    componentWillMount() {
        window.scrollTo(0, 0)
    }



    render() {

        //Content of page
        const { InfButton, Information, PDFPolitycs, ChangeLanguage, Imgs, Photo} = this.props;

        return (
            <div className="o-indexHome">

                {InfButton.map(
                    (Cont, key) =>
                                <Header
                                    Pages={Cont.Pages}
                                    ChangeLanguage={ChangeLanguage}
                                    Imgs={Imgs}
                                />      
                )}
                {Information.map(
                    (Inf, Key) =>
                        <div style={{ padding: "0", margin: "0" }}>

                            {Inf.WeAre.map(
                                (In, k2) =>
                                    <WeAre
                                        Photo={Photo}
                                        Title={In.Title}
                                        Paragraph={In.Paragraph}
                                    />
                            )}

                        </div>
                )}

                <Pilares Object={Information} />

                {this.props.Information.map(
                    (Inf, Key) =>
                        <OurTeam Object={Inf} />
                )}

                {InfButton.map(
                    (Cont, key) =>


                        Information.map(
                            (Inf, Key) =>

                                Inf.Contact.map(
                                    (InfContac, Key) =>

                                        InfContac.Localization.map(
                                            (InfLocalization, Key) =>
                                                <div>
                                                    <div id="Contact">
                                                        <Contact
                                                            Button={Cont.Submit}
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
                                                    </div>
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
                                                </div>
                                        )
                                )
                        )
                )}

            </div>
        )
    }

}

export default Home;