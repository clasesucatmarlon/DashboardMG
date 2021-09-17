import React from 'react'

import { Group, ShoppingBasket, ExitToApp } from "@material-ui/icons";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Sidebar</h2>
      <ul>
        <li><span><Group /></span>Users</li>
        <li><span><ShoppingBasket /></span>Products</li>
        <li><span><ExitToApp /></span>Logout</li>
      </ul>
    </div>
  )
}
