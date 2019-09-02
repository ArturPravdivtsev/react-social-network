import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import s from './Profile.module.css';
import { addPost } from '../../redux/state';

const Profile = (props) => {
    return <div>
                <ProfileInfo />
                <MyPosts posts={props.state.posts} addPost={postMessage.addPost} />
            </div>;
}

export default Profile;