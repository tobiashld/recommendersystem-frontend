import React, { useState } from 'react';
import Filmitem from './components/filmitem/filmitem';
import logo from './logo.svg';
import './App.css';
import { FilmitemType } from './types/filmitem';
import TextInput from './components/input/textinput';
import solrservice from './service/solrservice';
import { Search } from '@mui/icons-material';

function App() {
  const [benutzerkennung, setBenutzerkennung] = useState("");

  const filmList : FilmitemType[] = [
    {
      title:"Fight Club",
      beschreibung:"A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion. asdflaksfö asd fa f af asd fasdfasdf asdf asdf asdf a sfasd fasdf",
      releaseJahr:"2012",
      imgPath:"/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg"
    },
    {
      title:"Cars",
      beschreibung:"Lightning McQueen, a hotshot rookie race car driven to succeed, discovers that life is about the journey, not the finish line, when he finds himself unexpectedly detoured in the sleepy Route 66 town of Radiator Springs. On route across the country to the big Piston Cup Championship in California to compete against two seasoned pros, McQueen gets to know the town's offbeat characters",
      releaseJahr:"2006",
      imgPath:"/ooYvY9DMEdUHH2dOPHbZmyfMENy.jpg"
    }
  ]

  return (
    <div className="App">
      <div className="login-box">
          <h3>Recommendersystem</h3>
          <TextInput onKeyUp={(event)=>solrservice.suchFilmeZuVolltext(event.currentTarget.value)} icon={<Search />} />
          
          <div className='wrapper'>
            <div className="divider"></div>
          </div>
          {filmList.map(item=><Filmitem title={item.title} beschreibung={item.beschreibung} releaseJahr={item.releaseJahr} imgPath={item.imgPath}></Filmitem>)}
      </div>
    </div>
  );
}

export default App;
