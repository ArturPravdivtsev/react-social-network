import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader />
    }

    return <div>
                <div>
                    <img src="https://i.ytimg.com/vi/hHUWhW9zK3M/hqdefault.jpg" />
                </div>
                <div className={s.descriptionBlock}>
                    <img src={props.profile.photos.large} />
                </div>
            </div>;
}

export default ProfileInfo;