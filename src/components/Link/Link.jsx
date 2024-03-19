import PropTypes from 'prop-types';

const Link = ({route}) => {
  return (
    <li className="mr-4 hover:bg-yellow-200 rounded-lg px-3">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

Link.propTypes ={
  route: PropTypes.object
}

export default Link;
