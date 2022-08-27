import './Footer.css';
import { useState, useEffect } from 'react';

// Component
export default function Footer(props) {
  // Date setup
  const options = {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  };
  // Date updater function
  const updateDate = date =>
    new Intl.DateTimeFormat(props.locl, options).format(new Date());
  // State
  const [date, setDate] = useState(updateDate);
  // Date live update
  useEffect(() => {
    const now = setInterval(() => {
      setDate(updateDate);
    }, 1000);
    return () => clearInterval(now);
  });
  // Component
  return (
    <footer>
      <a href={props.creator.url} target='blank'>
        {`${props.creator.nme}`.toUpperCase()}
      </a>
      <span>{date}</span>
    </footer>
  );
}
