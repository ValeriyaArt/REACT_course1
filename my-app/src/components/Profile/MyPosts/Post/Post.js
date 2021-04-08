import s from './Post.module.css'


const Post = (props) => {
    return <div className={s.item}>
        <img src={'https://blog.excurspb.ru/media/k2/items/cache/9aa91352e792f145830c61b99571c730_XL.jpg'}/>
        {props.message}
        <div>
            <span>like</span>
        </div>
    </div>
}

export default Post;