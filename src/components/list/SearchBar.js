import React from "react";
import searchIcon from "../../images/icons/search.svg";

class SearchBar extends React.Component {
    render() {
        let placeholder = "Szuakj ludzi lub grupy";
        return (
            <div className="search-bar">
                <img className="icon search-icon" src={searchIcon} alt="search"/>
                <input placeholder={placeholder} className="search-input" type="text" />
            </div>
        );
    }
}

export default SearchBar;