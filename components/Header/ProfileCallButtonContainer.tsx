'use client'

import Image from 'next/image'
import React, { useCallback, useState } from 'react'
import ProfileSvg from '@/assets/icons/profile.svg'
import Button from '../Button/Button'
import styles from './ProfileCallButtonContainer.module.scss'
import ArrowRightSvg from '@/assets/icons/arrowRight.svg'
import classNames from 'classnames'
import useLoginModal from '@/hooks/useLoginModal'
import useCallMeModal from '@/hooks/useCallMeModal'

const ProfileCallButtonContainer = ({ styleColor }: { styleColor: 'light' | 'dark' }) => {
  const callMeModal = useCallMeModal()
  const [isOpen, setIsOpen] = useState(false)
  const loginModal = useLoginModal()

  const toggleOpen = useCallback(() => {
    setIsOpen(value => !value)
  }, [])

  const handleClick = () => {
    callMeModal.onOpen()
  }

  return (
    <div className={styles.profileWrap}>
      <div
        onClick={toggleOpen}
        className={classNames(styles.profileBtn, {
          [styles.lightThemeBtn]: styleColor === 'light',
          [styles.darkThemeBtn]: styleColor === 'dark',
        })}
      >
        <ProfileSvg />
      </div>
      <Button
        className={classNames({
          [styles.lightAskCallBtn]: styleColor === 'light',
          [styles.darkAskCallBtn]: styleColor === 'dark',
        })}
        styleColor={styleColor}
        style={{
          color: styleColor === 'light' ? 'white' : '#222222',
          borderColor: styleColor === 'light' ? 'white' : '#BF3535',
        }}
        color="transparent"
        borderColor={'white'}
        onClick={handleClick}
        icon={ArrowRightSvg}
      >
        Заказать звонок
      </Button>

      {isOpen && (
        <div className={styles.userMenu}>
          <div onClick={loginModal.onOpen} className={styles.userEnter}>
            Вход в Личный кабинет
          </div>
        </div>
      )}
    </div>
  )
}

export default ProfileCallButtonContainer
