import React from 'react'
import { Layout } from 'antd'
import styles from './Header.module.scss'
import { Typography, Avatar, Input, Badge } from 'antd';
import { BiBell } from 'react-icons/bi';
import { CiSearch } from 'react-icons/ci'
const { Title } = Typography;
const { Header: AntdHeader } = Layout;
export default function Header(props) {
    return (
        <div className={styles['page-header']}>
            <AntdHeader>
                <div className='d-flex align-items-center gap-5'>
                    <Title className='mb-0 text-nowrap' level={2}>{props.pageTitle}</Title>
                    <div className={styles['input-con']}>
                        <Input prefix={<CiSearch />} placeholder='Search' />
                    </div>
                </div>
                <div className='d-flex align-items-center gap-4'>
                    <div>
                        <Badge dot={true}>
                            <BiBell size={24} />
                        </Badge>

                    </div>
                    <Avatar />
                </div>
            </AntdHeader>
        </div>
    )
}
