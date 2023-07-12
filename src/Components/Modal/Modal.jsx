import React from 'react'

import "./index.css"

class Modal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            display: "none"
        }
    }

    Visible = () => {
        if (this.state.display === "none") {
            this.setState({ display: "flex" })
        }
        else {
            this.setState({ display: "none" })
        }
    }

    render() {

        const { display } = this.state;
        const { content1, content2, W, H } = this.props;

        return (
            <div>
                <div
                    onClick={() => this.Visible()}
                    className={"Boton"}>
                    {content1}
                </div>

                <div
                    className={"Pop_up"}
                    style={{
                        display: display
                    }}>

                    <div className="Card" style={{ width: W, height: H }}>
                        <div id="Blank_Space">

                            <button
                                id="Close"
                                onClick={() => this.Visible()}>
                                X
                        </button>
                            {content2}
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Modal;