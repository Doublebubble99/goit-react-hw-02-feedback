import React from 'react';
import PropTypes from 'prop-types';
import { Note } from './Notification.styled';
function Notification({ message }) {
  return <Note>{message}</Note>;
}
export default Notification;
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
