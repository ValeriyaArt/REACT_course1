import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    console.log(props)
    return <div>
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </div>
    </div>
}

export default Profile;