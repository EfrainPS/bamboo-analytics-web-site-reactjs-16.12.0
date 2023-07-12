//Dependences
import React from "react"

//Components
import Header from "../../Components/Header"
import Welcome from "../../Components/Welcome"
import Services from "../../Components/Services"
import Clients from "../../Components/Clients"
import OurTeam from "../../Components/OurTeam"
import Contact from "../../Components/Contact"
import Copyrigth from "../../Components/Copyrigth"

//Styles
import "./CSS/index.css"

import BG from "./../../Images/JPG/FondoHoja.jpeg"

class Home extends React.Component {

    componentWillMount() {
        window.scrollTo(0, 0)
    }



    render() {

        //Content of page
        const { InfButton, Information, Images, GifUp, PDFPolitycs, ChangeLanguage, Imgs} = this.props;

        return (
            <div className="o-indexHome">

                {InfButton.map(
                    (Cont, key) =>
                                <Header
                                key={key}
                                    Pages={Cont.Pages}
                                    ChangeLanguage={ChangeLanguage}
                                    Imgs={Imgs}
                                />      
                )}

                {Images.map(
                    (Img, key) =>
                        <Welcome //Pendiente por vincular a los archivos Json
                        key={key}
                            Slogan={Img.Slogan}
                            LogoT1={Img.LogoType}
                            GifUp={GifUp}
                            BG={BG}
                            Information={Information}
                        />
                )}

                <Services Object={Information} />
                <Clients Object={Information} />

                {this.props.Information.map(
                    (Inf, key) =>
                        <OurTeam 
                        key={key}
                        Object={Inf}
                         />
                )}

                {InfButton.map(
                    (Cont, key) =>


                        Information.map(
                            (Inf, key1) =>

                                Inf.Contact.map(
                                    (InfContac, key2) =>

                                        InfContac.Localization.map(
                                            (InfLocalization, key3) =>
                                                <div>
                                                    <div id="Contact">
                                                        <Contact
                                                        key1={key1}
                                                        key2={key2}
                                                        key={key3}
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