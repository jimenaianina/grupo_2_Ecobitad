import React from 'react';

function User(props) {
    return (
        <div className="User">
                <h2> { props.name } {props.last_name} </h2>
                <p> {props.email} </p>
                <p> {props.detailURL} </p>
            </div>
    )
}

export default User;