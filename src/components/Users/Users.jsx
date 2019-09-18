import React from 'react';
import s from './Users.module.css';

let Users = (props) => {
    if(props.users.length === 0) {
    props.setUsers([
        {
            id: 1, 
            photoUrl: 'https://avatars.mds.yandex.net/get-pdb/25978/7185b4a6-13b9-4f7e-a537-9a474db4967b/s1200', 
            followed: false, 
            fullname: 'Dmitry', 
            status: 'I am a boss', 
            location: {
                city: 'Minsk', 
                country: 'Belarus'
            }
        },
        {
            id: 2, 
            photoUrl: 'https://avatars.mds.yandex.net/get-pdb/25978/7185b4a6-13b9-4f7e-a537-9a474db4967b/s1200', 
            followed: true, 
            fullname: 'Sasha', 
            status: 'I am a boss too', 
            location: {
                city: 'Moscow', 
                country: 'Rusia'
            }
        },
        {
            id: 3, 
            photoUrl: 'https://avatars.mds.yandex.net/get-pdb/25978/7185b4a6-13b9-4f7e-a537-9a474db4967b/s1200', 
            followed: false, 
            fullname: 'Andrew', 
            status: 'I am a boss too', 
            location: {
                city: 'Kiev',
                country: 'Ukraine'
            }
        },
    ]);
    }
    return <div>
        {props.users.map(u => <div key={u.id} >
            <span>
                <div>
                    <img src={u.photoUrl} className={s.userPhoto} />
                </div>
                <div>
                    { u.followed 
                        ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button> 
                        :<button onClick={() => {props.follow(u.id)}}>Follow</button>
                    }
                </div>
            </span>
            <span>
                <span>
                    <div>{u.fullname}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
            </span>
            </div>
            )}
    </div>
}

export default Users;