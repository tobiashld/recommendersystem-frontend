import React, { useRef, useState } from 'react';
import Filmitem from './components/filmitem/filmitem';
import logo from './logo.svg';
import './App.css';
import { FilmitemInterface, FilmitemType } from './types/filmitem';
import TextInput from './components/input/textinput';
import solrservice from './service/solrservice';
import { BiSearch } from 'react-icons/bi'
import Dropdown from './components/dropdown/dropdown';
import useOutsideAlerter from './hooks/useOutsideAlert';
import { DBResponse } from './types/dbresponse';

function App() {
  const [dropdown, setDropdown] = useState(false);
  const [dropdownContent, setDropdownContent] = useState<FilmitemInterface[]>([]);
  const [reload,setReload] = useState(false)
  const [filmList, setFilmList] = useState<FilmitemType[]>([])

  let searchAction = (event : React.KeyboardEvent<HTMLInputElement>) => {
    
    if(event.currentTarget.value && event.currentTarget.value !== ""){
      setDropdown(true);
    }else{
      setDropdownContent([])
      setDropdown(false);
    }
    solrservice.suchFilmeZuVolltext(event.currentTarget.value,handleRequest);
    
    
    
  }

  let handleRequest = (request:any )=>{
    let requestJson : DBResponse = JSON.parse(request)
    if(requestJson && requestJson.response){
      let options = requestJson.response.docs.length > 3?requestJson.response.docs.slice(0,3):requestJson.response.docs;
      let optionsTyped = options.map(item=>{return{
        id:item.id,
        title: item.volltextName, 
        beschreibung: item.beschreibung, 
        imgPath:item.picture, 
        releaseJahr:item.releaseJahr,
        userGivenRating:0,
      }})
      setDropdownContent(optionsTyped)
    }else{throw new Error("Request failed in App.tsx:handleRequest")}
  }

  let changeRating = (id:string, value:number) => {
    let x : FilmitemType[]= [...filmList];
    let index : number = x.findIndex((film)=>film.id === id)
    if(index == -1){
      console.log("Den zu bewertenden Film gibt es nicht in der Filmliste!");
      return;
    }
    x[index].userGivenRating = value;
    setFilmList(x);
    return;
  }

  let handleDropdownClick = (item:FilmitemType|undefined)=>{
    if(item){
      let helperArr = filmList;
      helperArr.push(item)
      setFilmList(helperArr)
      setReload(!reload)
      setDropdown(false)
    }
  }

  return (
    <div className="App">
      <div className="login-box">
          <h3>Recommendersystem</h3>
          <div className='searchbox'>
            <TextInput onKeyUp={(event)=>searchAction(event)} onBlur={()=>setDropdown(true)} icon={<BiSearch />}/>
            {dropdown?<Dropdown items={dropdownContent} onItemClick={handleDropdownClick}/>:<></>}
          </div>

          
          <div className='wrapper'>
            <div className="divider"></div>
          </div>
          <h5>Zum Benutzerprofil hinzugefügte Filme</h5>
          {filmList.map(item=>
              <Filmitem 
                  id={item.id}
                  title={item.title} 
                  beschreibung={item.beschreibung} 
                  releaseJahr={item.releaseJahr} 
                  imgPath={item.imgPath} 
                  userGivenRating={item.userGivenRating}
                  changeRating={(value:number)=>changeRating(item.id,value)}
                  ></Filmitem>)}
      </div>
    </div>
  );
}

export default App;
