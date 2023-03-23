import styles from './Article.module.scss'
interface ArticleProps {
    image: string,
    author: string,
    header: string,
    text: string
}

export const Article: React.FC<ArticleProps> = ({ author, header, image, text }) => {
    return (
        <div className={styles.container}>
            <img className={styles.articleImg} src={image} alt={header} />
            <div className={styles.textBlock}>
                <p className={styles.articleAuthor}>By {author}</p>
                <h5 className={styles.articleHeader}>{header}</h5>
                <p className={styles.articleText}>{text}</p>
            </div>
        </div>
    )
}
