import Image from 'next/image'
import React from 'react'
import ProfileSvg from '@/assets/icons/profile.svg'
import Button from '../Button/Button'
import styles from './ProfileCallButtonContainer.module.scss'
import ArrowRightSvg from '@/assets/icons/arrowRight.svg'

const ProfileCallButtonContainer = () => {
  return (
    <div className={styles.profileWrap}>
      <div className={styles.profileBtn}>
        <ProfileSvg />
      </div>
      <Button color="transparent" borderColor="white" onClick={() => { }} text="Заказать звонок" icon={ArrowRightSvg} />
    </div>
  )
}

export default ProfileCallButtonContainer
