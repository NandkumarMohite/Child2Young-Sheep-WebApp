import React, { useState, useEffect } from 'react';
import './time-card-component-css.css'
const TimeCardComponent = ({ title, timeData }) => {
  return (
    <div className="displaycard">
      <div className="displayTimecard">
        <div className="startDate">
          <div className='dropdown-title'>{timeData?.startDate?.text}</div>
          <input type='date' className='dropdown-title' value={timeData?.startDate?.date} />
        </div>
        <div className="endDate">
          <div className='dropdown-title'>{timeData?.endDate?.text}</div>
          <input type='date' className='dropdown-title' value={timeData?.endDate?.date} />
        </div>
      </div>
    </div>
  );
}

export default TimeCardComponent