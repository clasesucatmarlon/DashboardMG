import React from 'react';
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export const FeaturedInfo = () => {
  return (
    <div className="featured">

      <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="feturedContainerMoney">
          <span className="featuredMoney">$20</span>
          <span className="featuredMoneyRated">
            -11.5<ArrowDownward className="featuredIcon negative" />
            </span>
        </div>
        <span className="featuredSub">Compared with last month</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="feturedContainerMoney">
          <span className="featuredMoney">$4.415</span>
          <span className="featuredMoneyRated">
            -1.5<ArrowDownward className="featuredIcon negative" />
            </span>
        </div>
        <span className="featuredSub">Compared with last month</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="feturedContainerMoney">
          <span className="featuredMoney">$2.25</span>
          <span className="featuredMoneyRated">
            +1.5<ArrowUpward className="featuredIcon" />
            </span>
        </div>
        <span className="featuredSub">Compared with last month</span>
      </div>


    </div>
  )
}
