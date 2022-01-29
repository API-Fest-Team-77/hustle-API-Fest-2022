import { MoreVert } from "@material-ui/icons";
import { useState } from "react";
import { Users } from "../../dummyData";
import "./post.css";

export default function Post({ post }) {
	const [like, setLike] = useState(post.like);
	const [isLiked, setIsLiked] = useState(false);

	const likeHandler = () => {
		setLike(isLiked ? like - 1 : like + 1);
		setIsLiked(!isLiked);
	};
	return (
		<div className="post">
			<div className="postWrapper">
				<div className="postTop">
					<div className="postTopLeft">
						<img
							className="postProfileImg"
							src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
							alt=""
						/>
						<span className="postUsername">{Users.filter((u) => u.id === post?.userId)[0].username}</span>
						<span className="postDate">{post.date}</span>
					</div>
					<div className="postTopRight">
						<MoreVert />
					</div>
				</div>
				<div className="postCenter">
					<span className="postText">{post?.desc}</span>
				</div>
				<div className="postBottom">
					<div className="postBottomLeft">
						<img className="likeIcon" src="assets/like.png" onClick={likeHandler} alt="" />
						<span className="postLikeCounter">{like} are interested</span>
					</div>
				</div>
			</div>
		</div>
	);
}
