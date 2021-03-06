import React from 'react'

import { 
  Home, 
  Timeline, 
  TrendingUp, 
  PersonOutline,
  Group,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline, 
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report
} from "@material-ui/icons";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <a href="\home">
                <Home className="sidebarIcon"/>Home
              </a>
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon"/>Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon"/>Sales
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <a href="/sidebar">
                <PersonOutline className="sidebarIcon"/>Customers
              </a>
            </li>
            <li className="sidebarListItem">
              <a href="/userlist">
                <Group className="sidebarIcon"/>Clients
              </a>
            </li>
            <li className="sidebarListItem">
              <Storefront className="sidebarIcon"/>Products
            </li>
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon"/>Transactions
            </li>
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon"/>Reports
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon"/>Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon"/>Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon"/>Messages
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon"/>Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon"/>Analytics
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon"/>Report
            </li>
          </ul>
        </div>


      </div>
    </div>
  )
}
