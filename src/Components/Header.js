//Dependences
import React from "react"
import { Link } from 'react-router-dom';
import Scrollchor from 'react-scrollchor';

//Components
import Butto3Lines from "./ToHeader/ButtonThreeLines"
import SideNavbar from "./ToHeader/SideNavbar"
import BackDrop from "./ToHeader/BackDrop"

//Style
import "./CSS/Header.css"

//Images
import LogoBamboo from './../Images/PNG/LogoBamboo.png'


class Header extends React.Component {

    state = {
        SideNavbarOpen: false
    }

    OpenSideNavbarClickHandler = () => {
        this.setState(
            (prevState) => {
                return { SideNavbarOpen: !prevState.SideNavbarOpen }
            }
        )
    }

    render() {
        let Backdrop;

        if (this.state.SideNavbarOpen) {
            Backdrop = <BackDrop OpenSideNavbarClickHandler={this.OpenSideNavbarClickHandler} />
        }
        return (
            <header className="o-FullFrame">
                <div style={{display: "flex"}}>
                    <a href="/">
                        <img src={LogoBamboo} alt="Logo Bamboo" />
                    </a>

                    <button id="LanguageSelector" onClick={this.props.ChangeLanguage} title={this.props.Imgs.Text}>
                        <img src={this.props.Imgs.Language} alt="" />
                    </button>
                </div>


                <nav className="SmallDeviceView">
                    <Butto3Lines OpenSideNavbarClickHandler={this.OpenSideNavbarClickHandler} />
                    <SideNavbar Pages={this.props.Pages} show={this.state.SideNavbarOpen} />
                    {Backdrop}
                </nav>

                <nav className="LargeDeviceView">
                    <ul className="o-Menu">

                        {this.props.Pages.map(
                            (Pages, key) =>

                                Pages.URL === "#Contact"
                                    ?
                                    <li className="o-Sheet">
                                        <Scrollchor to={Pages.URL} className="o-Sheet">
                                            {Pages.Page}
                                        </Scrollchor>
                                    </li>
                                    :
                                    <li className="o-Sheet">
                                        <Link className="o-Sheet" to={Pages.URL}>
                                            {Pages.Page}                
                                        </Link>
                                    </li>

                        )}
                    </ul>
                </nav>

            </header>
        )
    }
}

export default Header;