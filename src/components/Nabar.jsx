import React from 'react'
import { Button, Menu, Typography, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import { HomeOutlined, MoneyCollectOutlined, BulbOutline, FundOutlined, MenuOutlined } from '@ant-design/icons'

const Navbar = () => {
    return (
        <div className='nav-container'>
            <div classANme='logo-container'>
                <Avatar />
                    <Typography.Title level={2} className='logo' >
                        <Link to='/'>Crypto Current </Link>
                    </Typography.Title>
                    // <Button className='menu-control-container'>
                    // </Button>
            </div>

        </div>
    )
}
export default Navbar
