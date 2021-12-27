import { HeaderContainer, LogoContainer, SearchContainer, HeaderItems, HeaderActions, ThemeSwitchContainer, LoginButton } from './styles'
import punkLogo from '../../assets/header/cryptopunk-logo.png'
import searchIcon from '../../assets/header/search.png'
import themeSwitchIcon from '../../assets/header/theme-switch.png'

function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <img src={punkLogo} alt="punkLogo" />
      </LogoContainer>
      <SearchContainer>
        <img src={searchIcon} alt="search" />
        <input type="text" placeholder='Collection, item or user...'/>
      </SearchContainer>
      <HeaderItems>
        <p>Drops</p>
        <p>Marketplace</p>
        <p>Create</p>
      </HeaderItems>
      <HeaderActions>
        <ThemeSwitchContainer>
          <img src={themeSwitchIcon} alt="themeSwitchIcon" />
        </ThemeSwitchContainer>
        <LoginButton>
          GET IN
        </LoginButton>
      </HeaderActions>
    </HeaderContainer>
  )
}

export default Header
