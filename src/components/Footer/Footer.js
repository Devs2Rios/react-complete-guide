import './Footer.css';
import { useState, useEffect } from 'react';

// Component
export default function Footer(props) {
  // Date setup
  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  };
  // User browser localization
  const userLocale =
    navigator.languages && navigator.languages.length
      ? navigator.languages[0]
      : navigator.language;
  // Date updater function
  const updateDate = date =>
    new Intl.DateTimeFormat(userLocale, options).format(new Date());
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
      {`Created by `}
      <a href={props.creator.url} target='blank'>
        {props.creator.nme}
      </a>
      {` - ${date}`}
    </footer>
  );
}
