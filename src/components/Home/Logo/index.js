import './index.scss'
import LogoN from '../../../assets/images/N.png'

const Logo = () => {
   return (
      <div>
         {/* <img className="solid-logo" src={LogoN} alt="N" /> */}
         <div className="logo-container">
            <img className="solid-logo" src={LogoN} alt="N" />
         </div>
      </div>

   )
}

export default Logo