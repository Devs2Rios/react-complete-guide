import './App.css';
import Footer from '../Footer/Footer';
import Member from '../Member/Member';

export default function App() {
  const members = {
    lalo: { nme: 'Eduardo Aire', handle: '@eduairet' },
    pedro: { nme: 'Pedro Ortíz', handle: '@Portizhead' },
  };
  const creator = { nme: 'Devs2Rios', url: 'https://github.com/Devs2Rios' };
  const appTitle = 'React Complete Guide';
  document.title = `${creator.nme} - ${appTitle}`;

  return (
    <div className='App'>
      <header>
        <h1>{appTitle}</h1>
      </header>
      <main>
        <h2>Members</h2>
        <div className='container'>
          {Object.values(members).map(member => (
            <Member
              key={member.handle.replace('@', '')}
              handle={member.handle}
            />
          ))}
        </div>
      </main>
      <Footer creator={creator} />
    </div>
  );
}
