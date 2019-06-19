import React from 'react';
import moment from 'moment';

const Notifications = (props) => {

  const {notifications} = props;

  return (
    <div className='dash-card-container'>
      <div className="dash-card">
        <div>
          <h5>Recent Events</h5>
        </div>
        <div>
          <ul>
            {notifications && notifications.map(item => {
              return (
                <li key={item.id}>
                  <span>{item.content}.</span>
                  <div>{moment(item.time.toDate()).fromNow()}</div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Notifications
