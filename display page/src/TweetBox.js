import React,{useState} from 'react';
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from './firebase';
function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("")
    const [tweetImage, setTweetImage] = useState("")
    const sendTweet = (e) => {

        e.preventDefault();

        db.collection('posts').add({
            displayName: 'Madhav Anchala',
            username: 'mads2829',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://images.unsplash.com/photo-1636867498233-ea7ca33533e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=730&q=80"
        });

        setTweetMessage("");
        setTweetImage("");
    };

    return (
        <div className = "tweetBox">
            <form>
                <div className = "tweetBox__input">
                    <Avatar src= "https://images.unsplash.com/photo-1636867498233-ea7ca33533e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=730&q=80" />
                    <input onChange = { (e) => setTweetMessage(e.target.value)}  
                        value = {tweetMessage} 
                        placeholder="What's the idea?" 
                        type="text" 
                        />
                </div>
                <label class = "custom-file-upload" for = "file">
                <input 
                    onChange = { (e) => setTweetImage(e.target.value)}
                    value = {tweetImage}
                    className = "tweetBox__imageInput" 
                    placeholder = "Enter the any image URL for reference" 
                    type = "file" id = "file" />
                    Upload a file
                </label>
                {/* <Upload text = "Upload the file"/> */}
                <Button onClick = {sendTweet} type = "submit" className = "tweetBox__tweetButton">Post</Button>
            </form>
        </div>
    )
}

export default TweetBox
