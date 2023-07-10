import { Table } from 'antd';
import styled from 'styled-components';
const BaseTable = styled(Table)`
 .ant-table-cell{
        background-color: #F6F8FA  !important;
        padding: 0 !important;
        border-bottom: 0 !important;
    }
    .ant-table-thead .ant-table-cell{
         border-bottom: 1px solid rgba(0, 0, 0, 0.15)!important;  
    }
    .ant-pagination-item-active{
        background-color:#DEECF9  !important;
        border: none;
    }
    .ant-pagination-item{
        border-radius: 50% !important;
    }
    .ant-pagination-item,
    .ant-pagination-next,
    .ant-pagination-prev
    {
        display: flex !important;
        justify-content: center !important;
        align-items: center !important;
        min-width: 27px;
        height: 27px;
    }
    .ant-pagination-item-link
    {
        display: flex !important;
        justify-content: center !important;
        align-items: center !important;
    }
    .ant-pagination-total-text
     {
        position: absolute;
        left: 10px;
        font-size: 16px;
     }
     tbody tr .first{
        border-bottom-left-radius: 5px;
        border-top-left-radius: 5px;
    } 
   tbody tr .last{
        border-bottom-right-radius: 5px;
        border-top-right-radius: 5px;
    }
`
export default BaseTable;