import { connect } from "react-redux";
import {
    AddMessageAC,
    AddNewMessageTextAC,
    MessageActionTypes,
} from "../../../redux/message-reducer";
import { statePropsType } from "../../../types";
import { Dialogs } from "./Dialogs";

const MapStateToProps = (state: statePropsType) => {
    return {
        messagePage: state.messagePage,
    };
};
const MapDispatchToProps = (dispatch: (value: MessageActionTypes) => void) => {
    return {
        addNewMessage: () => {
            dispatch(AddMessageAC());
        },
        AddNewMessageText: (value: string) => {
            dispatch(AddNewMessageTextAC(value));
        },
    };
};

const DialogsContainer = connect(MapStateToProps, MapDispatchToProps)(Dialogs);

export default DialogsContainer;
