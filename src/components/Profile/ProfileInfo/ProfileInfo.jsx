import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return <div>
                <div>
                    <img src="https://i.ytimg.com/vi/hHUWhW9zK3M/hqdefault.jpg" />
                </div>
                <div className={s.descriptionBlock}>
                    <img src="https://ctl.s6img.com/society6/img/rPcqOyy-DQYPqnjvwqrYn2zJYgg/w_700/prints/~artwork/s6-original-art-uploads/society6/uploads/misc/3229d5e764b4446ea2d41b89b28e9182/~~/moraine-lake-landscape-photography-prints.jpg" />
                </div>
            </div>;
}

export default ProfileInfo;