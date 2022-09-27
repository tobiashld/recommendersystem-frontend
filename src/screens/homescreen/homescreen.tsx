import React, {useState} from 'react'
import { BiSearch } from 'react-icons/bi';
import { GrFormNextLink } from 'react-icons/gr';
import Dropdown from '../../components/dropdown/dropdown';
import Filmitem from '../../components/filmitem/filmitem';
import TextInput from '../../components/input/textinput';
import RecommendationModal from '../../components/modal/modal';
import solrservice from '../../service/backendconnection';
import { addError, clearError } from '../../store/error/slice';
import { useAppDispatch } from '../../store/error/store';
import { DBResponse } from '../../types/dbresponse';
import { FilmitemInterfaceBewertet, FilmitemType, FilmitemTypeBewertet, RecommendFilmItem } from '../../types/filmitem';
import './homescreen.css'

function Homescreen() {
  const dispatch = useAppDispatch()
  const [dropdown, setDropdown] = useState(false);
  const [dropdownContent, setDropdownContent] = useState<FilmitemInterfaceBewertet[]>([]);
  const [reload,setReload] = useState(false)
  const [recommendationReady,setRecommendationReady] = useState(false);
  const [filmList, setFilmList] = useState<FilmitemTypeBewertet[]>([])
  const [recommendationfilmList, setRecommendationFilmList] = useState<RecommendFilmItem[]|undefined>([])
  const [isHoveringOverNext,setIsHoveringOverNext] = useState(false)

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
      let optionsTyped :FilmitemTypeBewertet[] = options.map(item=>{return{
        ...item,
        userGivenRating:1,
      }})
      setDropdownContent(optionsTyped)
    }else{throw new Error("Request failed in App.tsx:handleRequest")}
  }

  let changeRating = (id:string, value:number) => {
    //dispatch(clearError({id:0}))
    let x : FilmitemTypeBewertet[]= [...filmList];
    let index : number = x.findIndex((film)=>film.id === id)
    if(index === -1){
      return;
    }
    x[index].userGivenRating = value === 0?1:value;
    setFilmList(x);
    return;
  }

  let handleDropdownClick = (item:FilmitemTypeBewertet|undefined)=>{
    if(item){
      if(!filmList.find(filmitem=>filmitem.id === item.id)){
        let helperArr = filmList;
        helperArr.push(item)
        setFilmList(helperArr)
      }
      setReload(!reload)
      setDropdown(false)
    }
  }

  let handleRecommendation = ()=>{
    if(filmList.length <= 0){
      dispatch(addError({
        type:"error",
        title:"Zu wenig Filme",
        message:"Du musst mindestens einen Film hinzugefügt haben",
        handleClose:(id:number)=>dispatch(clearError({id:id}))
      }))
    }else{
      //request und scheiß
      
      //let recFilmlist = solrservice.getFakeFilmArray()
      // if(recFilmlist.length > 6){
      //   recFilmlist = recFilmlist.slice(0,6)
      // }
      setRecommendationReady(true);
      solrservice.getRecommendationsForFilms(filmList,(response)=>{
        console.log(response)
        setRecommendationFilmList(response);
        })
    }
  }

  let deleteItem = (item:FilmitemType|undefined)=>{
    if(item){
      let index = filmList.findIndex(filmitem=>filmitem.id === item.id)
      if(index !== -1){
        let helperArr = filmList;
        helperArr.splice(index,1)
        setFilmList(helperArr)
      }
      setReload(!reload)
      setDropdown(false)
    }
  }

  return (
    <>
      {recommendationReady?<RecommendationModal items={recommendationfilmList} onClose={()=>{setRecommendationReady(false);setRecommendationFilmList(undefined)}}/>:<></>}
      <div className="App">
        
        <div className="login-box">
          
            <h3>Recommendersystem</h3>
            <div className='searchbox'>
              <TextInput onKeyUp={(event)=>searchAction(event)} onBlur={()=>setDropdown(false)} icon={<BiSearch />} onFocusPointOut={true}/>
              {dropdown?<Dropdown items={dropdownContent} onItemClick={handleDropdownClick}/>:<></>}
            </div>

            
            <div className='wrapper'>
              <div className="divider"></div>
            </div>
            <h5>Zum Benutzerprofil hinzugefügte Filme</h5>
            {filmList.map((item,index)=>
                <Filmitem 
                    key={index}
                    id={item.id}
                    netflixid={item.id}
                    searchtitle={item.searchtitle}
                    volltextName={item.volltextName} 
                    beschreibung={item.beschreibung} 
                    releaseJahr={item.releaseJahr} 
                    picture={item.picture} 
                    userGivenRating={item.userGivenRating}
                    changeRating={(value:number)=>changeRating(item.id,value)}
                    onDelete={(item)=>{deleteItem(item)}}
                    ></Filmitem>)}
        </div>
        <div className='fixed-next-button' onClick={()=>{handleRecommendation()}} onMouseOver={()=>setIsHoveringOverNext(true)} onMouseOut={()=>setIsHoveringOverNext(false)}>
              {isHoveringOverNext?<h6 className='fixed-next-button-text'>Recommendation</h6>:<></>}
              <GrFormNextLink className='fixed-next-button-icon'/>
        </div>
      </div>
    </>
  );
}

export default Homescreen