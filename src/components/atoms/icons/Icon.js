import React from 'react'
import PropTypes from 'prop-types'

import MessageIcon from './icons-assets/icon-message-cleanify.svg'
import NotificationIcon from './icons-assets/icon-notification-cleanify.svg'
import SearchIcon from './icons-assets/icon-search-cleanify.svg'


function Icon(props) {
  const { name } = props;

  switch(name) {

    case "message":   return <MessageIcon />;
    case "notification":  return  <NotificationIcon />;
    case "search": return <SearchIcon />;

    default:      
    return <h1>Name is Required</h1>
  }

}

Icon.propTypes = {
  name: PropTypes.oneOf(['message', 'notification', 'search']).isRequired
}

export default Icon