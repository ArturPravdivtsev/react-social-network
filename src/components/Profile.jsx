import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return <div className={s.content}>
                <div><img src="https://i.ytimg.com/vi/hHUWhW9zK3M/hqdefault.jpg" /> </div>
                <div><img src="https://ctl.s6img.com/society6/img/rPcqOyy-DQYPqnjvwqrYn2zJYgg/w_700/prints/~artwork/s6-original-art-uploads/society6/uploads/misc/3229d5e764b4446ea2d41b89b28e9182/~~/moraine-lake-landscape-photography-prints.jpg" /></div>
                <div>
                    My Posts
                    <div>New Post</div>
                    <div className={s.posts}>
                        Posts
                        <div className={s.item}>Post1</div>
                        <div className={s.item}>Post2</div>
                    </div>
                </div>
            </div>;
}

export default Profile;