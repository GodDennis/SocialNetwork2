import s from "./ImgLink.module.scss";

type ImgLinkPropsType = {
    name: string;
    src: string;
};

function ImgLink(props: ImgLinkPropsType) {
    return (
        <a href='https://apps.apple.com/ru/app/id564177498'>
            <img
                className={s[props.name]}
                src={props.src}
                alt='что-то пошло не так'
            />
        </a>
    );
}

export default ImgLink;
