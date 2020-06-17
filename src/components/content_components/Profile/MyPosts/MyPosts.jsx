import React from "react";
import Post from "./Post/Post";
import head_img from "../../../../assets/images/headimg.jpg";
import style from "./MyPosts.module.css"
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../../../utils/vallidators";
import {Textarea} from "../../../common/FormsControls/FormsControl";

const MyPosts = (props) => {
    let postElements = props.posts.map(post => <Post key={post.id} message={post.message}/>);

    let addPost = (formData) => {
        props.addPost(formData.newPostText);
    };

    return (
        <div className={style.myPosts}>
            <img className={style.head_img} src={head_img}/>
            <img className={style.head_img} src={head_img}/>
            <div className={style.createPost}>
                <div className={style.headOfNewPost}>What's new</div>
                <AddPostReduxForm onSubmit={addPost}/>
            </div>
            {postElements}
        </div>
    )
};

const maxLength20 = maxLength(20);

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
                <Field
                    name={"newPostText"}
                    component={Textarea}
                    className={style.newPost}
                    placeholder="Share your status..."
                    validate={[required, maxLength20]}
                />
            <button className={style.sendButton}>Send</button>
        </form>
    )
};

const AddPostReduxForm = reduxForm({form: 'newPost'})(AddPostForm);


export default MyPosts