import Image from 'next/image'
import React from 'react'
import ProfileSvg from '@/assets/icons/profile.svg'
import Button from '../Button/Button'
import styles from './ProfileCallButtonContainer.module.scss'
import ArrowRightSvg from '@/assets/icons/arrowRight.svg'
import classNames from 'classnames'

const ProfileCallButtonContainer = ({ styleColor }: { styleColor: 'light' | 'dark' }) => {
  const logoStyle = {
    fill: styleColor === 'light' ? 'transparent' : '#222222',
  }

  const logoWrapStyle = {
    border: '2px solid var(--grey-3, #E7E7E8)',
    boxShadow: '0px 0px 10px 0px rgba(55, 73, 96, 0.25)',
  }

  return (
    <div className={styles.profileWrap}>
      <div
        className={classNames(styles.profileBtn, {
          [styles.lightThemeBtn]: styleColor === 'light',
          [styles.darkThemeBtn]: styleColor === 'dark',
        })}
      >
        <ProfileSvg />
      </div>
      <Button
        styleColor={styleColor}
        style={{
          color: styleColor === 'light' ? 'white' : '#222222',
          borderColor: styleColor === 'light' ? 'white' : '#BF3535',
        }}
        color="transparent"
        borderColor={'white'}
        onClick={() => {}}
        icon={ArrowRightSvg}
      >
        Заказать звонок
      </Button>
    </div>
  )
}

export default ProfileCallButtonContainer
