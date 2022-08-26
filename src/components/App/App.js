import './App.css';
import Footer from '../Footer/Footer';
import Member from '../Member/Member';
import Container from '../Container/Container';
import ShootGame from '../ShootGame/ShootGame';

export default function App() {
  const members = {
    lalo: { nme: 'Eduardo Aire', handle: '@eduairet' },
    pedro: { nme: 'Pedro Ortíz', handle: '@Portizhead' },
  };
  const creator = { nme: 'Devs2Rios', url: 'https://github.com/Devs2Rios' };
  const appTitle = 'React Playing Patio';
  document.title = `${creator.nme} - ${appTitle}`;

  return (
    <div className='App'>
      <header>
        <h1>{appTitle}</h1>
        <ShootGame />
      </header>
      <main>
        <h2>Members</h2>
        <Container>
          {Object.values(members).map(member => (
            <Member
              key={member.handle.replace('@', '')}
              handle={member.handle}
            />
          ))}
        </Container>
      </main>
      <Footer creator={creator} />
    </div>
  );
}
