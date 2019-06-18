import React from 'react';
import {Card, CardTitle, CardText, CardActions} from 'react-mdl';
import moment from 'moment';

const Messages = (props) => {

  const {messages} = props;

  return (
    <div>
      {messages && messages.map(item => {
        return (
          <div className="dash-card" key={item.id}>
            <Card shadow={0} style={{width: '300px', margin: 'auto'}}>
                <CardTitle style={{color: '#303A45', height: '70px', fontFamily: 'Open Sans, sans-serif'}}>{item.name}</CardTitle>
                <CardText style={{color: '#455363'}}>
                    {item.message}
                </CardText>
                <CardText style={{color: '#455363'}}>
                    {item.email}
                </CardText>
                <CardActions style={{color: '#303A45'}} border>
                    <div>{moment(item.submittedAt.toDate()).calendar()}</div>
                </CardActions>
            </Card>
          </div>
        )
      })}
    </div>
  )
}

export default Messages
