import React from "react";

class GroupLabel extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            symbol: props.group.symbol,
            name: props.group.name,
            color: props.group.color
        }
    }

    render() {
        let classes = "user-group " + this.state.color;
        return (
            <span className={classes}>{this.state.name}</span>
        );
    }
}

export default GroupLabel;