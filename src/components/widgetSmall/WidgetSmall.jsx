import React from 'react'

import { Visibility } from '@material-ui/icons' 

export const WidgetSmall = () => {
  return (
    <div className="widgetSmall">
        <div className="widgetSamllTitle">New Join Members</div>
        <ul className="widgetSmallList">
          <li className="widgetSmallListItem">
            <img src="https://randomuser.me/api/portraits/women/79.jpg" alt="" className="widgetSmallImg" />
            <div className="widgetSmallUser">
              <span className="widgetSmallUserName">Anna Smith</span>
              <span className="widgetSmallUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmallButton">
              <Visibility className="widgetIcon"/>Display
            </button>
          </li>

          <li className="widgetSmallListItem">
            <img src="https://uifaces.co/our-content/donated/KtCFjlD4.jpg" alt="" className="widgetSmallImg" />
            <div className="widgetSmallUser">
              <span className="widgetSmallUserName">Joseph Mir Smith</span>
              <span className="widgetSmallUserTitle">Developer Backend</span>
            </div>
            <button className="widgetSmallButton">
              <Visibility className="widgetIcon"/>Display
            </button>
          </li>

          <li className="widgetSmallListItem">
            <img src="https://randomuser.me/api/portraits/men/36.jpg" alt="" className="widgetSmallImg" />
            <div className="widgetSmallUser">
              <span className="widgetSmallUserName">Alex Shan</span>
              <span className="widgetSmallUserTitle">Developer Frontend</span>
            </div>
            <button className="widgetSmallButton">
              <Visibility className="widgetIcon"/>Display
            </button>
          </li>

          <li className="widgetSmallListItem">
            <img src="https://randomuser.me/api/portraits/women/31.jpg" alt="" className="widgetSmallImg" />
            <div className="widgetSmallUser">
              <span className="widgetSmallUserName">Alexa Chevchenco</span>
              <span className="widgetSmallUserTitle">Fullstack Engineer</span>
            </div>
            <button className="widgetSmallButton">
              <Visibility className="widgetIcon"/>Display
            </button>
          </li>
        </ul>
    </div>
  )
}
