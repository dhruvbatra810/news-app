import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
const Newssearch = () => {
    const [getquery,setquery] = useState([]);
    const param1 = useParams();
    const url = `https://bing-news-search1.p.rapidapi.com/news/search?q=${param1.category}&count=60&freshness=Day&textFormat=Raw&safeSearch=Off`
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
	
    response.json().then((res)=>{setquery(res.value)} )
})
.catch(err => {
	console.error(err);
});
    },[param1.category])
    console.log(getquery)
    return (
        <div>
            <h1>{param1.category} </h1>
            {
             getquery.map((v)=>{
                 return (
                     <p>{v.name}</p>
                 )
             })

            }
        
        </div>
    )
}
export default  Newssearch