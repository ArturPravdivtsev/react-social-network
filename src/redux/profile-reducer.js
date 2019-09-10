const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 1},
            {id: 2, message: "It's my first post", likesCount: 23},
            {id: 3, message: 'Blabla', likesCount: 11},
            {id: 4, message: "Dada", likesCount: 11}
        ],
        newPostText: "itkamasutra"
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5, 
                message: state.newPostText,
                likesCount: 0
            };
            state.newPostText = "";
            state.posts.push(newPost);
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default: 
            return state;
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (newText) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    }
}

export default profileReducer;