import s from './MyPosts.module.css'
import Post from "./Post/Post";
import * as React from "react";
import {Field, reduxForm} from "redux-form";


const MyPosts = (props) => {
    let postElements =
        props.posts.map(p => <Post message={p.message}/>)

    let newPostElement = React.createRef();

    let onAddPost = (values) =>{
        props.addPost(values.newPostText);
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    }
    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
        </div>
        <div className={s.posts}>
            {postElements}
        </div>

    </div>
}

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <div>
                <Field name={"newPostText"}
                       component={"textarea"}
                       placeholder='Enter your post'/>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)


export default MyPosts;