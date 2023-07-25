import { useTranslation } from "react-i18next"
import { currencyIcons } from "./CurrencyListItem/currencyicons";

function Boxes({ currencies }) {
  const { t } = useTranslation()

  // growth leaders && fall leaders
  const sortedCurrenciesMinus = currencies.slice().sort((currencyA, currencyB) => {
    if (+currencyA.percent_change_24h < +currencyB.percent_change_24h) {
      return -1;
    } else {
      return 1;
    }
  });

  const sortedCurrenciesPlus = currencies.slice().sort((currencyA, currencyB) => {
    if (+currencyA.percent_change_24h > +currencyB.percent_change_24h) {
      return -1;
    } else {
      return 1;
    }
  });
  return (
    <div>
      {currencies.length > 0 && <div className="boxes">
          <div className="box">
            <div className="headings">
              <img
                src="/trending-nd.png"
                alt="fire"
                className="trending-img"
              />
              <h1 className="trending-heading">{t('trending')}</h1>
            </div>
            <ul className="list">
              <li className="list-item">
                <p className="list-item-number">1</p>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/800px-Bitcoin.svg.png"
                  alt="eos"
                  className="list-item-img"
                />
                <p className="list-item-nameCurrency">BTC</p>
                <p className="list-item-priceUsd">30186,39 $</p>
              </li>

              <li className="list-item">
                <p className="list-item-number">18</p>
                <img src="https://cryptologos.cc/logos/shiba-inu-shib-logo.png" alt="" className="list-item-img" />
                <p className="list-item-nameCurrency">SHIB</p>
                <p className="list-item-priceUsd">23,47 $</p>
              </li>

              <li className="list-item">
                <p className="list-item-number">59</p>
                <img src="https://icodrops.com/wp-content/uploads/2017/12/oCw2s3GI_400x400.jpg" alt="" className="list-item-img" />
                <p className="list-item-nameCurrency">CRO</p>
                <p className="list-item-priceUsd">0,96 $</p>
              </li>

              <li className="list-item">
                <p className="list-item-number">75</p>
                <img src="https://cryptologos.cc/logos/huobi-token-ht-logo.png" alt="" className="list-item-img" />
                <p className="list-item-nameCurrency">HT</p>
                <p className="list-item-priceUsd">1,84 $</p>
              </li>
            </ul>
          </div>

          <div className="box">
            <div className="headings">
              <div className="triangle"></div>
              <h1 className="trending-heading">{t('fall')}</h1>
            </div>
            <ul className="list">
              <li className="list-item">
                <p className="list-item-number">{sortedCurrenciesMinus[0].rank}</p>
                <img
                  src={currencyIcons[sortedCurrenciesMinus[0].symbol]}
                  alt="eos"
                  className="list-item-img"
                />
                <p className="list-item-nameCurrency">{sortedCurrenciesMinus[0].symbol}</p>
                <p className="list-item-priceUsd">{sortedCurrenciesMinus[0].percent_change_24h} %</p>
              </li>

              <li className="list-item">
                <p className="list-item-number">{sortedCurrenciesMinus[1].rank}</p>
                <img src={currencyIcons[sortedCurrenciesMinus[1].symbol]} alt="" className="list-item-img" />
                <p className="list-item-nameCurrency">{sortedCurrenciesMinus[1].symbol}</p>
                <p className="list-item-priceUsd">{sortedCurrenciesMinus[1].percent_change_24h} %</p>
              </li>

              <li className="list-item">
                <p className="list-item-number">{sortedCurrenciesMinus[2].rank}</p>
                <img src={currencyIcons[sortedCurrenciesMinus[2].symbol]} alt="" className="list-item-img" />
                <p className="list-item-nameCurrency">{sortedCurrenciesMinus[2].symbol}</p>
                <p className="list-item-priceUsd">{sortedCurrenciesMinus[2].percent_change_24h} %</p>
              </li>
              
              <li className="list-item">
                <p className="list-item-number">{sortedCurrenciesMinus[3].rank}</p>
                <img src={currencyIcons[sortedCurrenciesMinus[3].symbol]} alt="" className="list-item-img" />
                <p className="list-item-nameCurrency">{sortedCurrenciesMinus[3].symbol}</p>
                <p className="list-item-priceUsd">{sortedCurrenciesMinus[3].percent_change_24h} %</p>
              </li>

              
            </ul>
          </div>

          <div className="box">
            <div className="headings">
              <div className="triangle-02"></div>
              <h1 className="trending-heading">{t('growth')}</h1>
            </div>
            <ul className="list">
            <li className="list-item">
                <p className="list-item-number">{sortedCurrenciesPlus[0].rank}</p>
                <img src={currencyIcons[sortedCurrenciesPlus[0].symbol]} alt="" className="list-item-img" />
                <p className="list-item-nameCurrency">{sortedCurrenciesPlus[0].symbol}</p>
                <p className="list-item-priceUsd">{sortedCurrenciesPlus[0].percent_change_24h} %</p>
            </li>

            <li className="list-item">
                <p className="list-item-number">{sortedCurrenciesPlus[1].rank}</p>
                <img src={currencyIcons[sortedCurrenciesPlus[1].symbol]} alt="" className="list-item-img" />
                <p className="list-item-nameCurrency">{sortedCurrenciesPlus[1].symbol}</p>
                <p className="list-item-priceUsd">{sortedCurrenciesPlus[1].percent_change_24h} %</p>
            </li>

            <li className="list-item">
                <p className="list-item-number">{sortedCurrenciesPlus[2].rank}</p>
                <img src={currencyIcons[sortedCurrenciesPlus[2].symbol]} alt="" className="list-item-img" />
                <p className="list-item-nameCurrency">{sortedCurrenciesPlus[2].symbol}</p>
                <p className="list-item-priceUsd">{sortedCurrenciesPlus[2].percent_change_24h} %</p>
            </li>

            <li className="list-item">
                <p className="list-item-number">{sortedCurrenciesPlus[3].rank}</p>
                <img src={currencyIcons[sortedCurrenciesPlus[3].symbol]} alt="" className="list-item-img" />
                <p className="list-item-nameCurrency">{sortedCurrenciesPlus[3].symbol}</p>
                <p className="list-item-priceUsd">{sortedCurrenciesPlus[3].percent_change_24h} %</p>
            </li>
            </ul>
          </div>
        </div>}
        
    </div>
  )
}

export default Boxes