import { Route, Switch } from "react-router-dom";
import { Profile } from "./Profile/Profile";
import { Users } from "./Users/Users";
import { Message } from "./Message/Message";
import { Music } from "./Music/Music";
import { Settings } from "./Settings/Settings";
import s from "./MainContent.module.scss";

export const MainContent = () => {
  return (
    <div className={s.container}>
      <Switch>
        <Route exact path={"/"}>
          <Profile
          />
        </Route>
        <Route exact path={"/message"}>
          <Message />
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
