import Dialogs from "./Dialogs";
import { SendMessage_ActionCreator } from "../../ReduxStore/DialogReducer";
import { connect } from "react-redux";




const mapStateToProps = (state) => {
    return {
        users: state.DialogState.users,
        messages: state.DialogState.messages,
        messageValue: state.DialogState.messageValue,
        isAuth: state.AuthState.isAuth
    };
};
const mapDispatchtoProps = (dispatch) => {
    return {
        SendMessage: (message) => dispatch(SendMessage_ActionCreator(message)),
    };
};


// Creatin and Exporting DialogContainer
export default connect(mapStateToProps, mapDispatchtoProps)(Dialogs);