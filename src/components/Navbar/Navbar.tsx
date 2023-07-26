import logo from "../../images/logo.svg"
import { ReqInviteBtn } from "../ReqInviteBtn/ReqInviteBtn"
import styles from "./Navbar.module.scss"
import { FaBars } from "react-icons/fa"
import { FaXmark } from "react-icons/fa6"

const Navbar = ({ isActive, setIsActive }: { isActive: boolean, setIsActive: React.Dispatch<React.SetStateAction<boolean>> }) => {

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
            <button className={styles.mobileNavigationButton} onClick={() => setIsActive(isActive => !isActive)}>
                {isActive ? <FaXmark /> : <FaBars />}
            </button>
        </div>
    )
}

export default Navbar