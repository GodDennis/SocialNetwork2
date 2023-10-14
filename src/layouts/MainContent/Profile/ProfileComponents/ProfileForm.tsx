import { log } from "console";
import { Btn } from "../../../../components/Btn/Btn";
import s from "./ProfileForm.module.scss";
import React, { useRef } from "react";

export const ProfileForm = () => {
  function loger() {
    console.log(area.current?.value);
  }
  let area = useRef<HTMLTextAreaElement | null>(null);

  return (
    <div className={s.formWrapper}>
      <form action="">
        <h2 className={s.createPost}>My posts</h2>
        <div className={s.flexWrapper}>
          <textarea
            ref={area}
            className={s.postArea}
            placeholder="Enter you text"
            name=""
            id=""></textarea>
          <Btn callback={loger} type="button" name="Send" />
        </div>
      </form>
    </div>
  );
};
