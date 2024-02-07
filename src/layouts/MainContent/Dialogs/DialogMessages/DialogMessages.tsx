import { AddMessageBar } from "../../../../components/AddMessageBar/AddMessageBar";
import { DialogMessagesArea } from "./DialogMessagesArea/DialogMessagesArea";
import s from "./DialogMessages.module.scss";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../../redux/redux";
import { SendMessageTC, SetMessagesTC } from "../../../../redux/message-reducer";
import { DialogUserBar } from "./DialogUserBar/DialogUserBar";
import {
    messageItemsSelector,
    newMessageTxtSelector,
    totalCountSelector,
} from "../../../../selectors";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { DialogScreen } from "./DialogScreen/DialogScreen";

const paginationUtils = (totalCount: number) => {
    const totalCountRes = Math.floor(totalCount / 15);
    return totalCount / totalCountRes === 1 ? totalCountRes : totalCountRes + 1;
};

export const DialogMessages = () => {
    const { id } = useParams();

    const dispatch = useAppDispatch();
    const newMessageTxt = useSelector(newMessageTxtSelector);
    const messageItems = useSelector(messageItemsSelector);
    const totalCount = useSelector(totalCountSelector);
    const [page, setPage] = useState(1);
    const totalPage = paginationUtils(totalCount);

    useEffect(() => {
        id && dispatch(SetMessagesTC(+id, 1));
        setPage(1);
    }, [id]);

    const add = (newMessage: string) => {
        id && dispatch(SendMessageTC(+id, newMessage));
    };

    const setPageHandler = (page: number) => {
        if (totalPage >= page) {
            setPage(page);
            id && dispatch(SetMessagesTC(+id, page));
        }
    };

    if (!id) return <DialogScreen />;
    return (
        <div className={s.DialogMessages}>
            <DialogUserBar />
            <DialogMessagesArea
                page={page}
                totalPage={totalPage}
                setPageHandler={setPageHandler}
                id={id}
                messageItems={messageItems}
            />
            <AddMessageBar
                className={s.DialogInput}
                newMessageTxt={newMessageTxt}
                placeholder='Напишите сообщение...'
                add={add}
            />
        </div>
    );
};
