//Dependencies
import React from 'react'
import { Button as BstButton, Form, Input, Label } from 'reactstrap'
import axios from 'axios'

//Popup
import Rodal from 'rodal'
import 'rodal/lib/rodal.css'

//Components
import NetworkSocial from './ToContact/NetworkSocial'

//paper plane
import PaperPlane from './../Images/SVG/paper-plane.svg'

//Style
import "./CSS/Contact.css"

class Contact extends React.Component {

    constructor() {
        super();

        this.state = {
            Name: "",
            Phone: "",
            Email: "",
            Message: "",
            Subject: "(Web) Bamboo Analytics S.A.",
            visible: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    //Funcion asincrona para conectarse con el servidos a traves de las metodos post/get/put/put
    async handleSubmit(e) {
        e.preventDefault();

        const { Name, Email, Phone, Message, Subject } = this.state;

        //Muestra PopUp
        this.setState({
            visible: true
        })

        await axios.post('https://fcontactusbamboo.azurewebsites.net/api/fcontactusbamboo?code=m0c96bNorsaiobahJ5XPUxRufAbe2vwFuxoT7AnDr9IZD2cpSzeA1w==', {
            Name, Email, Phone, Message, Subject
        }).then(function (response) {
            // handle success
            console.log(response.data);
        })

    }

    //Oculta el popup
    hide() {
        this.setState({ visible: false });
        window.location.reload(false);
    }

    render() {

        const {
            Title,
            Paragraph,
            NameLabel,
            NameExample,
            EmailLabel,
            EmailExample,
            PhoneLabel,
            PhoneExample,
            MessageLabel,
            MessageExample,
            DataPolitic1,
            DataPolitic2,
            SendSuccess,
            MessageSuccess,
            PDFPolitycs,

            TitleAtentionHour,
            Day,
            Hour,

            TitleDirection,
            Direction,
            TitleEmail,
            Email,
            TitlePhone,
            Phone,


        } = this.props;

        return (
            <div className="o-FullContainerContact" >
                <h1>{Title}</h1>
                <br/>
                <p>{Paragraph}</p>
                <br/>
                <div id="o-ContainerContact">
                    <Form className="o-FormContainer" onSubmit={this.handleSubmit}>
                        <Label for="InputName">{NameLabel}</Label>
                        <Input
                            className="o-ContainerText"
                            id="InputName"
                            required
                            type="text"
                            name="Name"
                            onChange={this.handleChange}
                            placeholder={NameExample}
                        />
                        <Label for="InputEmail">{EmailLabel}</Label>
                        <Input
                            className="o-ContainerText"
                            id="InputEmail"
                            required
                            type="email"
                            name="Email"
                            onChange={this.handleChange}
                            placeholder={EmailExample}
                        />
                        <Label for="InputPhone">{PhoneLabel}</Label>
                        <Input
                            className="o-ContainerText"
                            id="InputPhone"
                            required
                            type="number"
                            name="Phone"
                            onChange={this.handleChange}
                            placeholder={PhoneExample}
                        />
                        <Label for="InputMessage">{MessageLabel}</Label>
                        <Input
                            className="o-ContainerMessage"
                            id="InputMessage"
                            required
                            type="textarea"
                            name="Message"
                            onChange={this.handleChange}
                            placeholder={MessageExample}
                        />
                        <div className="o-TermAndConditions">
                            <input type="checkbox" required />
                            <label>
                                {DataPolitic1}
                            </label>
                            <a href={PDFPolitycs} target="_blank" rel="noopener noreferrer">
                                {DataPolitic2}
                            </a>
                        </div>

                        <BstButton className="o-ButtonSend">

                            <img id={"o-PaperPlane"} src={PaperPlane} alt="Paper_plane" />

                        </BstButton>

                    </Form>
                    <div className="o-InfoContactUs">
                        <br/>
                        <h2>{TitleAtentionHour}</h2>
                        <br/>
                        <p>
                            {Day}
                            <br />
                            {Hour}
                            <br />
                            <br />
                            {TitleDirection}
                            <br />
                            {Direction}
                            <br />
                            <br />
                            {TitleEmail}
                            <br />
                            {Email}
                            <br />
                            <br />
                            {TitlePhone}
                            <br />
                            {Phone}
                            <br />
                            <br />
                        </p>
                        
                        <NetworkSocial/>
                    </div>
                </div>
                {/*Pop up que enseña cuando el mensaje ha sido enviado satisfactoriamente*/}

                <Rodal visible={this.state.visible} onClose={this.hide.bind(this)}
                    customStyles={{
                        width: "60%",
                        height: "40%",
                        backgroundColor: "green",
                        color: "white",
                        textalign: "center",
                        textAlign: "center", textJustify: "center"
                    }}
                >
                    <h1>{SendSuccess}</h1>
                    <h3>{MessageSuccess}</h3>

                </Rodal>
            </div>//Final del div global
        )
    }
}

export default Contact;