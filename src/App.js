import React from 'react';
import './App.css';
import SearchBar from './components/list/SearchBar.js';
import GroupLabel from "./components/list/GroupLabel";
import UserName from "./components/list/UserName";
import Avatar from "./components/global/Avatar";

import filterIcon from './images/icons/filter.svg';
import logo from './images/icons/logoWhite.svg';
import listIcon from './images/icons/list.svg';
import plusIcon from './images/icons/plus.svg';
import userIcon from './images/icons/user.svg';
// import moment from "moment";

class App extends React.Component {
    constructor(props) {
        super(props);
        let colors = {
            orange: "orange",
            turquoise: "turquoise",
            codeAddictBlue: "code-addict-blue",
            bitEvilBlack: "bit-evil-black"
        };
        let groups = {
            BitEvil: {
                symbol: "BitEvil",
                name: "Bit Evil",
                color: colors.bitEvilBlack
            },
            CodeAddict: {
                symbol: "CodeAddict",
                name: "Code Addict",
                color: colors.codeAddictBlue
            },
            default: {
                symbol: "default",
                name: "default",
                color: colors.turquoise
            }
        };
        let users = [
            {
                symbol: "janedoe",
                firstName: "Jane",
                lastName: "Doe",
                group: groups.BitEvil,
                status: "active",
            },
            {
                symbol: "johndoe",
                firstName: "John",
                lastName: "Doe",
                group: groups.CodeAddict,
                status: "break",
            },
            {
                symbol: "johnnycash",
                firstName: "Johnny",
                lastName: "Cash",
                group: groups.CodeAddict,
                status: "inactive",
                schedule: {
                    in: "08:00",
                    out: "16:00"
                },
            },
        ];
        this.state = {
            colors: colors,
            groups: groups,
            users: users,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        alert("click!");
    }

    render() {
        return (
            <div className="global-wrapper">
                <div className="main-wrapper">
                    <header className="header">
                        <div className="header-element">
                            <img className="icon filter" src={filterIcon} alt="filter"/>
                        </div>
                        <div className="header-element">
                            <img className="icon logo" src={logo} alt="logo"/>
                        </div>
                        <div className="header-element"></div>
                    </header>
                    <main className="main">
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
                    </main>
                </div>
                <footer className="footer">
                    <nav className="nav">
                        <div className="nav-element" onClick={this.handleClick}>
                            <img className="icon list" src={listIcon} alt="list"/>
                        </div>
                        <div className="nav-element">
                            <img className="icon plus" src={plusIcon} alt="add"/>
                        </div>
                        <div className="nav-element">
                            <img className="icon user" src={userIcon} alt="user"/>
                        </div>
                    </nav>
                </footer>
            </div>
        )
    };
}

export default App;
