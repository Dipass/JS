import React, { Component } from "react";

class Work1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "Іван",
            age: 25
        }
    }
    render() {
        return (
            <div>
                <p>Ім'я:{this.state.name}, вік:{this.state.age}</p>
            </div>
        )
    }
}

export default Work1;
