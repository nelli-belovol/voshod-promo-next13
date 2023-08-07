import React, { useCallback, useEffect, useState } from 'react'
import BackArrowSvg from '@/assets/icons/backArrow.svg'
import styles from './Modal.module.scss'

interface ModalProps {
    isOpen?: boolean
    onClose: () => void
    onSubmit: () => void
    title?: React.ReactElement
    body?: React.ReactElement
    footerContent: React.ReactElement
    actionLabel: string
    disabled?: boolean
    secondaryAction?: () => void
    secondaryActionLabel?: string
    leftSideContent?: React.ReactElement
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    onSubmit,
    title,
    body,
    actionLabel,
    footerContent,
    disabled,
    secondaryAction,
    secondaryActionLabel,
    leftSideContent,
}) => {
    const [showModal, setShowModal] = useState(isOpen)

    useEffect(() => {
        setShowModal(isOpen)
    }, [isOpen])

    const handleClose = useCallback(() => {
        if (disabled) {
            return
        }

        setShowModal(false)
        setTimeout(() => {
            onClose()
        }, 300)
    }, [onClose, disabled])

    const handleSubmit = useCallback(() => {
        if (disabled) {
            return
        }

        onSubmit()
    }, [onSubmit, disabled])

    const handleSecondaryAction = useCallback(() => {
        if (disabled || !secondaryAction) {
            return
        }

        secondaryAction()
    }, [secondaryAction, disabled])

    if (!isOpen) {
        return null
    }

    return (
        <>
            <div className={styles.modalWrap}>
                <div className={styles.modalContentWrap}>
                    {/*content*/}
                    <div className={styles.modalContent}>
                        <div className={styles.imageWrap}>{leftSideContent}</div>
                        <div className={styles.container}>
                            <div>
                                {/*header*/}
                                <div className={styles.header}>
                                    <div className={styles.backBlock}>
                                        <BackArrowSvg />
                                        <span>Вернуться</span>
                                    </div>
                                    <div className={styles.title}>{title}</div>
                                </div>
                                {/*body*/}
                                <div className={styles.body}>{body}</div>
                                {/*footerContent*/}
                                <div className={styles.footer}>{footerContent}</div>

                                <div className={styles.acсeptBlock}><input type='checkbox' /><p>Я соглашаюсь с <span>Условиями обработки персональных данных</span> </p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal
