import { useTranslation } from "react-i18next"

function Currencies2({ id }) {
  const { t } = useTranslation()
  return (
    <div id={id} >
        <hr />
        <tr className="currencies-continue">
          <td className="heading-table heading-table-1">#</td>
          <td className="heading-table">{t('name')}</td>
          <td className="heading-table heading-table-2">{t('symbol')}</td>
          <td className="heading-table">{t('price')}</td>
          <td className="heading-table heading-table-3">{t('percent1h')}</td>
          <td className="heading-table">{t('percent24h')}</td>
          <td className="heading-table heading-table-4">{t('percent1w')}</td>
          <td className="heading-table heading-table-5">{t('mcusd')}</td>
          <td className="heading-table">{t('mcrypto')}</td>
        </tr>
        <hr />
    </div>
  )
}

export default Currencies2