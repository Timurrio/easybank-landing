import styles from './FeaturesSection.module.scss';
import onlineBankingLogo from '../../images/icon-online.svg';
import budgetingLogo from '../../images/icon-budgeting.svg';
import onboardingLogo from '../../images/icon-onboarding.svg';
import apiLogo from '../../images/icon-api.svg';




export const FeaturesSection = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textBlock}>
                <h2 className={styles.textBlock__header}>Why choose Easybank?</h2>
                <p className={styles.textBlock__text}>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before</p>
            </div>
            <div className={styles.featuresBlock}>

                <div className={styles.featuresBlock__feature}>
                    <img className={styles.featuresBlock__feature__image} src={onlineBankingLogo} alt="featureImage" />
                    <h3 className={styles.featuresBlock__feature__header}>Online Banking</h3>
                    <p className={styles.featuresBlock__feature__text}>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the  world</p>
                </div>

                <div className={styles.featuresBlock__feature}>
                    <img className={styles.featuresBlock__feature__image} src={budgetingLogo} alt="featureImage" />
                    <h3 className={styles.featuresBlock__feature__header}>Simple Budgeting</h3>
                    <p className={styles.featuresBlock__feature__text}>See exactly where your money goes each month. Receive notifications when you`re close to hitting your limits.</p>
                </div>

                <div className={styles.featuresBlock__feature}>
                    <img className={styles.featuresBlock__feature__image} src={onboardingLogo} alt="featureImage" />
                    <h3 className={styles.featuresBlock__feature__header}>Fast Onboarding</h3>
                    <p className={styles.featuresBlock__feature__text}>We don`t do branches. Open your account in minutes online and start taking control of your finances right away.</p>
                </div>

                <div className={styles.featuresBlock__feature}>
                    <img className={styles.featuresBlock__feature__image} src={apiLogo} alt="featureImage" />
                    <h3 className={styles.featuresBlock__feature__header}>Open API</h3>
                    <p className={styles.featuresBlock__feature__text}>Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
                </div>

            </div>
        </div>
    )
}
