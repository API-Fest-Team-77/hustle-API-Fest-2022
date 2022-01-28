import React, {forwardRef} from 'react';
import { Person, Search } from "@material-ui/icons";
import "./topbar.css";
// import { topbarEg } from '../../dummyData';

const Topbar = forwardRef(
    ({
		notificationCount,
		imageUrl
	}) => {
    return (
		<div className="topbarContainer">
			<div className="topbarLeft">
				<span className="logo">Hustle.</span>
			</div>
			<div className="topbarCenter">
				<div className="searchbar">
					<Search className="searchIcon" />
					<input placeholder="Search for a specific post" className="searchInput" />
				</div>
			</div>
			<div className="topbarRight">
				<div>
					<span className="topbarLink">Homepage</span>
				</div>
				<div className="topbarIcons">
					<div className="topbarIconItem">
						<Person />
						<span className="topbarIconBadge">{notificationCount}</span>
					</div>
				</div>
				<img
					src={imageUrl}
					alt=""
					className="topbarImg"
				/>
			</div>
		</div>
	    )
})

export default Topbar