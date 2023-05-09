import "./style.scss"
import logo from '../assets/Logo.svg'


const Header = () => {
  return (
    <div className="header_wrapper">
        <div className="logo_wrapper">
         <img src={logo} alt="logo" />  
        </div>
        
    </div>
  )
}

export default Header