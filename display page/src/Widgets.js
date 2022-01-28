import React from 'react';
import "./Widgets.css";
import { Input } from '@nextui-org/react';

import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
    return (
        <div className = "widgets">
            <div className = "widgets__input">
            <Input clearable contentRightStyling={false} placeholder="Search"
            contentRight={<SearchIcon />}
        />
            </div>
        </div>
    )
}

export default Widgets
