import React, {useState, useEffect} from 'react';
import './Feed.css';
import Post from "./Post";
import db from './firebase';
import FlipMove from "react-flip-move";

function Feed() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        //code..
        db.collection("posts").onSnapshot(snapshot => 
            //snapshot.doc.map(doc => doc.data()) gives an array of all posts and set that as posts
            setPosts(snapshot.docs.map(doc => doc.data()))
        )
    }, []);

    return (
        <div className= "feed">
            {/* Header */}
            <div className = "feed__header">
                <h2>Home</h2>
            </div>

            

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
                    image = {post.image} 
                    />
                ))}
            </FlipMove>

        </div>
    )
}

export default Feed
