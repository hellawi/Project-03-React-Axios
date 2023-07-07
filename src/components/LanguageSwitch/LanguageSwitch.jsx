// using i18n
import { useTranslation } from "react-i18next"

function LanguageSwitch() {
  const { i18n } = useTranslation()
  return (
    <div className="lang">
        <select className="round" onChange={(event) => i18n.changeLanguage(event.target.value)}>
          <option value="en">English</option>
          <option value="ua">Українська</option>
          <option value="ru">Русский</option>
          <option value="bg">Български</option>
          <option value="pl">Polski</option>
          <option value="de">Deutsch</option>
          <option value="es">Español</option>
        </select>
    </div>
  )
}

export default LanguageSwitch