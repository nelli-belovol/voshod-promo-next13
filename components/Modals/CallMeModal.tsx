'use client'
import BackArrowSvg from '@/assets/icons/backArrow.svg'
import React, { useMemo, useState } from 'react'
import styles from './Modal.module.scss'
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll'
import useCallMeModal from '@/hooks/useCallMeModal'
import Modal from './Modal'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Input } from '../Input/Input'
import Button from '../Button/Button'
import Divider from '@/components/Divider/Divider'
import { FcGoogle } from 'react-icons/fc'
import classNames from 'classnames'

export interface ICallMe {
  name: string
  lastName: string
  phone: number
}

const CallMeModal = () => {
  const callMeModal = useCallMeModal()
  const {
    register,
    control,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm<ICallMe>()

  enum STEPS {
    CONTACTFORM = 0,
    FINISH = 1,
  }

  const [isChecked, setIsChecked] = useState(false)
  const [acceptColor, setAcceptColor] = useState<string>('#22222')
  const [isSuccess, setIsSuccess] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState(false)
  const [step, setStep] = useState(STEPS.CONTACTFORM)

  const onSubmit: SubmitHandler<ICallMe> = async (formData: ICallMe) => {
    if (!isChecked) {
      return
    } else {
      setStep(value => value + 1)
      setIsSuccess(true)
      reset()
    }
  }

  const handleClickBtn = () => {
    if (step === STEPS.CONTACTFORM) {
      if (!isChecked) {
        console.log('not accept')
        setAcceptColor('#BF3535')
      } else {
        setAcceptColor('#22222')
      }
    } else {
      callMeModal.onClose()
    }
  }

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked)
  }

  const actionLabel = useMemo(() => {
    if (step === STEPS.CONTACTFORM) {
      return 'перезвоните мне'
    }

    return 'Закрыть'
  }, [step])

  const leftSideContent = (
    <>
      <h2>Доступные автомобили</h2>
      <p>С нами просто.</p>
      <p>Индивидуальные решения для вас.</p>
    </>
  )

  const title = (
    <>
      <h2>{step === STEPS.CONTACTFORM ? 'заказать звонок' : 'Спасибо за обращение'}</h2>
    </>
  )

  const header = (
    <>
      {step === STEPS.CONTACTFORM ? (
        <div className={styles.backBlock} onClick={callMeModal.onClose}>
          <BackArrowSvg />
          <span>Вернуться</span>
        </div>
      ) : (
        <></>
      )}
      <div className={styles.title}>{title}</div>
    </>
  )

  const bodyContent = (
    <>
      <p>
        {step === STEPS.CONTACTFORM
          ? 'Оставьте свой номер телефона и мы перезвоним вам в ближайшее время'
          : 'Наш специалист с вами свяжется. Пожалуйста, ожидайте'}
      </p>

      <form style={{ margin: '60px 0' }} onSubmit={handleSubmit(onSubmit)}>
        {step === STEPS.CONTACTFORM ? (
          <>
            <Input
              style={{ marginBottom: '20px' }}
              id="name"
              placeholder="Имя"
              disabled={isLoading}
              type="text"
              {...register('name', {
                required: { value: true, message: 'Пожалуйста, заполните поле' },
              })}
              error={errors.name}
            />
            <Input
              style={{ marginBottom: '20px' }}
              id="lastName"
              placeholder="Фамилия"
              disabled={isLoading}
              type="text"
              {...register('lastName', {
                required: { value: true, message: 'Пожалуйста, заполните поле' },
              })}
              error={errors.lastName}
            />
            <Input
              style={{ marginBottom: '20px' }}
              id="phone"
              placeholder="+ 7 000 000 00 00"
              disabled={isLoading}
              type="phone"
              {...register('phone', {
                required: { value: true, message: 'Пожалуйста, заполните поле' },
              })}
              error={errors.phone}
            />
          </>
        ) : (
          <Divider style={{ width: '100px' }} />
        )}

        <Button color="white" borderColor="black" type="submit" onClick={handleClickBtn} className={styles.submitBtn}>
          {actionLabel}
        </Button>
      </form>
    </>
  )

  const footerContent = (
    <>
      {step === STEPS.CONTACTFORM ? (
        <div className={styles.acсeptBlock}>
          <input
            checked={isChecked}
            onChange={handleCheckboxChange}
            type="checkbox"
            name="acсept"
            id="acсept"
            className={classNames('visually-hidden', styles.acсeptCheckbox)}
            required
          />
          <label
            className={classNames(styles.checkboxLabel, {
              [styles.notAcceptLabel]: acceptColor === '#BF3535',
            })}
            htmlFor="acсept"
          >
            Я соглашаюсь с&ensp;<a href="#">Условиями обработки персональных данных</a>{' '}
          </label>
        </div>
      ) : (
        <></>
      )}
    </>
  )

  return (
    <Modal
      disabled={isLoading}
      isOpen={callMeModal.isOpen}
      header={header}
      actionLabel="Continue"
      body={bodyContent}
      leftSideContent={leftSideContent}
      footerContent={footerContent}
      isChecked={isChecked}
      setIsChecked={setIsChecked}
    />
  )
}

export default CallMeModal
