import { useEffect, useState } from "react";
import "../index.scss";
import axios from "axios";
// import CurrencyList from "./components/CurrencyList";
import CurrencyList from '../CurrencyList'
import SearchBar from '../SearchBar/SearchBar'
import Loading from "../Loading";
import Header from "../Header";
import Boxes from "../Boxes";
import Currencies2 from "../Currencies2";
import { useTranslation } from "react-i18next";
import { Alert } from "@mui/material";
import TypewriterComponent from "typewriter-effect";

function Home() {
    const [currencies, setCurrencies] = useState([]);
    const [query, setQuery] = useState('')
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { t } = useTranslation();
    const writerDelay = 999999;

    useEffect(() => {
        setLoading(true);
        setError(null);
        axios
          .get("https://api.coinlore.net/api/tickers/")
          .then((res) => {
            setCurrencies(res.data.data);
          })
          .catch((error) => setError(error.message))
          .finally(() => setLoading(false));
      }, []);
    
      const filteredCurrencies = currencies.filter((currency) => {
        if (currency.symbol.includes(query.toUpperCase())) {
          return true;
        } else {
          return false;
        }
      });

    return (
    <div>
      {error && (
      <Alert severity='error'>
        Network Error! Сheck your internet connection. If that doesn't work,
        try again later - we're having problems on the server.
      </Alert>
      )}
      {loading && (
        <div className="background">
          <div className="spinner">
            <Loading />
          </div>
        </div>
      )}
      <Header />

      <main>
        <section className="hero">
          <div className="container">
            <h1 className="hero_title">
                <TypewriterComponent 
                onInit={(typewriter) => {
                typewriter.typeString(t('openc'))
                .callFunction(() => {
                  console.log('Done!')
                })
                .pauseFor(writerDelay)
                .deleteAll()
                .callFunction(() => {
                  console.log("Cleaned!")
                })
                .start()
              }}
              />
            </h1>
            <button className="curr-btn">
              <a href="#currencies" className="curr-link">
                {t('currhe')}
              </a>
            </button>
          </div>
        </section>
        <Boxes currencies={currencies} />

        <div className="currencies-start">
          <div className="currency-heading">
            <h1 className="currency-heading-h1">{t("currencyH")}</h1>
          </div>
          <SearchBar
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
        
        <Currencies2 id="currencies" />
      </main>
      <CurrencyList currencies={filteredCurrencies} />
    </div>
  )
}

export default Home