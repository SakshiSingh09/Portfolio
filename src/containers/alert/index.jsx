import React from 'react';
import './styles.scss';

const Alert = ({ alertMsg }) => {
  return (
    <div className='alert'>
      <p style={ alertMsg.warning===false ? {background: '#ffdd40'} : {background: 'red'}}>{ alertMsg.message }</p>
    </div>
  )
}

export default Alert;
