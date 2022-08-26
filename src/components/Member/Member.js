import './Member.css';
import { useState, useEffect } from 'react';

export default function Member(props) {
  const randomEmoji = () => {
    const emojis = [...'🌐💙🖤🖥📱💻🛵🎧🥃🍺🌮🍝🥩🌝🌞🐱🐶🤡💩💀'];
    return emojis[Math.round(Math.random() * (emojis.length - 1))];
  };

  const [emoji, setEmoji] = useState(randomEmoji);

  useEffect(() => {
    const updateEmoji = setInterval(() => {
      setEmoji(randomEmoji);
    }, 1000);
    return () => clearInterval(updateEmoji);
  }, [emoji]);

  return (
    <div className='member-container'>
      <strong>GitHub</strong>
      <span className='emoji'>{emoji}</span>
      <a
        href={`https://github.com/${props.handle.replace('@', '')}`}
        target='blank'
      >
        {props.handle}
      </a>
    </div>
  );
}
