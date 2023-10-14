import { Logo } from "../../components/Logo/Logo";
import s from "../Header/Header.module.scss";

const Header = () => {
  return (
    <header className={s.container}>
      <Logo />
    </header>
  );
};

export default Header;
