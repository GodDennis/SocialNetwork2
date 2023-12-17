import { memo } from "react";
import { useSelector } from "react-redux";
import { PostPropsType } from "../../../../types";
import { Post } from "./Post";
import { RootStoreType } from "../../../../redux/redux";

export const MappedPost = memo(() => {
  const posts = useSelector<RootStoreType, PostPropsType[]>(
    (state) => state.profilePage.posts
  );
  return (
    <>
      {posts.map((el) => {
        return (
          <Post
            key={el.id}
            src={el.src}
            fullName={el.fullName}
            post={el.post}
            time={el.time}
            like={el.like}
          />
        );
      })}
    </>
  );
});
