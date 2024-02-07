import { memo } from "react";
import { useSelector } from "react-redux";
import { Post } from "./Post";
import { postsSelector } from "../../../../selectors";

export const MappedPost = memo(() => {
    const posts = useSelector(postsSelector);
    return (
        <>
            {posts.map(el => {
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
