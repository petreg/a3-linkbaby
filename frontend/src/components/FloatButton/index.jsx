import PropTypes from "prop-types";
import { Link } from "react-router";
import "./styles.css";

export default function FloatButton({link}) {
  return (
    <div>
      <Link to={link}>
        <button className="floating">+</button>
      </Link>
    </div>
  );
}

FloatButton.propTypes = {
  link: PropTypes.string.isRequired,
}