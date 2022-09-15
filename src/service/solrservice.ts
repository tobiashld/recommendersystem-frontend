function suchFilmeZuVolltext(suchString:string){

    suchString = suchString.split(" ").length > 1?'"'+suchString+'"~2':"*"+suchString+"*";

    fetch("http://199.247.20.90:8983/solr/filme/select?debugQuery=false&indent=true&q.op=OR&q=volltextName%3A"+suchString+"",
        {
            method: "GET",
            mode:'cors', 
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response=>response.json())
        .then(responsejson=>console.log(responsejson))
        .catch(error=>{throw new Error(error)})
}

export default {
    suchFilmeZuVolltext
}