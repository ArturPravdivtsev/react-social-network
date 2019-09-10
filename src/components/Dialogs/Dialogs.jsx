import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { updateNewMessageTextActionCreator, sendMessageActionCreator } from '../../redux/dialogs-reducer';

const Dialogs = (props) => {

    //let state = props.getState().dialogsPage;

    let dialogsElements = props.state.dialogs
    .map( dialog => <DialogItem name={dialog.name} id={dialog.id} /> );
    let messagesElements = props.state.messages
    .map( message => <Message message={message.message} id={message.id}/> );
    let newMessageText = props.state.newMessageText;
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator());
    }
    let onMessageChange = (e) => {
        let text = e.target.value;
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    }

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