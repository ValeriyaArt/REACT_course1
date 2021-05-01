import s from './MyPosts.module.css'
import Post from "./Post/Post";
import * as React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";


const MyPosts = React.memo(props => {
        let postElements =
            props.posts.map(p => <Post message={p.message}/>)

        let onAddPost = (values) => {
            props.addPost(values.newPostText);
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
)

const maxLength = maxLengthCreator(10)

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <div>
                <Field name={"newPostText"}
                       component={Textarea}
                       validate={[required,maxLength]}
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