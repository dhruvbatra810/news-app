import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';




 const useNewssearchapi = (setsearcharray) => {

  let param1 = (useParams().category)  ;
  param1 = (param1 ?param1:'india');
    // console.log(typeof param1)
     const [getquery,setquery] = useState([]);

    const url = `https://bing-news-search1.p.rapidapi.com/news/search?q=${param1}&count=60&freshness=Day&textFormat=Raw&safeSearch=Off`
    useEffect(()=>{
    fetch(url, {
	"method": "GET",
	"headers": {
		"x-bingapis-sdk": "true",
		"x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
		"x-rapidapi-key": "ecc13ea734msh7696172ee3ee217p1f2623jsn06fbaba36072"
	}
})
.then(response => {
	
    response.json().then((res)=>{setquery(res.value)} );
})
.catch(err => {
	console.error(err);
});
    },[param1])
    
//  AppendArray(searcharray,getquery)  // func append calling 
    // searcharray =getquery
    useEffect(()=>{  const wow=[];
    const l1 = getquery.length;
    for(let i = 0 ;i<l1;i++){
        wow[i] = {...getquery[i],id:i};
    }
    setsearcharray(wow);},[getquery])
    return (
        {param1}
    );
}

export default useNewssearchapi;