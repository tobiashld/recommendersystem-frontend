import { db } from "../store/indexedDB";
import { APIGenreResponse,   DBResponseBereinigt } from "../types/dbresponse";
import { FilmitemType, RecommendFilmItem } from "../types/filmitem";

const serviceFunctions = {
  suchFilmeZuVolltext,
  getFakeFilmArray,
  getRecommendationsForFilms,
  suchFilmeZuId,
  getNeighborRecForFilms,
  getGenres
} 
const dynamicurl = window.location.href.includes("localhost")?"http://localhost:5000":"https://backend-recommendersystem.herokuapp.com"

function suchFilmeZuVolltext(suchString:string,cb:((response:any)=>void)){
    // suchString = suchString.toLowerCase();
    // //suchString = suchString.split(" ").length > 1?'"'+suchString+'"~2':"*"+suchString+"*";
    // let endsuchstring = ""
    // for(let word of suchString.split(" ")){
    //   endsuchstring += "*"+word+"*";
    // }
    
    const http = new XMLHttpRequest();

    //const url = "http://solrrecommendersystem.cf:8984/solr/filme/select?q=searchtitle%3A"+endsuchstring+"&q.op=OR&rows=3"
    //const url = "https://backend-recommendersystem.herokuapp.com/dropdownsearch?searchtitle="+suchString.split(" ").join("+")
    const url = dynamicurl + "/dropdownsearch?searchtitle="+suchString.split(" ").join("+")
    //const url = "http://localhost:5000/dropdownsearch?searchtitle="+suchString.split(" ").join("+")
    http.open("GET",url);
    http.send();
    
    http.onreadystatechange=(e:Event)=>{
      if(http.readyState === 4 && http.status === 200){
        let obj : DBResponseBereinigt = JSON.parse(http.responseText)
        if(obj && obj.response && obj.response.docs){
          console.log("aajajajaja")
          for(let currFilm of obj.response.docs){

            db.table("filmitems").put({...currFilm,picture:"undefined"},currFilm.id).then(value=>{
              if(value){
                console.log("funktioniert")
              }else{
                console.log("funktioniert nicht")
              }
            })
          }
        }
        if(cb)cb(obj)
        
      }
    }


      

    }
function suchFilmeZuId(id:number,cb:((response:any)=>void)){
    
    const http = new XMLHttpRequest();

    const url = dynamicurl + "/get?id="+id
    http.open("GET",url);
    http.send();
    
    http.onreadystatechange=(e:Event)=>{
      if(http.readyState === 4 && http.status === 200){
        if(cb)cb(JSON.parse(JSON.stringify(http.responseText)))
      }
    }


      

    }

function getRecommendationsForFilms(filme:FilmitemType[],cb:((response:RecommendFilmItem[])=>void)){
  const http = new XMLHttpRequest();

    
    const url = dynamicurl + "/get/Sammlung?ids="+filme.map((value:FilmitemType)=>value.id).join("+")

    http.open("GET",url);
    http.send();
    
    http.onreadystatechange=(e:Event)=>{
      if(http.readyState === 4 && http.status === 200){
        let test : {result:RecommendFilmItem[]} = JSON.parse(http.responseText)
        if(cb)cb(test.result)
      }
    }
}
function getNeighborRecForFilms(filme:FilmitemType[],cb:((response:FilmitemType[])=>void)){
  const http = new XMLHttpRequest();

    
  const url = dynamicurl + "/get/Geteiltenachbarn?ids="+filme.map((value:FilmitemType)=>value.id).join("+")

    http.open("GET",url);
    http.send();
    
    http.onreadystatechange=(e:Event)=>{
      if(http.readyState === 4 && http.status === 200){
        let test : {result:FilmitemType[]} = JSON.parse(http.responseText)
        if(cb)cb(test.result)
      }
    }
}

function getGenres(cb:((response:APIGenreResponse)=>void)){
  const http = new XMLHttpRequest();

    
    const url = "https://api.themoviedb.org/3/genre/movie/list?api_key=a7f6382813ad90507449fb80b9881d1b&language=de"

    http.open("GET",url);
    http.send();
    
    http.onreadystatechange=(e:Event)=>{
      if(http.readyState === 4 && http.status === 200){
        if(cb)cb(JSON.parse(http.responseText))
      }
    }
}

function getFakeFilmArray(){
  
  return [
      {
        id:"550",
        title:"Fight Club",
        beschreibung:"A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion. asdflaksfö asd fa f af asd fasdfasdf asdf asdf asdf a sfasd fasdf",
        releaseJahr:"2012",
        imgPath:"/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
        userGivenRating:0
      },
      {
        id:"920",
        title:"Cars",
        beschreibung:"Lightning McQueen, a hotshot rookie race car driven to succeed, discovers that life is about the journey, not the finish line, when he finds himself unexpectedly detoured in the sleepy Route 66 town of Radiator Springs. On route across the country to the big Piston Cup Championship in California to compete against two seasoned pros, McQueen gets to know the town's offbeat characters",
        releaseJahr:"2006",
        imgPath:"/ooYvY9DMEdUHH2dOPHbZmyfMENy.jpg",
        userGivenRating:0
      },
      {
        id:"1",
        imgPath:"/fApFsO2iuhmDjJrNV5J3CcSo9kp.jpg",
        beschreibung:"Softcore erotica star Misty Mundae is one of the main attractions of the campy and sexy BIKINI GIRLS ON DINOSAUR PLANET, which recalls Raquel Welch and the stop-motion creatures of ONE MILLION YEARS B.C. A pair of time traveling aliens find themselves on a strange planet, where the environment is exactly as it was millions of years ago on Earth. While exploring this unique place, they stumble across three primitive babes (Mundae and other softcore stars Ruby LaRocca and Lilly Tiger), who quickly engage the aliens in a steamy cave-lesbian love fest. But will the rampaging, stop-motion dinosaurs roaming the land interrupt their prehistoric passion? BIKINI GIRLS ON DINOSAUR PLANET was directed by veteran B-movie filmmaker David DeCoteau",
        releaseJahr:"2003",
        title:"Bikini Girls on Dinosaur Planet",
        userGivenRating:0
      },
        
      {
        id:"8",
        imgPath:"/pUgCmDbYdKICEjBFDZPt2Ware2G.jpg",
        beschreibung:"Amanda is a divorced woman who makes a living as a photographer. During the Fall of the year Amanda begins to see the world in new and different ways when she begins to question her role in life, her relationships with her career and men and what it all means. As the layers to her everyday experiences fall away insertions in the story with scientists, and philosophers and religious leaders impart information directly to an off-screen interviewer about academic issues, and Amanda begins to understand the basis to the quantum world beneath. During her epiphany as she considers the Great Questions raised by the host of inserted thinkers, she slowly comprehends the various inspirations and begins to see the world in a new way.",
        releaseJahr:"2004",
        title:"What the #$*! Do We (K)now!?",
        userGivenRating:0
      },
      {
        id:"3",
        imgPath:"/6EbXTzRyIGhqmsOeTqBRlUdCHgp.jpg",
        beschreibung:"Robert Sens lives in a degenerate future society. He is an apathetic bureaucrat in a society without values. He finally learns from his foster father that he has already become the victim of a genetic experiment as an egg cell. The latter has separated Robert's hereditary traits of reason, pleasure and aggression and cut up copies of his egg cell. The emotionally cold Robert is left only with reason, but the late side effects cause his cells to deteriorate. To escape the threat of cell death, he sets out to find his genetic brothers.",
        releaseJahr:"1997",
        title:"Cut Character - Tödliche Trennung",
        userGivenRating:0
      },
    ]

}

export default serviceFunctions