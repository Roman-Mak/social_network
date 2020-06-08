import React from "react";
import Post from "./Post/Post";
import style from "./MyPosts.module.css"
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {
    let postElements = props.posts.map(post => <Post key={post.id} message={post.message}/>);

    let addPost = (formData) => {
        props.addPost(formData.newPostText);
    };

    return (
        <div>
            <div className={style.createPost}>
                <div className={style.headOfNewPost}>What's new</div>
                <AddPostReduxForm onSubmit={addPost}/>
            </div>
            {postElements};
        </div>
    )
};

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
                <Field
                    name={"newPostText"}
                    component={"textarea"}
                    className={style.newPost}
                    placeholder="Share your status..."
                />
            <button className={style.sendButton}>Send</button>
        </form>
    )
};

const AddPostReduxForm = reduxForm({form: 'newPost'})(AddPostForm);


export default MyPosts