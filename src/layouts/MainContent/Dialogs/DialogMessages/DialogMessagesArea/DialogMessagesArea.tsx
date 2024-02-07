import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { MessagesItemType } from "../../../../../dal/api";
import { DialogMessage } from "./DialogMessage/DialogMessage";
import s from "./DialogMessagesArea.module.scss";
import {
    FriendAvatarSelector,
    authIDSelector,
    isAddedSelector,
    ownerPhotoSelector,
    setScrollBarDownSelector,
} from "../../../../../selectors";
import {
    OwnerAvatarTC,
    SetIsAddedAC,
    setScrollBarDownAC,
} from "../../../../../redux/message-reducer";
import { useAppDispatch } from "../../../../../redux/redux";
import { useInView } from "react-intersection-observer";

type DialogMessagesArea = {
    totalPage: number;
    page: number;
    messageItems: MessagesItemType[];
    setPageHandler: (page: number) => void;
    id: string;
};

export const DialogMessagesArea = (props: DialogMessagesArea) => {
    const isAdded = useSelector(isAddedSelector);
    const firstMessageRef = useRef<HTMLDivElement>(null);
    const divRef = useRef<HTMLDivElement>(null);
    const friendAvatar = useSelector(FriendAvatarSelector);
    const AuthId = useSelector(authIDSelector);
    const ownerPhoto = useSelector(ownerPhotoSelector);
    const setScrollBarDown = useSelector(setScrollBarDownSelector);
    const dispatch = useAppDispatch();
    const { ref, inView, entry } = useInView({
        threshold: 1,
    });

    useEffect(() => {
        AuthId && dispatch(OwnerAvatarTC(AuthId));
    }, [AuthId]);

    useEffect(() => {
        if (inView === true) {
            props.setPageHandler(props.page + 1);
            if (props.totalPage !== props.page) firstMessageRef.current?.scrollIntoView();
        }
    }, [inView]);

    useEffect(() => {
        if (props.messageItems.length > 0 && setScrollBarDown) {
            divRef.current?.scrollIntoView();
            dispatch(setScrollBarDownAC(false));
        }
        if (isAdded) {
            divRef.current?.scrollIntoView();
            dispatch(SetIsAddedAC(false));
        }
    }, [props.messageItems]);

    const messages = props.messageItems.map((el, i, arr) => {
        return el !== arr[0] ? (
            <DialogMessage
                ref={null}
                key={el.id}
                id={el.id}
                message={el.body}
                userName={el.senderName}
                senderID={el.senderId}
                ownerPhoto={ownerPhoto}
                friendAvatar={friendAvatar}
                AuthId={AuthId}
            />
        ) : (
            <DialogMessage
                ref={firstMessageRef}
                key={el.id}
                id={el.id}
                message={el.body}
                userName={el.senderName}
                senderID={el.senderId}
                ownerPhoto={ownerPhoto}
                friendAvatar={friendAvatar}
                AuthId={AuthId}
            />
        );
    });
    return (
        <div className={s.messagesWrapper}>
            <div ref={ref}></div>
            {messages}
            <div ref={divRef}></div>
        </div>
    );
};
