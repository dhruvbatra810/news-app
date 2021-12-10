import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';


 const useNewssearchapi = () => {
//         const queryParams = new URLSearchParams(window.location.search);
// const param1 = queryParams.get('category');
// console.log(param1) // 55 test null
  const param1 = useParams().category;

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
    },[])
    return (
        {param1,getquery}
    );
}

export default useNewssearchapi;