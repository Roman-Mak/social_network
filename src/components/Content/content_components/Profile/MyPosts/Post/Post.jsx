import avatar from "../../../../../img/wolf.jpg"
import React from "react";

const MyPosts = () => {
    return <div>
    <div className='createpost'>
            <div className='headOfPosts'>What's new</div>
            <div className='newpost'>Share your status...</div>
            <button className='send-button'>Send</button>
        </div>
        <div className='posts'>
            <div><img className='avatar_small' src={avatar}/>I'm ALIVE!!!</div>
            <div><img className='avatar_small' src={avatar}/>I'm not machine!</div>
            <div><img className='avatar_small' src={avatar}/>I'm not your slave!</div>
        </div>
    </div>
}

export default MyPosts