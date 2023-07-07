import { useTranslation } from "react-i18next"
import { useTheme } from "./themeSwitch"

function ThemeButtons() {
    const {theme, setTheme} = useTheme()
    const handleLThemeClick = () => {
        setTheme('light')
      }
      const handleDThemeClick = () => {
        setTheme('dark')
      }
    const { t } = useTranslation()
  return (
    <div>
        <button className="theme-01" onClick={handleLThemeClick}>{t('light')}</button>
        <button className="theme-02" onClick={handleDThemeClick}>{t('dark')}</button>
    </div>
  )
}

export default ThemeButtons