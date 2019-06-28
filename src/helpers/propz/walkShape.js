import PropTypes from 'prop-types';

const walkShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  DogId: PropTypes.string.isRequired,
  employeeId: PropTypes.string.isRequired,
});


export default { walkShape };
