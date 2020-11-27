import React from 'react'
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                1st menu item
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                2nd menu item
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                3rd menu item
        </a>
        </Menu.Item>
        <Menu.Item danger>a danger item</Menu.Item>
    </Menu>
);


function FlightDropdown() {
    return (
        <div>
            <div className="container">
                <hr></hr>
                <div className="row">
                    <div className="col-md-2"><h5>Filter: </h5></div>
                    <div className="col-md-2"><Dropdown overlay={menu}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            Transit <DownOutlined />
                        </a>
                    </Dropdown></div>
                    <div className="col-md-2"><Dropdown overlay={menu}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            Time<DownOutlined />
                        </a>
                    </Dropdown></div>
                    <div className="col-md-2"><Dropdown overlay={menu}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            Airline<DownOutlined />
                        </a>
                    </Dropdown></div>
                    <div className="col-md-2"><Dropdown overlay={menu}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            More Filter<DownOutlined />
                        </a>
                    </Dropdown></div>
                    <div className="col-md-2"><Dropdown overlay={menu}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            Sort<DownOutlined />
                        </a>
                    </Dropdown></div>
                </div>
                <hr></hr>
            </div>
        </div>
    )
}

export default FlightDropdown