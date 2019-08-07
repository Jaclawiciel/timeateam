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
                return this.reversed();
            case 'fullName': // fallback to default
            default:
                return this.fullName();
        }
    }
}

export default UserName;