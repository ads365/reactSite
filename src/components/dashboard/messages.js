import React from 'react';
import {Card, CardTitle, CardText, CardActions} from 'react-mdl';
import moment from 'moment';

const Messages = (props) => {

  const {messages} = props;

  return (
    <div>
      {messages && messages.map(item => {
        return (
          <div className="blog-card" key={item.id}>
            <Card shadow={0} style={{width: '300px', margin: 'auto'}}>
                <CardTitle style={{color: 'black', height: '70px'}}>{item.name}</CardTitle>
                <CardText>
                    {item.message}
                </CardText>
                <CardText>
                    {item.email}
                </CardText>
                <CardActions border>
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
