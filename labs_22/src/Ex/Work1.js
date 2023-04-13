import React from "react";

class Work1 extends React.Component {
    constructor(props) {
        super(props);

        this.ChangeStyle = this.ChangeStyle.bind(this);
    }

    ChangeStyle(target) {
        let length = (target.value + "").length;

        if (length >= 4 && length <= 9)
            target.style.border = "5px solid green";
        else
            target.style.border = "5px solid red";
    }

    render() {
        return(
            <div>
                <input
                    type="text"
                    placeholder="Input text"
                    onChange={ (event) => this.ChangeStyle(event.target)}
                    style={{
                        border: "5px solid red",
                    }}
                />
            </div>
        );
    }
}

export default Work1;