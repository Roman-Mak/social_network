import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import style from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Post from "./MyPosts/Post/Post";

const Profile = () => {

    let posts = [
        {message: "I'm ALIVE!!!", id: "3"},
        {message: "I'm not machine!", id: "2"},
        {message: "I'm not your slave!", id: "1"}
    ];

    let postElements = posts.map(post => <Post message={post.message}/>);

    return (
        <div className={style.profile}>
            <ProfileInfo />
            <MyPosts posts={postElements} />
        </div>
    )
}

export default Profile