import ImgLink from './ImgLink/ImgLink';
import Link from './Link/Link';
import s from './Mobile.module.scss';

function Mobile() {
  return (
    <div className={s.MobilePromo__Content}>
      <h2 className={s.MobilePromo__slogan}>
        ВКонтакте для мобильных устройств
      </h2>
      <div className={s.MobilePromo__text}>
        Установите официальное мобильное приложение ВКонтакте и оставайтесь в
        курсе новостей ваших друзей, где бы вы ни находились.
      </div>
      <div className={s.img__wrapper}>
        <ImgLink
          name="upper"
          src="https://sun23-2.userapi.com/aS-mwyJ1zs_AXbaKWFwCScf5WAosUQbHpDYEbQ/CP23n993AyY.png"
        />
        <ImgLink
          name="lower"
          src="https://sun23-1.userapi.com/znUVrn03HYl3Iw0O_m-N5ht2kMtmcFb8I3HBiQ/hciP6yRUk08.png"
        />
      </div>

      <div className={s.nav}>
        <Link
          href="https://play.google.com/store/apps/details?id=com.vkontakte.android"
          text="Google Play"
        />
        <Link
          href="https://apps.rustore.ru/app/com.vkontakte.android"
          text="RuStore"
        />
        <Link
          href="https://itunes.apple.com/ru/app/id564177498"
          text="App Store"
        />
      </div>
    </div>
  );
}
export default Mobile;
