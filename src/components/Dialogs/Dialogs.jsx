import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {Redirect} from 'react-router-dom';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs
    .map( dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} /> );
    let messagesElements = props.state.messages
    .map( message => <Message message={message.message} key={message.id} id={message.id}/> );
    let newMessageText = props.state.newMessageText;
    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text);
    }

    if(!props.isAuth) return <Redirect to={'/login'}/>;

    return (
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    <div>{messagesElements}</div>
                    <div>
                        <div><textarea 
                            onChange={onMessageChange}
                            value={newMessageText} 
                            placeholder='Enter your message'></textarea></div>
                        <div><button onClick={ onSendMessageClick }>Send</button></div>
                    </div>
                </div>
            </div>
    )
}

export default Dialogs;