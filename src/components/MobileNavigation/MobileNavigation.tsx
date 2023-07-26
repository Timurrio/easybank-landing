import styles from "./MobileNavigation.module.scss"

const MobileNavigation = ({ setIsActive }: { setIsActive: React.Dispatch<React.SetStateAction<boolean>> }) => {


    return (
        <div className={styles.container} onClick={() => { setIsActive(isActive => !isActive) }}>
            <div className={styles.menu} onClick={(e) => e.stopPropagation()}>
                <ul className={styles.links}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Blog</li>
                    <li>Careers</li>
                </ul>
            </div>
        </div>
    )
}

export default MobileNavigation