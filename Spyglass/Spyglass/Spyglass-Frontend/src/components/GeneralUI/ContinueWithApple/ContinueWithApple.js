import React from 'react'
import { Button } from 'antd'
import { SiApple } from 'react-icons/si';
import styles from './ContinueWithApple.module.scss'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
export default function ContinueWithApple(props) {
    const loading = props.loading;
    // const loading = true;
    let content = <>
        <SiApple size={20} />
        <Button >{props.children}</Button>
    </>

    if (loading) {
        content = <LoadingSpinner color='white' />
    }

    return (
        <div onClick={props.onClick} className={`${styles['continue-with-apple']} ${loading && styles['loading-con']}`}>
            {content}
        </div>
    )
}
