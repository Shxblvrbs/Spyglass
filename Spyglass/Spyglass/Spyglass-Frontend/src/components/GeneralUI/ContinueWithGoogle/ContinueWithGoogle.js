import React from 'react'
import { Button } from 'antd'
import { FcGoogle } from 'react-icons/fc';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import styles from './ContinueWithGoogle.module.scss'
export default function ContinueWithGoogle(props) {
    const loading = props.loading
    // const loading = true;
    let content = <>
        <FcGoogle size={24} />
        <Button loading={props.loading}>{props.children}</Button>
    </>;
    if (loading) {
        content = <LoadingSpinner color={'black'} />
    }
    return (
        <div onClick={props.onClick} className={`${styles['continue-with-google']} ${loading && styles['loading-con']}`}>
            {content}
        </div>
    )
}
