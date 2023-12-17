import { unFollow } from "./../dal/api";
const initialState = { items: [], totalCount: 0, error: null, pageNumber: 1 };

export const userReducer = (
  state: dataType = initialState,
  action: ActionType
): dataType => {
  switch (action.type) {
    case "PUSH-USERS": {
      return {
        ...action.payload.data,
        items: state?.items
          ? [...state?.items, ...action.payload.data.items]
          : [...action.payload.data.items],
        pageNumber: action.payload.pageNumber,
      };
    }
    case "CLEANUP": {
      return initialState;
    }

    case "FOLLOW-USER": {
      return {
        ...state,
        items: [
          ...state.items.map((el) =>
            el.id.toString() === action.userID
              ? { ...el, followed: action.followed }
              : el
          ),
        ],
      };
    }
    case "UNFOLLOW-USER": {
      return {
        ...state,
        items: [
          ...state.items.map((el) =>
            el.id.toString() === action.userID
              ? { ...el, followed: action.followed }
              : el
          ),
        ],
      };
    }
    default:
      return state;
  }
};

type ActionType =
  | ReturnType<typeof pushUsersAC>
  | ReturnType<typeof cleanupAC>
  | ReturnType<typeof followAC>
  | ReturnType<typeof unFollowAC>;

export const pushUsersAC = (data: dataType, pageNumber: number) => {
  return {
    type: "PUSH-USERS",
    payload: {
      data,
      pageNumber,
    },
  } as const;
};
export const followAC = (userID: string) => {
  return {
    type: "FOLLOW-USER",
    followed: true,
    userID,
  } as const;
};
export const unFollowAC = (userID: string) => {
  return {
    type: "UNFOLLOW-USER",
    followed: false,
    userID,
  } as const;
};

export const cleanupAC = () => {
  return {
    type: "CLEANUP",
  } as const;
};

export type userType = {
  name: string;
  id: number;
  uniqueUrlName: null | string;
  photos: { small: null | string; large: null | string };
  status: null | string;
  followed: boolean;
};

export type dataType = {
  items: userType[] | [];
  totalCount: number;
  error: null | string | Error;
  pageNumber: number;
};
