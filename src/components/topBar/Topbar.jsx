import React from 'react';

import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import avatar from '../../assets/images/fotomg.png'

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="wrapper_left">
          <span className="logo">AdminMG</span>
        </div>

        <div className="wrapper_right">
          <div className="icons-container">
            <NotificationsNone />
            <span className="topicon_bag">50</span>
          </div>
          <div className="icons-container">
            <Language />
            <span className="topicon_bag">50</span>
          </div>
          <div className="icons-container">
            <Settings />
          </div>
          <img src={avatar} alt="" className="avatar"/>
        </div>
      </div>
    </div>
  )
}
