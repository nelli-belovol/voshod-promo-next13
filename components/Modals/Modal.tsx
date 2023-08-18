import React, { useCallback, useEffect, useState } from 'react'

import styles from './Modal.module.scss'
import classNames from 'classnames'

interface ModalProps {
  isOpen?: boolean
  onSubmit?: () => void
  header: React.ReactElement
  body?: React.ReactElement
  footerContent: React.ReactElement
  actionLabel: string
  disabled?: boolean
  secondaryAction?: () => void
  secondaryActionLabel?: string
  leftSideContent?: React.ReactElement
  isChecked: boolean
  setIsChecked: (v: boolean) => void
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onSubmit,
  header,
  body,
  actionLabel,
  footerContent,
  disabled,
  secondaryAction,
  secondaryActionLabel,
  leftSideContent,
  isChecked,
  setIsChecked,
}) => {
  const [showModal, setShowModal] = useState(isOpen)

  useEffect(() => {
    setShowModal(isOpen)
  }, [isOpen])

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
                <div className={styles.header}>{header}</div>
                {/*body*/}
                <div className={styles.body}>{body}</div>
                {/*footerContent*/}
                <div className={styles.footer}>{footerContent}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
