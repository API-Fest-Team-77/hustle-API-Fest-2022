import { Person, Search } from "@material-ui/icons";
import "./topbar.css";
export default function Topbar() {
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
				<div className="topbarLinks">
					<span className="topbarLink">Homepage</span>
				</div>
				<div className="topbarIcons">
					<div className="topbarIconItem">
						<Person />
						<span className="topbarIconBadge">1</span>
					</div>
				</div>
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlYYChXCPeV3ou1wdnB_y4AhXAEySC1D6agQ&usqp=CAU"
					alt=""
					className="topbarImg"
				/>
			</div>
		</div>
	);
}
