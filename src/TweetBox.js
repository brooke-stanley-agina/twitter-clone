import React, { useState } from 'react';
import './TweetBox.css';
import { Avatar, Button} from "@material-ui/core";
import db from './firebase';
function TweetBox() {

    const [tweetMessage, setTweetMessage] = useState("")
    const [tweetImage, setTweetImage] = useState("")
    const sendTweet = (e) =>{
        e.preventDefault();
        db.collection('posts').add({
            dispalyName: 'Brooke Stanley',
            username: 'stanley',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://pbs.twimg.com/profile_images/1391839811162488840/FnVRCkrc_400x400.jpg"
        });
        setTweetMessage("");
        setTweetImage("");
    };

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src={"https://pbs.twimg.com/profile_images/1357394068775571458/KtMCqr25_400x400.jpg"} />
                    <input
                     onChange={e => setTweetMessage(e.target.value)}
                     value={tweetMessage}
                     placeholder="What's happening?" 
                     type="text" />
                </div>
                <input
                onChange={e => setTweetImage(e.target.value)}
                value={tweetImage}
                className="tweetBox__inputImage" 
                placeholder="Optional: Enter image url" 
                type="text" />
                <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
