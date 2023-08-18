'use client'

import React, { useState } from 'react'
import styles from './ContactForm.module.scss'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { Input } from '../Input/Input'
import { Textarea } from '../Textarea/Textarea'
import Button from '../Button/Button'

export interface IContactForm {
  name: string
  lastName: string
  phone: string
  email: number
  comment: string
}

const ContactForm = () => {
  const {
    register,
    control,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm<IContactForm>()
  const [isSuccess, setIsSuccess] = useState<boolean>(false)

  const onSubmit: SubmitHandler<IContactForm> = async (formData: IContactForm) => {
    setIsSuccess(true)
    reset()
  }

  return (
    <form className={styles.contactFormWrap} onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        placeholder="Имя"
        {...register('name', {
          required: { value: true, message: 'Заполните имя' },
        })}
        error={errors.name}
      />
      <Input
        type="text"
        placeholder="Фамилия"
        {...register('lastName', {
          required: { value: true, message: 'Заполните фамилию' },
        })}
        error={errors.lastName}
      />
      <Input
        type="phone"
        placeholder="+ 7 000 000 00 00"
        {...register('phone', {
          required: { value: true, message: 'Заполните телефон' },
        })}
        error={errors.phone}
      />
      <Input
        type="email"
        placeholder="E-mail"
        {...register('email', {
          required: { value: true, message: 'Заполните e-mail' },
        })}
        error={errors.email}
      />

      <Textarea
        {...register('comment', {
          required: { value: true, message: 'Заполните комментарий' },
        })}
        className={styles.comment}
        placeholder="Комментарий"
        error={errors.comment}
      />

      <Button borderColor="red" color="white" className={styles.buttonSubmit} type="submit">
        Отправить
      </Button>
    </form>
  )
}

export default ContactForm
