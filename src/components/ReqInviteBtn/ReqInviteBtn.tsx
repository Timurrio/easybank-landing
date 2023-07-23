import styles from './ReqInviteBtn.module.scss'

interface ReqInviteBtnProps {
    isVisible?: boolean
}

export const ReqInviteBtn = ({ isVisible }: ReqInviteBtnProps) => {


    return (
        <button className={`${styles.button} ${isVisible === false ? styles.invisible : ""}`}>Request Invite</button>
    )
}
