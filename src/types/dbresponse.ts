export type DBResponse = {
    responseHeader:{
        status:number,
        QTime:number,
        params:{
            q:string
        }
    },
    response:{
        numFound:number,
        start:number,
        numFoundExact:boolean,
        docs:DBFilmType[]
    }
}

export type DBFilmType = {
    id:string,
    beschreibung:string,
    netflixid:string,
    picture:string,
    releaseJahr:string,
    searchtitle:string,
    volltextName:string,
    _version_:number
}