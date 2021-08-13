
import './style.scss';

function Button({ label, onClick }) {
  return <button className="button-general" onClick={onClick}>{label}</button>;
}

export default Button;