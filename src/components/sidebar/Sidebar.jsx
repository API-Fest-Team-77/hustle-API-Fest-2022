import { Chat, Group, RssFeed } from "@material-ui/icons";
import "./sidebar.css";

export default function Sidebar() {
	return (
		<div className="sidebar">
			<div className="sidebarWrapper">
				<ul className="sidebarList">
					<li className="sidebarListItem">
						<RssFeed className="sidebarIcon" />
						<span className="sidebarListItemText">Feed</span>
					</li>
					<li className="sidebarListItem">
						<Chat className="sidebarIcon" />
						<span className="sidebarListItemText">Post an Idea</span>
					</li>
					<li className="sidebarListItem">
						<Group className="sidebarIcon" />
						<span className="sidebarListItemText">Update Profile</span>
					</li>
				</ul>
			</div>
		</div>
	);
}
