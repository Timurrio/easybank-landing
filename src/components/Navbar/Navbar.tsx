import logo from "../../images/logo.svg"
import { ReqInviteBtn } from "../ReqInviteBtn/ReqInviteBtn"
import styles from "./Navbar.module.scss"

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <img src={logo} alt="Logo" />
            <ul className={styles.navbar__links}>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Blog</li>
                <li>Careers</li>
            </ul>
            <ReqInviteBtn />
        </div>
    )
}

export default Navbar