// Popup.js
import './Popup.css'; // Style your popup here

import PropTypes from 'prop-types';

const Popup = ({ isOpen, closePopup, index }) => {
  if (!isOpen) return null;

  return (
    <div className="popup">
      <div className="popup-content">
        <button className="close-button" onClick={closePopup}>X</button>
        <meta httpEquiv="Content-Security-Policy" content="default-src *; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval' http://www.google.com"></meta>
        <iframe src={`https://docs.google.com/forms/d/e/${index}/viewform?embedded=true`} width="640" height="414" frameborder="0" marginheight="0" marginwidth="0">Wird geladen…</iframe>
      </div>
    </div>
  );
};

Popup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closePopup: PropTypes.func.isRequired,
  index: PropTypes.string.isRequired,
};

export default Popup;
