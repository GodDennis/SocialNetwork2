import { connect } from "react-redux";
import {
  AddMessageAC,
  AddNewMessageTextAC,
  ActionMessageReducerTypes,
} from "../../../redux/message-reducer";
import { statePropsType } from "../../../store";
import { Dialogs } from "./Dialogs";

const MapStateToProps = (state: statePropsType) => {
  return {
    messagePage: state.messagePage,
  };
};
const MapDispatchToProps = (
  dispatch: (value: ActionMessageReducerTypes) => void
) => {
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
