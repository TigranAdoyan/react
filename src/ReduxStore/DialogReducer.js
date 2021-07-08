// Defining Action Types
const SEND_MESSAGE = "SEND_MESSAGE";


// Default State
const defaultState = {
    users: [
        { id: 1, name: "Tigran" },
        { id: 2, name: "Gagik" },
        { id: 3, name: "Lernik" },
        { id: 4, name: "Armine" },
    ],
    messages: [
        { id: 1, message: "Hello World" },
        { id: 2, message: "Welcome to Armenia" }
    ],
    messageValue: "New Message"
};

// Creating and Exporting Reducer
export default function DialogReducer(state = defaultState, action) {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, { id: state.messages.length + 1, message: action.message }],
                messageValue: "",
            };
        default:
            return state;
    };
};

// Exporting Action Creators
export const SendMessage_ActionCreator = (message) => ({ type: SEND_MESSAGE, message });