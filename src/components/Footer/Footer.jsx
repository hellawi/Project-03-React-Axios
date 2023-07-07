import { useTranslation } from "react-i18next";
import "./Footer.scss";
function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="footer-distributed">
      <div className="footer-left">

        <a href="#">
          <img src="./public/logo.jpg" alt="" className="logo-f" />
        </a>
        
        <p className="footer-company-name">
          CoinMarketCrypto
          <br />
          {t("vseprava")} © 2023
        </p>
      </div>

      <div className="footer-center">
        <div>
          <svg
            className="svg"
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 320 512"
          >
            <path d="M16 144a144 144 0 1 1 288 0A144 144 0 1 1 16 144zM160 80c8.8 0 16-7.2 16-16s-7.2-16-16-16c-53 0-96 43-96 96c0 8.8 7.2 16 16 16s16-7.2 16-16c0-35.3 28.7-64 64-64zM128 480V317.1c10.4 1.9 21.1 2.9 32 2.9s21.6-1 32-2.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32z" />
          </svg>
          <a href="">
            <p>
              <span>{t("address01")}</span> <span className="address02">{t("address02")}</span>
            </p>
          </a>
        </div>

        <div>
          <div className="c-01">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg"
              alt=""
              className="logo-country"
            />
            <p className="p-country">{t("numeng")} </p>
            <a href="tel:+441163787196" className="number">
              <p> +44 116 378 7196</p>
            </a>
          </div>

          <div className="c-01">
            <img
              src="https://storage.googleapis.com/multi-static-content/previews/artage-io-thumb-936ac0f7174a1cdff422f7278a8c7a5d.svg"
              alt=""
              className="logo-country"
            />
            <p className="p-country">{t("numukr")} </p>
            <a href="tel:+380999286105" className="number">
              <p> +380 99 928 61 05</p>
            </a>
          </div>

          <div className="c-01">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAHlBMVEX///8AlW7VJhIAj2UAmHF7ZUjbHwrTCQDuxcKz2MtCYHiNAAAA+0lEQVR4nO3QsQGCABAAsUdQcP+F7f8q+2SEzAAAAAAAAAAAAAAAAAAAAAD86cs2J9scbE7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOai62ebPNh21ebE7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOam62edh+KIroCe6RhJEAAAAASUVORK5CYII="
              alt=""
              className="logo-country"
            />
            <p className="p-country">{t("numbg")} </p>
            <a href="tel:+359878489531" className="number">
              <p> +359 87 848 9531</p>
            </a>
          </div>

          <div className="c-01">
            <img
              src="https://freesvg.org/img/Flag_of_Germany.png"
              alt=""
              className="logo-country"
            />
            <p className="p-country">{t("numde")} </p>
            <a href="tel:+49308934421" className="number">
              <p> +49 30 893 4421</p>
            </a>
          </div>

          <div className="c-01">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ0AAAC8CAMAAABVLQteAAAAe1BMVEX////cFDz+9/jdFj/cETrz8/PX19fXS2HZ4eDcCjjIyMjL1dTcADPc3Nzw8PDQ0NDdAC7n5+fdADLdAC35+fnS2tno7OvIzMzQkZry8vLg4ODFxcXZN1TVZnbQlZ3VY3XJvsDShJDRipXXVmvYQ1zbJUjLsrbVbHvUdIN6H4duAAACn0lEQVR4nO3dy27aQBhA4UnBiRlfAMeQYHInSfv+T1gMoZykUbu0pTnfAmTJi19HnjGrIYSzbNlVl2mpuuUmfKOttvOurrO01HU331bt1xhVXH7XKAldrD5dt7EbaJJxqGJ2vtjEerhJRqHe/imQbbN/3ZmEc4Pkn4zeJh6/L9PeM066y/4zi0PPMRKHJTJ3nRwt5/3LdegpRiO2YVn9/7ZEVMtQuVBO6irM//qRnqx23i8WfYjBTfTMGmQNsgZZg6xB1iBrkDXIGmQNsgZZg6xB1iBrkDXIGmQNsgZZg6xB1iBrkDXIGmQNsgZZg6xB1iBrkDXIGmQNsgZZg6xB1iBrkDXIGmQNsgZZg6xB1iBrkDXIGmQNsgZZg6xB1iBrkDXIGmQNsgZZg6xB1iBrkDXIGmQNsgZZg6xB1iBrkDXIGmQNsgZZg6xB+xo/dBJDMZvoaFaEopnqqNnXKKcX6k1La5xZg6xB1iBrkDXIGmQNsgZZg6xB1iBrkDXIGmQNsgZZg6xB1iBrkDXIGmQNsgZZg6xB1iBrkDXIGmQNsgZZg6xB1iBrkDXIGmQNsgZZg6xB1iBrkDXIGmQNsgZZg6xB1iBrkDXIGmQNsgZZg6xB1iBrkDXIGmQNsgZZg6xB1iBrkDXIGmQNsgZZg6xB1qBDjcnQU4zGpAiru9nQU4zE7G4V8ntrHJX3eVg/NEOPMRKLh3Votwu30d50EdsQVo/l0IOMQr9QQtg8+XD0mqesP8V79bwYepIRWLzkx0PNiyvXSrkrPo54z25eU3+vlK832enE+83N7nroeQZ1vTvH2D8dxe20SXUvnTYXt0X76Q8R8vj8dt2Us9SUzWLyHPOv/w/R5sX7y8/dVVoef92+F3n7NcZhvazz9KyxYYTfVG+pUtTrL/QAAAAASUVORK5CYII="
              alt=""
              className="logo-country"
            />
            <p className="p-country">{t("numpl")} </p>
            <a href="tel:+48238719836" className="number">
              <p> +48 23 871 98 36</p>
            </a>
          </div>

          <div className="c-01">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/2560px-Flag_of_Spain.svg.png"
              alt=""
              className="logo-country"
            />
            <p className="p-country">{t("numes")} </p>
            <a href="tel:+34346845168" className="number">
              <p> +34 346 845 168</p>
            </a>
          </div>
        </div>

        <div className="email">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
          >
            <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
          </svg>
          <p>
            <a href="mailto:global@cmc.eu" className="email-link">
              global@cmc.eu
            </a>
          </p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>{t('abouth')}</span>
          {t('about')}
        </p>

        <div className="footer-icons">
          <a href="https://facebook.com">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
            >
              <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
            </svg>
          </a>
          <a href="https://instagram.com">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>
          </a>
          <a href="twitter.com">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
            >
              <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
            </svg>
          </a>
          <a href="github.com">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 496 512"
            >
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
