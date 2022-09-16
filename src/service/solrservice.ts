function suchFilmeZuVolltext(suchString:string){

    suchString = suchString.split(" ").length > 1?'"'+suchString+'"~2':"*"+suchString+"*";

    fetch("https://solrrecommendersystem.cf:8984/solr/filme/select?debugQuery=false&indent=true&q.op=OR&q=volltextName%3A"+suchString+"",
        {
            method: "GET",
            mode:'cors', 
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response=>response.json())
        .then((responsejson)=>
            mapping(responsejson)
            )
        .catch(error=>{throw new Error(error)})
        

        let test = 
        [
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
            }
          ]

          return Promise.resolve((result:any)=>test)

    }

function mapping(responseJson:any){
  console.log(responseJson)
}



export default {
    suchFilmeZuVolltext
}