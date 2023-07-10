import React from 'react'
import styles from './Card.module.scss';
export default function Card(props) {
    const { className, children } = props;
    const classes = `${className} ${styles['card']}`
    return (
        <div className={classes}>{
            children
        }
        </div>
    )
}
