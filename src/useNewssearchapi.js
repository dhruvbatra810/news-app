import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import  searcharray  from './searcharray';

function AppendArray(arr1, arr2){
  const  l1 = arr1.length;
    const l2 = arr2.length;
    for (let i=0 ; i<l2 ;i++){
    	arr1[i] = {...arr2[i] , id: i};
    }
    return arr1;
}
 const useNewssearchapi = () => {

  let param1 = (useParams().category)  ;
  param1 = (param1 ?param1:'india');
    console.log(typeof param1)
     const [getquery,setquery] = useState([]);

    const url = `https://bing-news-search1.p.rapidapi.com/news/search?q=${param1}&count=60&freshness=Day&textFormat=Raw&safeSearch=Off`
    useEffect(()=>{
     fetch(url, {
	"method": "GET",
	"headers": {
		"x-bingapis-sdk": "true",
		"x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
		"x-rapidapi-key": "be363280d7msh6efda7e60463665p144fa5jsn95fcb54c10ea"
	}
})
.then(response => {
	
    response.json().then((res)=>{setquery(res.value)} );
})
.catch(err => {
	console.error(err);
});
    },[param1])
    AppendArray(searcharray,getquery);
    // console.log(searcharray)
    return (
        {param1}
    );
}

export default useNewssearchapi;