import { Route, Switch } from "react-router-dom";
import { Profile } from "./Profile/Profile";
import { Users } from "./Users/Users";

import { Music } from "./Music/Music";
import { Settings } from "./Settings/Settings";
import s from "./MainContent.module.scss";
import { StorePropsType, store } from "../../store";
import { Dialogs } from "./Dialogs/Dialogs";

type mainContentPropsType = {
  store: StorePropsType;
};

export const MainContent = (props: mainContentPropsType) => {
  return (
    <div className={s.container}>
      <Switch>
        <Route exact path={"/"}>
          <Profile
            profileInfo={props.store.getState().profilePage.profileInfo}
            posts={props.store.getState().profilePage.posts}
          />
        </Route>
        <Route exact path={"/message"}>
          <Dialogs
            messagePage={props.store.getState().messagePage}
            addPost={props.store.addPost.bind(store)}
            addNewMessageTxt={props.store.addNewMessageTxt.bind(store)}
          />
        </Route>
        <Route exact path={"/users"}>
          <Users />
        </Route>
        <Route exact path={"/music"}>
          <Music />
        </Route>
        <Route exact path={"/settings"}>
          <Settings />
        </Route>
      </Switch>
    </div>
  );
};
