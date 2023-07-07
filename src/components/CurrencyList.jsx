import CurrencyListItem from "./CurrencyListItem/CurrencyListItem"
import Footer from "./Footer/Footer"

function CurrencyList({ currencies }) {
  return (
    <div>
        <table>
            {currencies.map(({ id, name, symbol, rank, price_usd, percent_change_24h, percent_change_1h, percent_change_7d, market_cap_usd, volume24a }) => (
            <CurrencyListItem key={id} 
            name={name} 
            symbol={symbol} 
            rank={rank} 
            price_usd={price_usd} 
            percent_change_24h={percent_change_24h} 
            percent_change_1h={percent_change_1h}
            percent_change_7d={percent_change_7d}
            market_cap_usd={market_cap_usd}
            volume24a={volume24a}
            />
          ))}
        </table>
        <Footer />
    </div>
  )
}
export default CurrencyList