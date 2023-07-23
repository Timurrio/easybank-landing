import { useState } from "react"
import logo from "../../images/logo.svg"
import { ReqInviteBtn } from "../ReqInviteBtn/ReqInviteBtn"
import styles from "./Navbar.module.scss"

const Navbar = () => {
    const [isActive, setIsActive] = useState(true)

    return (
        <div className={styles.navbar}>
            <img className={styles.navbar__logo} src={logo} alt="Logo" />
            <ul className={styles.navbar__links}>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Blog</li>
                <li>Careers</li>
            </ul>
            <ReqInviteBtn isVisible={false} />
        </div>
    )
}

export default Navbar