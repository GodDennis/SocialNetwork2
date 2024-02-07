import { MessagesItemType, ResponseDialogsType } from "./dal/api";
import { RootStoreType } from "./redux/redux";
import { userType } from "./redux/users-reducer";
import { PostPropsType, profileType } from "./types";

export const isAuthSelector = (state: RootStoreType): boolean => state.auth.isAuth;
export const authIDSelector = (state: RootStoreType): number | null => state.auth.id;
export const initializedSelector = (state: RootStoreType): boolean => state.app.initialized;
export const usersSelector = (state: RootStoreType): userType[] => state.usersPage.items;
export const pageSelector = (state: RootStoreType): number => state.usersPage.pageNumber;
export const isFetchingSelector = (state: RootStoreType): boolean => state.usersPage.isFetching;
export const newMessageTxtSelector = (state: RootStoreType): string =>
    state.messagePage.newMessageText;
export const messageItemsSelector = (state: RootStoreType): MessagesItemType[] =>
    state.messagePage.messageInfo.items;
export const totalCountSelector = (state: RootStoreType): number =>
    state.messagePage.messageInfo.totalCount;
export const dialogUsersSelector = (state: RootStoreType): ResponseDialogsType[] =>
    state.messagePage.dialogsUsers;
export const postsSelector = (state: RootStoreType): PostPropsType[] => state.profilePage.posts;
export const newPostTextSelector = (state: RootStoreType): string => state.profilePage.newPostText;
export const profileSelector = (state: RootStoreType): profileType => state.profilePage.profileInfo;
export const FriendAvatarSelector = (state: RootStoreType): string | null =>
    state.messagePage.friendAvatar;
export const ownerPhotoSelector = (state: RootStoreType): string | null =>
    state.messagePage.ownerAvatar;
export const DialogfriendName = (state: RootStoreType): string | null =>
    state.messagePage.friendName;
export const setScrollBarDownSelector = (state: RootStoreType): boolean =>
    state.messagePage.setScrollBarDown;
