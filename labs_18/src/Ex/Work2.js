import React, { Component } from "react";

class Work2 extends Component {
    showMessage() {
        alert("Hello");
    }

    render() {
        return (
            <div>
                <button onClick={this.showMessage}>Press on button</button>
            </div>
        )
    }
}

export default Work2;