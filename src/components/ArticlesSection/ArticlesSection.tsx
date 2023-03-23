import styles from "./ArticlesSection.module.scss"
import { Article } from "./Article/Article"
import currencyImg from "../../images/image-currency.jpg"
import restarauntImg from "../../images/image-restaurant.jpg"
import planeImg from "../../images/image-plane.jpg"
import confettiImg from "../../images/image-confetti.jpg"


interface ArticleData {
    image: string,
    author: string,
    header: string,
    text: string
}

const data: ArticleData[] = [
    {
        image: currencyImg,
        author: "Claire Robinson",
        header: "Receive money in any currency with no fees",
        text: "The world is getting smaller and we`re becoming more mobile. So why should you be forced to only receive money in a single..."
    },
    {
        image: restarauntImg,
        author: "Wilson Hutton",
        header: "Treat yourself without worrying about money",
        text: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you..."
    },
    {
        image: planeImg,
        author: "Wilson Hutton",
        header: "Take your Easybank card wherever you go",
        text: "We want you to enjoy your travels. This is why we don`t charge any fees on purchases while you`re abroad. We`ll even show you..."
    },
    {
        image: confettiImg,
        author: "Claire Robinson",
        header: "Our invite-only Beta accounts are now live!",
        text: "After a lot of hard work by the whole team, we`re excited to launch our closed beta. It`s easy to request an invite through the site..."
    }
]

export const ArticlesSection = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.header}>Latest Articles</h2>

            <div className={styles.articlesBlock}>
                {
                    data.map((article) => (
                        <Article author={article.author} header={article.header} image={article.image} text={article.text} key={article.image} />
                    ))
                }
            </div>
        </div>
    )
}


