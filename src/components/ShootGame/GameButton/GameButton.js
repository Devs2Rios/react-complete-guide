import './GameButton.css';

export default function GameButton(props) {
  return (
    <button
      className={`game-button ${props.active ? 'active' : 'inactive'}`}
      onClick={props.action}
    >
      {props.text}
    </button>
  );
}
