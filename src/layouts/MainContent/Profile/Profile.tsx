import { PostPropsType, ProfileInfoPropsType } from "../../../store";
import { Btn } from "../../../components/Btn/Btn";
import s from "./Profile.module.scss";
import { BackgroundImage } from "./ProfileComponents/BackgroundImage";
import { MappedPost } from "./ProfileComponents/MappedPost";
import { Post } from "./ProfileComponents/Post";
import { ProfileForm } from "./ProfileComponents/ProfileForm";
import { ProfileInfo } from "./ProfileComponents/ProfileInfo";

type ProfilePropsTyep = {
  profileInfo: ProfileInfoPropsType;
  posts: PostPropsType[];
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
      <ProfileForm />
      <MappedPost posts={props.posts} />
    </div>
  );
};
