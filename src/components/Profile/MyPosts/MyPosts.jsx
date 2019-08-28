import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 1},
    {id: 2, message: "It's my first post", likesCount: 23},
    {id: 3, message: 'Blabla', likesCount: 11},
    {id: 4, message: "Dada", likesCount: 11}
];

let postsElements = posts
    .map( post => <Post message={post.message} likesCount={post.likesCount} id={post.id}/> );

const MyPosts = () => {
    return <div className={s.postsBlock}>
                <h3>My Posts</h3>
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>Add post</button>
                    </div>
                </div>
                <div className={s.posts}>
                    Posts
                    {postsElements}
                </div>
             </div>;
}

export default MyPosts;