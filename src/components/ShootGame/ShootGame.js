import './ShootGame.css';
import { useState } from 'react';
import Container from '../Container/Container';
import GameButton from './GameButton/GameButton';

export default function ShootGame(props) {
  // Preset
  const preset = {
    emoji: '🔫',
    msg: 0,
    playing: true,
  };
  const [game, setGame] = useState({ ...preset });
  // Game logic
  const shoot = e => {
    const emojis = [...'🔫💣🧨🪓🔪🗡🥊🏴💎'];
    const rEmoji = emojis[Math.round(Math.random() * (emojis.length - 1))];
    if (game.playing && game.emoji !== '💎') {
      setGame(prevState => ({
        ...prevState,
        emoji: rEmoji,
        msg: 1,
      }));
      if (rEmoji === '💎') {
        setGame({ emoji: rEmoji, msg: 2, playing: false });
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
      <h3 className='game-message'>{props.quotes[game.msg]}</h3>
      <Container>
        <GameButton active={game.playing} action={shoot} text={game.emoji} />
        <GameButton active={!game.playing} action={again} text='🔄' />
      </Container>
    </Container>
  );
}
