import PropTypes from 'prop-types';

const staffShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  hireDate: PropTypes.string.isRequired,
});


export default { staffShape };
