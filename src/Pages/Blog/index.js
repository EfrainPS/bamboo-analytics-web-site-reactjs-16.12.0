//Dependencies
import React from "react"

//Styles
import "./CSS/index.css"

//Components
import Welcome from "../../Components/Welcome"
import Copyrigth from "../../Components/Copyrigth"
import Header from "../../Components/Header"
import AllPosts from "../../Components/AllPosts"
import Contact from "../../Components/Contact"

import BG from "./../../Images/JPG/FondoNetwrok.jpg"

class Blog extends React.Component {

    componentWillMount() {
        window.scrollTo(0, 0)
    }

    render() {

        const { InfButton, Information, Images, Posts, LoadingPost, GifUp, PDFPolitycs, ChangeLanguage, Imgs } = this.props;


        return (
            InfButton.map(
                (InfButton, Key) =>

                    Images.map(
                        (Images, Key) =>
                            <div className="o-indexBlog">
                                <Header
                                    Pages={InfButton.Pages}
                                    ChangeLanguage={ChangeLanguage}
                                    Imgs={Imgs}
                                />
                                <Welcome
                                    BgImage={"black"}
                                    Bumb={Images.Bumb}
                                    LogoT1={Images.LogoTypeBlog}
                                    GifUp={GifUp}
                                    BG={BG}
                                    Information={Information}
                                />

                                {
                                    LoadingPost ?
                                        <div className="Loading">
                                            <img id="o-LoadingImg" src={LoadingPost} alt="Loading" />
                                        </div> :
                                        <AllPosts
                                            Posts={Posts}
                                            Information={Information}
                                            InfButton={InfButton}
                                        />
                                }

                                {Information.map(
                                    (Inf, Key) =>

                                        Inf.Contact.map(
                                            (InfContac, Key) =>

                                                InfContac.Localization.map(
                                                    (InfLocalization, Key) =>

                                                        <section id="Contact">
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
        )
    }
}

export default Blog;