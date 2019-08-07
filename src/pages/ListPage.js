import React from "react";
import SearchBar from "../components/list/SearchBar";
import Avatar from "../components/global/Avatar";
import UserName from "../components/list/UserName";
import GroupLabel from "../components/list/GroupLabel";

class ListPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: props.users
        }
    }

    render() {
        return (
            <div className="page-content">
                <SearchBar/>
                <div className="users">
                    {this.state.users.map((user) =>
                        <div key={user.symbol} className="user">
                            <div className="user-info">
                                <Avatar user={user} />
                                <div className="user-text">
                                    <UserName user={user} renderType="fullName"/>
                                    <GroupLabel group={user.group}/>
                                </div>
                            </div>
                            <div className="user-avail">nieobecny</div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default ListPage;