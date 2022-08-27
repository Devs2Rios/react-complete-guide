import './App.css';
import { useState } from 'react';
import Footer from '../Footer/Footer';
import Member from '../Member/Member';
import Container from '../Container/Container';
import ShootGame from '../ShootGame/ShootGame';
import LanguageForm from '../LanguageForm/LanguageForm';

export default function App() {
  // States
  const [userLocale, setUserLocale] = useState('en-US');
  const [title, setTitle] = useState('REACT PLAYING PATIO');
  const [membersTitle, setMembersTitle] = useState('Members');
  const [gameQuotes, setGameQuotes] = useState([
    'SHOOT BY CLICKING THE 🔫',
    'SHOOT UNTIL YOU FIND THE 💎',
    "YOU'RE RICH NOW!",
  ]);
  // Variables
  const members = {
    lalo: { nme: 'Eduardo Aire', handle: '@eduairet' },
    pedro: { nme: 'Pedro Ortíz', handle: '@Portizhead' },
  };
  const creator = { nme: 'Devs2Rios', url: 'https://github.com/Devs2Rios' };
  // Event handlers
  const handleLang = (locl, title, mtitle, quotes) => {
    setUserLocale(locl);
    setTitle(title);
    setMembersTitle(mtitle);
    setGameQuotes(quotes);
    document.title = `${creator.nme} - ⚛ ${title} ⚛`;
  };
  // App component
  return (
    <div className='App'>
      <header>
        <h1>{`⚛ ${title} ⚛`}</h1>
        <ShootGame quotes={gameQuotes} />
      </header>
      <main>
        <LanguageForm handleLang={handleLang} />
        <h2 className='members-title'>{membersTitle}</h2>
        <Container>
          {Object.values(members).map(member => (
            <Member
              key={member.handle.replace('@', '')}
              handle={member.handle}
            />
          ))}
        </Container>
      </main>
      <Footer creator={creator} locl={userLocale} />
    </div>
  );
}
