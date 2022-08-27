import './ShootGame.css';
import { useState } from 'react';
import Container from '../Container/Container';
import GameButton from './GameButton/GameButton';

export default function ShootButton() {
  const preset = {
    emoji: '🔫',
    msg: 'Shoot by clicking the 🔫',
    playing: true,
  };
  const [game, setGame] = useState({ ...preset });
  // Game logic
  const shoot = e => {
    const emojis = [...'🔫💣🧨🪓🔪🗡🥊🏴💎'];
    const rEmoji = emojis[Math.round(Math.random() * (emojis.length - 1))];
    if (game.playing && game.emoji !== '💎') {
      setGame({
        ...game,
        emoji: rEmoji,
        msg: 'Shoot until you find the 💎',
      });
      if (rEmoji === '💎') {
        setGame({ emoji: rEmoji, msg: "You're rich now!", playing: false });
      }
    }
  };
  // Play again
  const again = e => {
    if (!game.playing) {
      setGame({ ...preset });
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
