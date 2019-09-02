import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements = props.posts
    .map( post => <Post message={post.message} likesCount={post.likesCount} id={post.id}/> );

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    }

    return <div className={s.postsBlock}>
                <h3>My Posts</h3>
                <div>
                    <div>
                        <textarea ref={newPostElement}></textarea>
                    </div>
                    <div>
                        <button onClick={ addPost }>Add post</button>
                    </div>
                </div>
                <div className={s.posts}>
                    Posts
                    {postsElements}
                </div>
             </div>;
}

export default MyPosts;