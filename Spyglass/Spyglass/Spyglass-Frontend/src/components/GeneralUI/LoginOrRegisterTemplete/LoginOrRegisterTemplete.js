import styles from './LoginOrRegisterTemplete.module.scss'
import logo from '../../../assets/images/logo.svg';
import FormWrapper from '../FormWrapper/FormWrapper'

import React from 'react'
import { Typography } from 'antd';
const { Title, Paragraph } = Typography;
export default function LoginOrRegisterTemplete(props) {
    return (
        <div className={`${styles['form-templete-con']} d-flex align-items-center justify-content-between flex-grow-1 gap-5`}>
            <div className='d-flex flex-column justify-content-between flex-grow-1'>
                <div className='text-center mb-5'>
                    <img src={logo} alt='logo' />
                </div>
                <div className={`text-center`}>
                    <Title className={`${styles['title']} mb-2`} level={2}>Welcome to the Cashola Family </Title>
                    <Paragraph className={styles['text']}>Simplify your finance, Boost your credit score</Paragraph>
                </div>
            </div>
            <div className='flex-grow-1 d-flex flex-column'>
                <FormWrapper >
                    {props.children}
                </FormWrapper >
            </div>
        </div>
    )
}
