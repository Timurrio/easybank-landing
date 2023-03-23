import styles from './IntroSection.module.scss'
import mockupImage from '../../images/image-mockups.png'
import backgroundImage from '../../images/bg-intro-desktop.svg'
import { ReqInviteBtn } from '../ReqInviteBtn/ReqInviteBtn'

export const IntroSection = () => {
    return (
        <div className={styles.container}>
            <img src={backgroundImage} className={styles.backgroundImage} alt='BackgroundImage' />
            <img src={mockupImage} className={styles.mockupImage} alt='MockupImage' />
            <div className={styles.textBlock}>
                <h1 className={styles.textBlock__header}>Next generation digital banking</h1>
                <p className={styles.textBlock__text}>Take your financial life online. Your EasyBank account will be a one-stop shop for spending, saving, budgeting, investing, and much more.</p>
                <ReqInviteBtn />
            </div>
        </div>
    )
}
