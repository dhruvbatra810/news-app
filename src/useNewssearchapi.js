import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';




 const useNewssearchapi = (setsearcharray,offset,searcharray) => {

  let param1 = (useParams().category)  ;
  param1 = (param1 ?param1:'india');
    // console.log(typeof param1)
     const [getquery,setquery] = useState([]);

    const url = `https://bing-news-search1.p.rapidapi.com/news/search?q=${param1}&count=40&freshness=Day&textFormat=Raw&offset=${offset}&safeSearch=Off`
    useEffect(()=>{
    fetch(url, {
	"method": "GET",
	"headers": {
		"x-bingapis-sdk": "true",
		"x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
		"x-rapidapi-key": "0a5c0ba13dmsh57afe7533bde53bp185479jsn62cb4fd0bb8c"
	}
})
.then(response => {
	
    response.json().then((res)=>{setquery(res.value)} );
})
.catch(err => {
	console.error(err);
});
    },[param1,offset])
    
//  AppendArray(searcharray,getquery)  // func append calling 
    // searcharray =getquery
    
    useEffect(()=>{  const wow=[];
    const l1 = getquery.length;
    let l = 0;
        if(offset != 0 )
     l =searcharray.length;
    for(let i = 0 ;i<l1;i++){
        wow[i] = {...getquery[i],id:i+l};
    }
    if(offset == 0)
    {console.log(offset,"offset");setsearcharray(wow);}
    else
    setsearcharray(e => [...e,...wow]);},[getquery])
    
    return (
        {param1}
    );
}

export default useNewssearchapi;