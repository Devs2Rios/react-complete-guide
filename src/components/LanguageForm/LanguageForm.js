import './LanguageForm.css';
import { useState } from 'react';

export default function LanguageForm(props) {
  const langs = [
    {
      nme: 'Deutsch',
      submit: 'Einreichen',
      color: '#FFDE00',
      flag: '🇩🇪',
      locl: 'de-DE',
      title: 'REACT-SPIELPLATZ',
      mtitle: 'Mitglieder',
      ftitle: 'LIEBLINGSSPRACHE',
      quotes: Array.from({ length: 3 }, _ => ''),
    },
    {
      nme: 'English',
      submit: 'Submit',
      color: '#7FFFD4',
      flag: '🇺🇸',
      locl: 'en-US',
      title: 'REACT PLAYING PATIO',
      mtitle: 'Members',
      ftitle: 'FAVORITE LANGUAGE',
      quotes: Array.from({ length: 3 }, _ => ''),
    },
    {
      nme: 'Español',
      submit: 'Enviar',
      color: '#57FF7E',
      flag: '🇲🇽',
      locl: 'es-MX',
      title: 'PATIO DE JUEGOS DE REACT',
      mtitle: 'Miembros',
      ftitle: 'LENGUAJE FAVORITO',
      quotes: Array.from({ length: 3 }, _ => ''),
    },
    {
      nme: 'Français',
      submit: 'Soumettre',
      color: '#FF5EF0',
      flag: '🇫🇷',
      locl: 'fr-FR',
      title: 'AIRE DE JEUX DE REACT',
      mtitle: 'Membres',
      ftitle: 'LANGUE PRÉFÉRÉE',
      quotes: Array.from({ length: 3 }, _ => ''),
    },
    {
      nme: 'Italiano',
      submit: 'Invia',
      color: '#0089FF',
      flag: '🇮🇹',
      locl: 'it-IT',
      title: 'IL PARCO GIOCHI DI REACT',
      mtitle: 'Membri',
      ftitle: 'LINGUA PREFERITA',
      quotes: Array.from({ length: 3 }, _ => ''),
    },
    {
      nme: 'Nederlands',
      submit: 'Indienen',
      color: '#FF6F00',
      flag: '🇳🇱',
      locl: 'nl-NL',
      title: "REACT'S SPEELPLAATS",
      mtitle: 'Leden',
      ftitle: 'FAVORIETE TAAL',
      quotes: Array.from({ length: 3 }, _ => ''),
    },
    {
      nme: 'Русский',
      submit: 'Подчиниться',
      color: '#FF4E66',
      flag: '🇷🇺',
      locl: 'ru-RU',
      title: 'ДЕТСКАЯ ПЛОЩАДКА РЕАКТ',
      mtitle: 'Члены',
      ftitle: 'ЛЮБИМЫЙ ЯЗЫК',
      quotes: Array.from({ length: 3 }, _ => ''),
    },
  ];
  // Quotes
  // de
  langs[0].quotes[0] = 'AUFNEHMEN DURCH KLICKEN AUF 🔫';
  langs[0].quotes[1] = 'SCHIEßEN SIE, BIS SIE DAS 💎 FINDEN';
  langs[0].quotes[2] = 'DU BIST JETZT REICH!';
  // en
  langs[1].quotes[0] = 'SHOOT BY CLICKING THE 🔫';
  langs[1].quotes[1] = 'SHOOT UNTIL YOU FIND THE 💎';
  langs[1].quotes[2] = "YOU'RE RICH NOW!";
  // es
  langs[2].quotes[0] = 'DISPARA HACIENDO CLIC EN LA 🔫';
  langs[2].quotes[1] = 'DISPARA HASTA QUE ENCUENTRES EL 💎';
  langs[2].quotes[2] = '¡AHORA ERES RICO!';
  // fr
  langs[3].quotes[0] = 'TIREZ EN CLIQUANT SUR LA 🔫';
  langs[3].quotes[1] = "TIREZ JUSQU'À CE QUE VOUS TROUVEZ LE 💎";
  langs[3].quotes[2] = 'TU ES RICHE MAINTENANT !';
  // it
  langs[4].quotes[0] = 'SCATTA CLICCANDO SULLA 🔫';
  langs[4].quotes[1] = 'SPARA FINO A TROVARE IL 💎';
  langs[4].quotes[2] = 'SEI RICCO ORA!';
  // nl
  langs[5].quotes[0] = 'SCHIET DOOR OP DE 🔫 TE KLIKKEN';
  langs[5].quotes[1] = 'SCHIETEN TOT JE DE 💎 VINDT';
  langs[5].quotes[2] = 'JE BENT NU RIJK!';
  // ru
  langs[6].quotes[0] = 'СНИМАЙТЕ, НАЖИМАЯ НА 🔫';
  langs[6].quotes[1] = 'СТРЕЛЯЙ, ПОКА НЕ НАЙДЕШЬ 💎';
  langs[6].quotes[2] = 'ВЫ ТЕПЕРЬ БОГАТЫ!';
  // Preset
  const defaultLang = {
    nme: '',
    submit: 'Submit',
    ftitle: 'FAVORITE LANGUAGE',
  };
  // State
  const [favLang, setFavLang] = useState({ ...defaultLang });
  // Event handlers
  // Favorite language
  const handleFavLang = e => {
    const langVal = e.target.value,
      lang = langs.find(lang => lang.nme === langVal);
    setFavLang({
      nme: langVal,
      submit: lang.submit,
      ftitle: lang.ftitle,
    });
  };
  // Submit
  const handleSubmit = e => {
    e.preventDefault();
    const el = e.target.lastChild,
      lang = langs.find(lang => lang.submit === el.value);
    document.documentElement.style.setProperty('--accent', lang.color);
    document.getElementById('lang-flag').textContent = lang.flag;
    el.value = lang.submit;
    props.handleLang(lang.locl, lang.title, lang.mtitle, lang.quotes);
  };
  // Component render
  return (
    <form onSubmit={handleSubmit}>
      <legend className='fav-lang-title'>
        {favLang.ftitle} <span id='lang-flag'>🏳️</span>
      </legend>
      <span className='radio-container'>
        {langs.map(lang => {
          const langid = lang.nme.slice(0, 2).toLocaleLowerCase();
          return (
            <span className='radio-el' key={langid}>
              <input
                type='radio'
                id={langid}
                key={langid}
                name='langs'
                value={lang.nme}
                onClick={handleFavLang}
              />
              <label key={`${langid}lb`} htmlFor={langid}>
                {lang.nme}
              </label>
            </span>
          );
        })}
      </span>
      <input id='submit-lang' type='submit' value={favLang.submit} />
    </form>
  );
}
