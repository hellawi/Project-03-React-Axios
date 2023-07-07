import { useEffect, useState } from "react";
import "./index.scss";
import axios from "axios";
import CurrencyList from "./components/CurrencyList";
import SearchBar from "./components/SearchBar/SearchBar";
import Loading from "./components/Loading";
import Header from "./components/Header";
import Boxes from "./components/Boxes";
import Currencies2 from "./components/Currencies2";
import { useTranslation } from "react-i18next";

function App() {
  const [currencies, setCurrencies] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)
  const { t } = useTranslation()
  useEffect(() => {
    setLoading(true);
    setError(null)
    axios
      .get("https://api.coinlore.net/api/tickers/")
      .then((res) => {
        setCurrencies(res.data.data);
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  

  const filteredCurrencies = currencies.filter((currency) => {
    if (currency.symbol.includes(query)) {
      return true;
    } else {
      return false;
    }
  });

  return (
    <div>
      {error && <p>{error}</p>}
      {loading && (
        <div className="background">
          <div className="spinner">
            <Loading />
          </div>
        </div>
      )}
      <Header />
      
      <main>
        <Boxes currencies={currencies}/>

        <div className="currencies-start">
          <div className="currency-heading">
            <h1 className="currency-heading-h1">{t('currencyH')}</h1>
          </div>
          <SearchBar
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>

        <Currencies2 />
      </main>
      <CurrencyList currencies={filteredCurrencies} />
    </div>
  );
}
export default App;
