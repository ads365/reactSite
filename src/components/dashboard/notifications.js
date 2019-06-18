import React from 'react';
import {Card, CardTitle, CardText} from 'react-mdl';
import moment from 'moment';

const Notifications = (props) => {

  const {notifications} = props;

  return (
    <div>
      <h4>Notifications</h4>
      <div className="dash-card">
        <Card shadow={0} style={{width: '300px', margin: 'auto'}}>
            <CardTitle style={{color: '#303A45', height: '70px'}}>Recent Events</CardTitle>
            <CardText style={{color: '#455363'}}>
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
            </CardText>
        </Card>
      </div>

    </div>
  )
}

export default Notifications
