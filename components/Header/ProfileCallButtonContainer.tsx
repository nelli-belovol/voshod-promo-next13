import Image from 'next/image'
import React from 'react'
import ProfileSvg from '@/assets/icons/profile.svg'
import Button from '../Button/Button'
import styles from './ProfileCallButtonContainer.module.scss'
import ArrowRightSvg from '@/assets/icons/arrowRight.svg'

const ProfileCallButtonContainer = ({ styleColor }: { styleColor: 'light' | 'dark' }) => {
  return (
    <div className={styles.profileWrap}>
      <div
        className={styles.profileBtn}
        style={{
          backgroundColor: styleColor === 'light' ? 'transparent' : '#222222',
          borderColor: styleColor === 'light' ? 'white' : '#222222',
        }}
      >
        <ProfileSvg fill={styleColor === 'light' ? 'white' : '#222222'} />
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
