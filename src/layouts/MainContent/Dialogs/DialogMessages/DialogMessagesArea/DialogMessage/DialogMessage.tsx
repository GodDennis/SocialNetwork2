import { forwardRef, memo, useEffect, useState } from "react";
import { messageItemsPropsType } from "../../../../../../types";
import s from "./DialogMessage.module.scss";
import parse from "html-react-parser";
import { API } from "../../../../../../dal/api";
import nullPhoto from "../../../../../../assets/camera_200.png";
import { useSelector } from "react-redux";
import { FriendAvatarSelector, authIDSelector, profileSelector } from "../../../../../../selectors";

export const DialogMessage = memo(
    forwardRef<any, messageItemsPropsType>((props, firstMessageRef) => {
        const { AuthId, friendAvatar, ownerPhoto } = props;
        useEffect(() => {});
        return (
            <div
                ref={firstMessageRef}
                className={s.messageWrapper}>
                <img
                    className={s.userAvatar}
                    src={
                        AuthId !== props.senderID
                            ? (friendAvatar && friendAvatar) || nullPhoto
                            : (ownerPhoto && ownerPhoto) || nullPhoto
                    }
                    alt=''
                />
                <div>
                    <div className={s.userName}>{props.userName}</div>
                    <div className={s.message}>{props.message && parse(props.message)}</div>
                </div>
            </div>
        );
    })
);
