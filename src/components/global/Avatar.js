import ActivityStatus from "./ActivityStatus";
import React from "react";

class Avatar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: props.user.status
        }
    }

    getRandomImageSrc() {
        return `https://placeimg.com/200/200/people?${Math.random()}`;
    }

    render() {
        return (
            <div className="avatar">
                <img src={this.getRandomImageSrc()} alt="Profile" className="profile-image"/>
                <ActivityStatus status={this.state.status} />
            </div>
        );
    }
}

export default Avatar;