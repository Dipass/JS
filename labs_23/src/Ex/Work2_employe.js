import React from "react";

function Work2_employe(props) 
{
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.surname}</td>
            <td>{props.age}</td>
            <td>
                <a href="#" onClick={props.func} >Натисніть</a>
            </td>
        </tr>
    );
}

export default Work2_employe;