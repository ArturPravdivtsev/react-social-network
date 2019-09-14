import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';



const MyPosts = (props) => {

    let postsElements = props.posts
    .map( post => <Post message={post.message} likesCount={post.likesCount} id={post.id}/> );

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());

    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return <MyPosts />;
}

export default MyPostsContainer;