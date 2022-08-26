import './Footer.css';
import { useState, useEffect } from 'react';

// Date setup
const options = {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
};
const userLocale =
  navigator.languages && navigator.languages.length
    ? navigator.languages[0]
    : navigator.language;

const updateDate = date =>
  new Intl.DateTimeFormat(userLocale, options).format(new Date());

// Component
export default function Footer() {
  const [date, setDate] = useState(updateDate);

  // Date live update
  useEffect(() => {
    updateDate();
    setInterval(() => {
      setDate(updateDate);
    }, 1000);
  });

  return (
    <footer>
      <a href='https://github.com/Devs2Rios' target='blank'>
        DEVS2RIOS
      </a>
      {` - ${date}`}
    </footer>
  );
}
