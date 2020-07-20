import React from "react";
import Post from "./Post/Post";
import head_img from "../../../../assets/images/headimg.jpg";
import style from "./MyPosts.module.css"
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../../../utils/vallidators";
import {Textarea} from "../../../common/FormsControls/FormsControl";

const MyPosts = ({posts, addPost}) => {
    let postElements = posts.map(post => <Post key={post.id} message={post.message}/>);

    let onAddPostSubmit = (formData) => {
        addPost(formData.newPostText);
    };

    return (
        <div className={style.myPosts}>
            {/*<img className={style.head_img} src={head_img} alt={""}/>*/}
            {/*<img className={style.head_img} src={head_img} alt={""}/>*/}
            <div className={style.createPost}>
                <div className={style.headOfNewPost}>What's new</div>
                <AddPostReduxForm onSubmit={onAddPostSubmit}/>
            </div>
            {postElements}
        </div>
    );
};

const maxLength20 = maxLength(20);

const AddPostForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
                <Field
                    name={"newPostText"}
                    component={Textarea}
                    className={style.newPost}
                    placeholder="Share your status..."
                    validate={[required, maxLength20]}
                />
            <button className={style.sendButton}>Send</button>
        </form>
    );
};

const AddPostReduxForm = reduxForm({form: 'newPost'})(AddPostForm);

export default React.memo(MyPosts);