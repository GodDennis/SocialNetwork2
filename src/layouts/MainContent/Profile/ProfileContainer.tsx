import { connect } from "react-redux";
import { Profile } from "./Profile";
import { statePropsType } from "../../../store";
import {
  ActionPostReducerTypes,
  AddNewPostTextAC,
  AddPostAC,
} from "../../../redux/post-reducer";

const MapStateToProps = (state: statePropsType) => {
  return {
    profilePage: state.profilePage,
    posts: state.profilePage.posts,
    profileInfo: state.profilePage.profileInfo,
    newPostText: state.profilePage.newPostText,
  };
};
const MapDispatchToProps = (
  dispatch: (action: ActionPostReducerTypes) => void
) => {
  return {
    addNewPost: () => {
      dispatch(AddPostAC());
    },
    addNewPostText: (value: string) => {
      dispatch(AddNewPostTextAC(value));
    },
  };
};

const ProfileContainer = connect(MapStateToProps, MapDispatchToProps)(Profile);

export default ProfileContainer;
