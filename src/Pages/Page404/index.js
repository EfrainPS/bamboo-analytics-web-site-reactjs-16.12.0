//Dependencies
import React from "react"
import { Link } from 'react-router-dom';

//Style
import "./CSS/index.css"

class Page404 extends React.Component {

    componentWillMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div style={{
                width: "100vw",
                height: "100vh",
                backgroundColor: "black",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <h1>Ruta invalida</h1>
                <h4>Intente con:</h4>
                <li className="o-Sheet404">
                    <Link to={"/"}>
                        Inicio
                        </Link>
                    <Link to={"/Blog"}>
                        Blog
                        </Link>
                </li>
            </div>
        )
    }
}

export default Page404;