import {useEffect,useState} from 'react'

const useNewstrendingapi = () => {
      const [getquery,setquery] = useState([]);
    useEffect(()=>{
        fetch("https://bing-news-search1.p.rapidapi.com/news?safeSearch=Off&textFormat=Raw", {
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
    },[])
    return getquery;
}

export default useNewstrendingapi