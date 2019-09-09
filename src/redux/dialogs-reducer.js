const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

export const dialogsReducer = (state, action) => {
    if(action.type === UPDATE_NEW_MESSAGE_TEXT) {
        state.newMessageText = action.newText;
    } else if(action.type === SEND_MESSAGE) {
        let text = state.newMessageText;
        state.newMessageText = '';
        state.messages.push({id:6, message: text});
    }
    return state;
}

export default dialogsReducer;