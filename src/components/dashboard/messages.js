import React from 'react';
import moment from 'moment';

const Messages = (props) => {

  const {messages} = props;

  return (
    <div>
      {messages && messages.map(item => {
        return (
          <div className='dash-card-container'>
            <div className="dash-card" key={item.id}>
              <div>
                <div>
                  <h5>{item.name}</h5>
                </div>
                <div>
                  <p>{item.message}</p>
                  <p>{item.email}</p>
                </div>
                <hr style={{borderTop:'dotted 1px'}} />
                <div>
                  <div>{moment(item.submittedAt.toDate()).calendar()}</div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Messages
