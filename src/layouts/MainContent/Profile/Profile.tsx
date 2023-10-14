import { Btn } from "../../../components/Btn/Btn";
import s from "./Profile.module.scss";
import { BackgroundImage } from "./ProfileComponents/BackgroundImage";
import { Post } from "./ProfileComponents/Post";
import { ProfileForm } from "./ProfileComponents/ProfileForm";
import { ProfileInfo } from "./ProfileComponents/ProfileInfo";

export const Profile = () => {
  return (
    <div>
      <BackgroundImage />
      <ProfileInfo
        birthday={"26 Feb"}
        fullName={"Dennis P"}
        country={"Belarus, Minsk"}
        education={"BNTU"}
        webSite={"git"}
      />
      <ProfileForm />
      <Post
        src="https://sun9-75.userapi.com/impg/teTw8UF6zBSgt_IvJzVz-wvsKQwNWQupF25QUg/jl790zKnAaM.jpg?size=1200x1600&quality=96&sign=278ffd6e454d0a67972d1ef3387635be&type=album"
        fullName="Dennis Podreckiy"
        post="Какой-то пост"
        time={"TODO Time"}
        like={3}
      />
      <Post
        src="https://sun9-75.userapi.com/impg/teTw8UF6zBSgt_IvJzVz-wvsKQwNWQupF25QUg/jl790zKnAaM.jpg?size=1200x1600&quality=96&sign=278ffd6e454d0a67972d1ef3387635be&type=album"
        fullName="Dennis Podreckiy"
        post="Какой-то пост 2"
        time={"TODO Time"}
        like={""}
      />
    </div>
  );
};
