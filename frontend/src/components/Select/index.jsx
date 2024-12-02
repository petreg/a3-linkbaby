import PropTypes from "prop-types";
import './styles.css';

export default function Select({ options, value, onChange }) {
  return (
    <select value={value} onChange={onChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ),
  value: PropTypes.string,
  onChange: PropTypes.func,
};