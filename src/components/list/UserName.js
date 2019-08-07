import React from "react";

class UserName extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: props.user.firstName,
            lastName: props.user.lastName,
        };
        this.renderType = props.renderType;
    }

    fullName() {
        return `${this.state.firstName} ${this.state.lastName}`;
    }

    reversed() {
        return `${this.state.lastName}, ${this.state.firstName}`;
    }

    render() {
        switch (this.renderType) {
            case 'reversed':
                return <div className="user-name">{this.reversed()}</div>;
            case 'fullName': // fallback to default
            default:
                return <div className="user-name">{this.fullName()}</div>;
        }
    }
}

export default UserName;