import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

let postsData = [
    {id: 1, message: 'Hi, how are you?', likesCount: 1},
    {id: 2, message: "It's my first post", likesCount: 23}
];

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
                    {postsData.map((item, i) => {
                        return(<Post key={i} message={item.message} likesCount={item.likesCount} id={item.id}/>);
                    })}
                </div>
             </div>;
}

export default MyPosts;