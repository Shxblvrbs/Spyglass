import React from 'react'
import { Tabs } from 'antd';
import styled from 'styled-components';
const { TabPane } = Tabs;
const StyledTab = styled.div`
    .ant-tabs-tab{
        font-size: 16px !important;
        font-weight: 500 !important;
    }
    .ant-tabs-content{
        position:static;
    }
    .ant-tabs-tab-btn{
    font-size: 20px;
    }
    .ant-tabs-tab-active > .ant-tabs-tab-btn 
    {
        color: black !important;

    }
    .ant-tabs-tab 
    {
        color: rgba(0, 0, 0, 0.483) !important;
    }
    .ant-tabs-tab:hover 
    {
        color: black !important;
    }
   .ant-tabs-tab 
    {
        padding: 0px 25px 10px 25px  ;
        margin: 0 !important;
    }
    .ant-tabs-tab:nth-child(2) {
        margin-left: 20px !important;
    }
    .ant-tabs-ink-bar-animated {
       background-color: #02B8F2 !important;
    }
    .ant-tabs-nav::before{
       border-bottom: 0 !important;
    }
`
export default function Tab(props) {
    const tabs = props.tabs;
    return (
        <StyledTab >
            <Tabs defaultActiveKey={props.activeTabKey} >
                {tabs.map(tab => (
                    <TabPane tab={tab.tabTitle} key={tab.tabKey}>
                        {tab.tabContent}
                    </TabPane>
                ))}
            </Tabs>
        </StyledTab>
    )
}
