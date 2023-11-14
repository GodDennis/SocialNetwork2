import { PostPropsType } from "../../../../store";
import { Post } from "./Post";

type MappedPostPropsType = {
  posts: PostPropsType[];
};

export const MappedPost = (props: MappedPostPropsType) => {
  return (
    <>
      {props.posts.map((el) => {
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
};
