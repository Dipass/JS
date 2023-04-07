import React, { Component } from "react";

class Work10 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            arrayNames: ["Коля", "Вася", "Петя"]
        }
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.arrayNames.map((item, key) => <li key={key}>{item}</li>)}
                </ul>
            </div>
        )
    }
}

export default Work10;