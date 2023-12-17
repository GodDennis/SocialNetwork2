export const authReducer = (
  state: authReducerStateType = { email: null, id: 0, login: null },

  action: ActionAuthReducerTypes
) => {
  switch (action.type) {
    case "SET-AUTH-ID": {
      {
        return action.Auth;
      }
    }
    default:
      return state;
  }
};

export type ActionAuthReducerTypes = SetProfileAuthID;

type SetProfileAuthID = ReturnType<typeof SetProfileAuthIDAC>;

export const SetProfileAuthIDAC = (Auth: authReducerStateType) => {
  return {
    type: "SET-AUTH-ID",
    Auth,
  } as const;
};

type authReducerStateType = {
  email: string | null;
  id: number | null;
  login: string | null;
};
