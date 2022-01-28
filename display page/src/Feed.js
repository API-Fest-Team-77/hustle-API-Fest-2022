import React, {useState, useEffect} from 'react';
import './Feed.css';
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from './firebase';
import FlipMove from "react-flip-move";

// mock data
let posts =[{
    'title':'header1',
    'text':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'displayName':'Lenin',
    'username':'leninek',
    'verified':true,
    'avatar':''
},
{   
    'title':'header2',
    'text':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'displayName':'Madhav',
    'username':'mads',
    'verified':true,
    'avatar':''
}]

function Feed() {
    // const [posts, setPosts] = useState([]);
    // useEffect(() => {
    //     //code..
    //     db.collection("posts").onSnapshot(snapshot => 
    //         //snapshot.doc.map(doc => doc.data()) gives an array of all posts and set that as posts
    //         setPosts(snapshot.docs.map(doc => doc.data()))
    //     )
    // }, []);

    return (
        <div className= "feed">
            {/* Header */}
            <div className = "feed__header">
                <h2>Home</h2>
            </div>

            {/* TweetBox */}
            {/* <TweetBox /> */}

            <FlipMove>
                {/* Post */}
                {posts.map(post => (
                    <Post 
                    key = {post.text}
                    displayName = { post.displayName} 
                    username = {post.username}
                    verified = {post.verified} 
                    text = {post.text} 
                    avatar = {post.avatar}
                    title = {post.title}
                    />
                ))}
            </FlipMove>

        </div>
    )
}

export default Feed
