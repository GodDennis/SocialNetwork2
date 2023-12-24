import s from "./Link.module.scss";

type LinkPropsType = {
    text: string;
    href: string;
};

function Link(props: LinkPropsType) {
    return (
        <a
            className={s.link}
            href={props.href}>
            {props.text}
        </a>
    );
}
export default Link;
