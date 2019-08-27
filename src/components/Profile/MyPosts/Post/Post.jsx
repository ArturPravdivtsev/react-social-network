import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return  <div className={s.item}>
                <img src="https://img3.goodfon.ru/original/1920x1080/3/51/avatar-neytiri-zoe-saldana-6192.jpg"/>
                { props.message }
                <div>
                    <span>like { props.likesCount }</span>
                </div>
                
            </div>;
}

export default Post;