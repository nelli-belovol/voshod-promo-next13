'use client'
import classNames from 'classnames'
import Bank from '@/assets/icons/bank.svg'
import Blank from '@/assets/icons/blank.svg'
import CreditCards from '@/assets/icons/creditCards.svg'
import Diamond from '@/assets/icons/diamond.svg'
import React from 'react'
import styles from './About.module.scss'

const About = () => {
  return (
    <div className={classNames(styles.aboutWrap)}>
      <div className={styles.description}>
        <h2>О компании</h2>
        <p>Наша компания создана в 2012 году.</p>
        <p>
          Основным видом деятельности является предоставление услуг по аренде и лизингу автомобилей для компаний и
          физический лиц.
        </p>
        <p>
          Мы ценим комфорт и время наших клиентов, поэтому стремимся оформить автомобиль для вас в максимально короткие
          сроки. Индивидуальный подход позволяет выбрать условия необходимые именно вам.
        </p>
        <div className={styles.progressList}>
          <div className={styles.progressTopBlock}>
            <div>
              <span>{`>10`}</span>
              <p>Лет работы</p>
            </div>
            <div>
              <span>{`>500`}</span>
              <p>Автомобилей</p>
            </div>
          </div>

          <div>
            <span>{`>500`}</span>
            <p>Довольных клиентов</p>
          </div>
        </div>
      </div>

      <div className={styles.rightBlock}>
        <div className={styles.advantagesList}>
          <div className={styles.advantageItem} style={{ marginLeft: `33%` }}>
            <div className={styles.iconWrap}>
              <Bank />
            </div>
            <div className={styles.text}>
              <h4>просто</h4>

              <p>Не требуется одобрение на автокредит или потребительский кредит в банке</p>
            </div>
          </div>
          <div className={styles.advantageItem} style={{ marginLeft: `23%` }}>
            <div className={styles.iconWrap}>
              <CreditCards />
            </div>
            <div className={styles.text}>
              <h4>выгодно</h4>

              <p>
                Приобретая автомобиль в лизинг, вы не увеличиваете свою кредитную нагрузку и можете использовать
                кредитные продукты банков
              </p>
            </div>
          </div>
          <div className={styles.advantageItem} style={{ marginLeft: `11%` }}>
            <div className={styles.iconWrap}>
              <Diamond />
            </div>
            <div className={styles.text}>
              <h4>Доступно</h4>
              <p>Лизинг позволяет приобрести автомобиль более высокого класса</p>
            </div>
          </div>
          <div className={styles.advantageItem} style={{ marginLeft: `0%` }}>
            <div className={styles.iconWrap}>
              <Blank />
            </div>
            <div className={styles.text}>
              <h4>быстро</h4>

              <p>Скорость и удобство проведения сделки в максимально короткие сроки</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
