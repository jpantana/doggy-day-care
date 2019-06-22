import PropTypes from 'prop-types';

const dogShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
  talents: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
});

export default { dogShape };
