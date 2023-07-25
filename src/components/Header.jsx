import SwipeableTemporaryDrawer from "./Menu/Menu";
import LanguageSwitch from "./LanguageSwitch/LanguageSwitch";
import ThemeButtons from "./Theme/ThemeButtons";

function Header() {
  return (
    <header>

      {/* responsible div 1 */}
      <div className="responsive-div">
        <div className="logo-box-res">
          <img src="logo.jpg" alt="logo" className="logo-h" />
        </div>
        <div className="company-title-res">
          <h1 className="company">
            <span className="coin">Coin</span>
            Market
            <span className="crypto">Crypto</span>
          </h1>
        </div>
      </div>

      {/* pc divs */}
      <div className="logo-box">
          <img src="logo.jpg" alt="logo" className="logo-h" />
      </div>
      
      <div className="company-title">
        <h1 className="company">
          <span className="coin">Coin</span>
            Market
          <span className="crypto">Crypto</span>
        </h1>
      </div>

      {/* lng-switch */}
      <div className="lng-switch">
        <LanguageSwitch />
      </div>
      {/* hamburger */}
      <SwipeableTemporaryDrawer />
    </header>
  );
}

export default Header;