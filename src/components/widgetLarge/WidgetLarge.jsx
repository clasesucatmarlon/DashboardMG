import React from 'react'

export const WidgetLarge = () => {

  const Button = ({ type }) => {
    return <button className={"widgetLargeButton " + type}>{ type }</button>
  }

  return (
    <div className="widgetLarge">
        <h3 className="widgetLargeTitle">Last Transactions</h3>
        <table className="widgetLargeTable">
          <tr className="widgetLargetTr">
            <th className="widgetLargeTh">Customer</th>
            <th className="widgetLargeTh">Date</th>
            <th className="widgetLargeTh">Amount</th>
            <th className="widgetLargeTh">Status</th>
          </tr>
          <tr className="widgetLargetTr">
            <td className="widgetLargeUser">
              <img src="https://randomuser.me/api/portraits/men/36.jpg" 
              alt="" className="widgetLargeImg"/>
              <span className="widgetLargeName">Ralph O'Connor</span>
            </td>
            <td className="widgetLargeDate">1/11/21</td>
            <td className="widgetLargeAmount">$102.99</td>
            <td className="widgetLargeStatus"><Button type="Aproved"/></td>
          </tr>

          <tr className="widgetLargetTr">
            <td className="widgetLargeUser">
              <img src="https://randomuser.me/api/portraits/women/31.jpg" 
              alt="" className="widgetLargeImg"/>
              <span className="widgetLargeName">Linda McGregor</span>
            </td>
            <td className="widgetLargeDate">11/1/20</td>
            <td className="widgetLargeAmount">$10.99</td>
            <td className="widgetLargeStatus"><Button type="Declined"/></td>
          </tr>

          <tr className="widgetLargetTr">
            <td className="widgetLargeUser">
              <img src="https://randomuser.me/api/portraits/women/79.jpg" 
              alt="" className="widgetLargeImg"/>
              <span className="widgetLargeName">Anna Velmont</span>
            </td>
            <td className="widgetLargeDate">1/1/21</td>
            <td className="widgetLargeAmount">$202.99</td>
            <td className="widgetLargeStatus"><Button type="Pending"/></td>
          </tr>
        </table>
          
      
    </div>
  )
}
