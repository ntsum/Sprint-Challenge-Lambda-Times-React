import React from 'react';
import Tab from './Tab';
import PropTypes from "prop-types";

const Tabs = props => {
return (
  <div className="tabs">
    <div className="topics">
      <span className="title">TRENDING TOPICS:</span>
    
      {props.tabs.map((tab, index) => (
        <Tab
          key={index}
          selectTabHandler={props.selectTabHandler}
          selectedTab={props.selectedTab}
          tab={tab}
        />
      ))}
    </div>
  </div>
);
};

Tabs.propTypes = {
  selectedTab: PropTypes.string,
  selectTabHandler: PropTypes.func,
  tabs: PropTypes.arrayOf(PropTypes.string)
};

// Make sure to use PropTypes to validate your types!
export default Tabs;