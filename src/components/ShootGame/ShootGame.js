import './ShootGame.css';
import { useState } from 'react';
import Container from '../Container/Container';
import GameButton from './GameButton/GameButton';

export default function ShootButton() {
  const [game, setGame] = useState({
    emoji: '🔫',
    msg: 'Find the diamond!',
    playing: true,
  });
  // Game logic
  const shoot = e => {
    const emojis = [...'🔫💣🧨🪓🔪🗡🥊🏴💎'];
    const rEmoji = emojis[Math.round(Math.random() * (emojis.length - 1))];
    if (game.playing && game.emoji !== '💎') {
      setGame({ emoji: rEmoji, msg: 'Try again!', playing: true });
      if (rEmoji === '💎') {
        setGame({ emoji: rEmoji, msg: "You're rich now!", playing: false });
      }
    }
  };
  // Play again
  const again = e => {
    if (!game.playing) {
      setGame({ emoji: '🔫', msg: 'Find the diamond!', playing: true });
    }
  };
  return (
    <Container className='game'>
      <h3 className='game-message'>{game.msg}</h3>
      <Container>
        <GameButton active={game.playing} action={shoot} text={game.emoji} />
        <GameButton active={!game.playing} action={again} text='🔄' />
      </Container>
    </Container>
  );
}
