import React from 'react';

function ProgressBar(props) {

  const totalProgress = props.totalPercent + '%';

  return (
    <div className="progress-bar">
      <div className="progress"  style={{width: totalProgress}}><p id='p1'>{props.totalPercent}%</p></div>
    </div>
  )
}

export default ProgressBar;
