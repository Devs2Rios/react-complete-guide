import './LanguageForm.css';
import { useState } from 'react';

export default function LanguageForm() {
  const langs = [
    { nme: 'Deutsch', submit: 'Einreichen', color: '#FFDE00', flag: '🇩🇪' },
    { nme: 'English', submit: 'Submit', color: '#7FFFD4', flag: '🇺🇸' },
    { nme: 'Español', submit: 'Enviar', color: '#57FF7E', flag: '🇲🇽' },
    { nme: 'Français', submit: 'Soumettre', color: '#FF5EF0', flag: '🇫🇷' },
    { nme: 'Italiano', submit: 'Invia', color: '#0089FF', flag: '🇮🇹' },
    { nme: 'Nederlands', submit: 'Indienen', color: '#FF6F00', flag: '🇳🇱' },
    { nme: 'Русский', submit: 'Подчиниться', color: '#FF4E66', flag: '🇷🇺' },
  ];

  const [favLang, setFavLang] = useState({ nme: '', submit: 'Submit' });

  const handleFavLang = e => {
    const langVal = e.target.value;
    setFavLang({
      nme: langVal,
      submit: langs.find(lang => lang.nme === langVal).submit,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const el = e.target,
      lang = langs.find(lang => lang.submit === el.value);
    document.documentElement.style.setProperty('--accent', lang.color);
    document.getElementById('lang-flag').textContent = lang.flag;
    el.parentElement.reset();
  };

  return (
    <form>
      <legend className='fav-lang-title'>
        Favorite Language <span id='lang-flag'>🏳️</span>
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
      <input
        id='submit-lang'
        type='submit'
        value={favLang.submit}
        onClick={handleSubmit}
      />
    </form>
  );
}
