import React from 'react';
import "./Widgets.css";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
    return (
        <div className = "widgets">
            <div className = "widgets__input">
                <SearchIcon className = "w idgets__searchIcon"/>
                <input placeholder = "Search for categories" type = "text" />
            </div>
        </div>
    )
}

export default Widgets
