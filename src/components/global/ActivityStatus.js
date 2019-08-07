import React from "react";

class ActivityStatus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: props.status
        }
    }

    render() {
        let classes = `activity-status ${this.state.status}`;
        return <div className={classes} />;
    }
}

export default ActivityStatus;