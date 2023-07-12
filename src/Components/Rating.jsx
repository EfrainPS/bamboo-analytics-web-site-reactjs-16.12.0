import React from "react"

import BeautyStars from 'beauty-stars';

class Rating extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            value: 0
        };
    }

    render() {
        return (
            <div style={{margin: "2rem 0 4rem"}}>
                <BeautyStars
                    size={"25px"}
                    value={this.state.value}
                    onChange={value => this.setState({ value })}
                />
            </div>

        );
    }
}

export default Rating;