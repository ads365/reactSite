import React from 'react';
import {Card, CardTitle, CardText} from 'react-mdl';
import moment from 'moment';

const Notifications = (props) => {

  const {notifications} = props;

  return (
    <div>
      <h4>Notifications</h4>
      <Card shadow={0} style={{width: '300px', margin: 'auto'}}>
          <CardTitle style={{color: 'black', height: '70px'}}>Recent Events</CardTitle>
          <CardText>
            <ul>
              {notifications && notifications.map(item => {
                return (
                  <li key={item.id}>
                    <span>{item.user}, </span>
                    <span>{item.content}.</span>
                    <div>{moment(item.time.toDate()).fromNow()}</div>
                  </li>
                )
              })}
            </ul>
          </CardText>
      </Card>
    </div>
  )
}

export default Notifications
