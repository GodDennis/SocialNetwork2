import { Dispatch } from "redux";
import { API, MessagesItemType, ResponseDialogsType } from "../dal/api";
import { messageInfoType, messagePagePropsType } from "../types";

const messagePage = {
    dialogsUsers: [],
    messageInfo: { items: [], totalCount: 0 },
    newMessageText: "",
    friendAvatar: null,
    currentFriendId: null,
    ownerAvatar: null,
    friendName: "",
    setScrollBarDown: true,
} as messagePagePropsType;

export const meessageReducer = (
    state: messagePagePropsType = messagePage,
    action: MessageActionTypes
) => {
    switch (action.type) {
        case "ADD-MESSAGE": {
            let newMessage = {
                addedAt: action.payload.addedAt,
                body: action.payload.body,
                id: action.payload.id,
                recipientId: action.payload.recipientId,
                senderId: action.payload.senderId,
                senderName: action.payload.senderName,
                translatedBody: action.payload.translatedBody,
                viewed: action.payload.viewed,
            };

            return {
                ...state,
                messageInfo: {
                    ...state.messageInfo,
                    items: [...state.messageInfo.items, newMessage],
                },
            };
        }
        case "SET-DIALOGS-LIST": {
            return { ...state, dialogsUsers: action.data };
        }
        case "SET-MESSAGES": {
            return {
                ...state,
                messageInfo: {
                    ...state.messageInfo,
                    items: [...action.data.items, ...state.messageInfo?.items],
                    totalCoung: action.data.totalCount,
                },
            };
        }
        case "SAVE-AVATAR": {
            return { ...state, friendAvatar: action.img };
        }
        case "SAVE-OWNER-AVATAR": {
            return { ...state, ownerAvatar: action.img };
        }
        case "SAVE-NAME": {
            return { ...state, friendName: action.name };
        }
        case "SET-SCROLL-BAR-DOWN": {
            return { ...state, setScrollBarDown: action.value };
        }
        case "SET-TOTAL-COUNT": {
            return { ...state, messageInfo: { ...state.messageInfo, totalCount: action.count } };
        }
        case "CLEAN-MESSAGE": {
            return { ...state, messageInfo: { items: [], totalCount: 0 } };
        }
        default:
            return { ...state };
    }
};

export type MessageActionTypes =
    | AddMessage
    | SetDialogsList
    | SetMessages
    | AvatarFromUserMessageBar
    | OwnerAvatar
    | UserNameFromUserMessageBar
    | CleanMessage
    | setScrollBarDown
    | SetTotalCount;

type AddMessage = ReturnType<typeof SendMessageAC>;
type SetDialogsList = ReturnType<typeof SetDialogsListAC>;
type SetMessages = ReturnType<typeof SetMessagesAC>;
type AvatarFromUserMessageBar = ReturnType<typeof AvatarFromUserMessageBarAC>;
type UserNameFromUserMessageBar = ReturnType<typeof UserNameFromUserMessageBarAC>;
type OwnerAvatar = ReturnType<typeof OwnerAvatarAC>;
type CleanMessage = ReturnType<typeof CleanMessageAC>;
type setScrollBarDown = ReturnType<typeof setScrollBarDownAC>;
type SetTotalCount = ReturnType<typeof SetTotalCountAC>;

export const SetDialogsListAC = (data: ResponseDialogsType[]) => {
    return {
        type: "SET-DIALOGS-LIST",
        data,
    } as const;
};
export const SetMessagesAC = (data: messageInfoType) => {
    return {
        type: "SET-MESSAGES",
        data,
    } as const;
};
export const SetTotalCountAC = (count: number) => {
    return {
        type: "SET-TOTAL-COUNT",
        count,
    } as const;
};
export const setScrollBarDownAC = (value: boolean) => {
    return {
        type: "SET-SCROLL-BAR-DOWN",
        value,
    } as const;
};
export const CleanMessageAC = () => {
    return {
        type: "CLEAN-MESSAGE",
    } as const;
};

export const SendMessageAC = (body: MessagesItemType) => {
    return {
        type: "ADD-MESSAGE",
        payload: {
            ...body,
        },
    } as const;
};
export const AvatarFromUserMessageBarAC = (img: string | null) => {
    return {
        type: "SAVE-AVATAR",
        img,
    } as const;
};
export const UserNameFromUserMessageBarAC = (name: string) => {
    return {
        type: "SAVE-NAME",
        name,
    } as const;
};
export const OwnerAvatarAC = (img: string | null) => {
    return {
        type: "SAVE-OWNER-AVATAR",
        img,
    } as const;
};

export const OwnerAvatarTC = (AuthId: number) => async (dispatch: Dispatch) => {
    const res = await API.getProfileInfo(AuthId);
    dispatch(OwnerAvatarAC(res.data.photos.small));
};

export const SetDialogsListTC = () => async (dispatch: Dispatch) => {
    const res = await API.getDialogsList();
    dispatch(SetDialogsListAC(res.data));
};
export const SetMessagesTC = (userId: number, page: number) => async (dispatch: Dispatch) => {
    const res = await API.getDialog(userId, page);
    dispatch(SetMessagesAC(res.data));
    dispatch(SetTotalCountAC(res.data.totalCount));
};
export const SendMessageTC = (userId: number, body: string) => async (dispatch: Dispatch) => {
    const res = await API.sendMessage(userId, body);
    dispatch(SendMessageAC(res.data.data.message));
};
