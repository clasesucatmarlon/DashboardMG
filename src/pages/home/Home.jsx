import React from 'react'
import { Chart } from '../../components/chart/Chart'
import { FeaturedInfo } from '../../components/featuredInfo/FeaturedInfo'
import { WidgetLarge } from '../../components/widgetLarge/WidgetLarge'
import { WidgetSmall } from '../../components/widgetSmall/WidgetSmall'
import { userData } from '../../data/UserData'

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart 
        userData={userData}
        title="User Analytics"
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetSmall />
        <WidgetLarge />
      </div>
      
    </div>
  )
}
