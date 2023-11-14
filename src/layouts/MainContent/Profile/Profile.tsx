import { PostPropsType, ProfileInfoPropsType } from "../../../store";
import { BackgroundImage } from "./ProfileComponents/BackgroundImage";
import { MappedPost } from "./ProfileComponents/MappedPost";
import { ProfileForm } from "./ProfileComponents/ProfileForm";
import { ProfileInfo } from "./ProfileComponents/ProfileInfo";
import s from "./Profile.module.scss";

type ProfilePropsTyep = {
  profileInfo: ProfileInfoPropsType;
  posts: PostPropsType[];
  newPostText: string;
  addNewPost: () => void;
  addNewPostText: (value: string) => void;
};

export const Profile = (props: ProfilePropsTyep) => {
  return (
    <div>
      <BackgroundImage />
      <ProfileInfo
        src={props.profileInfo.src}
        birthday={props.profileInfo.birthday}
        fullName={props.profileInfo.fullName}
        country={props.profileInfo.country}
        education={props.profileInfo.education}
        webSite={props.profileInfo.webSite}
      />
      <ProfileForm
        newPostText={props.newPostText}
        addNewPost={props.addNewPost}
        addNewPostText={props.addNewPostText}
      />
      <MappedPost posts={props.posts} />
    </div>
  );
};
