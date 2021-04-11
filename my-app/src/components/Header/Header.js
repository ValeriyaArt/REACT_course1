import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    console.log(props)
    return <header className={s.header}>
        <img src='https://cdn.shopify.com/shopifycloud/hatchful-web/assets/67cbe9b74baf7f893488c5fc426d31eb.png'/>
        <div className={s.loginBlock}>
            {props.isAuth ? props.userId
                : <NavLink to={'/login'}>Login</NavLink>
            }
        </div>
    </header>
}

export default Header;