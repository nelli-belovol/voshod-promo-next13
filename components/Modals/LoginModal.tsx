'use client'

import React, { useState } from 'react'
import styles from './Modals.module.scss'
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll'
import useLoginModal from '@/hooks/useLoginModal'
import Modal from './Modal'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Input } from '../Input/Input'
import Button from '../Button/Button'
import Divider from '@/components/Divider/Divider'
import { FcGoogle } from 'react-icons/fc';

export interface ILogIn {
  email: number
  password: string
}

const LoginModal = () => {
  const loginModal = useLoginModal()
  const {
    register,
    control,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm<ILogIn>()
  const [isLoading, setIsLoading] = useState(false)

  // const onSubmit: SubmitHandler<ILogIn> = data => {
  //   setIsLoading(true)

  //   signIn('credentials', {
  //     ...data,
  //     redirect: false,
  //   }).then(response => {
  //     setIsLoading(false)

  //     if (response?.ok) {
  //       toast.success('Logged in')
  //       router.refresh()
  //       loginModal.onClose()
  //     }

  //     if (response?.error) {
  //       toast.error(response.error)
  //     }
  //   })
  // }

  const leftSideContent = (
    <>
      <h2>Доступные автомобили</h2>
      <p>С нами просто.</p>
      <p>Индивидуальные решения для вас.</p>
    </>
  )

  const bodyContent = (
    <>
      <p>Войдите в личный кабинет, чтобы бронировать и арендовать автомобили стало быстрее и удобнее</p>
      <form style={{ margin: "60px 0" }}>
        <Input style={{ marginBottom: '20px' }} error={errors.email} id="email" placeholder="Email" disabled={isLoading} required type='email' />
        <Input error={errors.password} id="password" placeholder="Password" disabled={isLoading} required type='password' />
      </form>

    </>
  )

  const footerContent = <>
    <Button color='white' borderColor="black" type="submit">
      Отправить
    </Button>
    <Divider />
    <Button color='white' borderColor='black' icon={FcGoogle}>Войти с Google</Button></>

  const title = (
    <>
      <h2>Вход</h2>
      <p>в личный кабинет</p>
    </>
  )

  const onSubmit = () => { }

  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title={title}
      actionLabel="Continue"
      onClose={loginModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
      leftSideContent={leftSideContent}
      footerContent={footerContent}
    />
  )
}

export default LoginModal
