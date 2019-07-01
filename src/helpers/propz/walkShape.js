import PropTypes from 'prop-types';

const walkShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  employeeName: PropTypes.string.isRequired,
  dogName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  dogId: PropTypes.string.isRequired,
  employeeId: PropTypes.string.isRequired,
});


export default { walkShape };
