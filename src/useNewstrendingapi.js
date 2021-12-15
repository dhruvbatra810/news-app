import {useEffect,useState} from 'react'


const useNewstrendingapi = (settrendingarray,trendingarray,offset) => {
      const [getquery,setquery] = useState([]);
    useEffect(()=>{
        fetch(`https://bing-news-search1.p.rapidapi.com/news?count=10&offset=${offset}&safeSearch=Off&textFormat=Raw`, {
	"method": "GET",
	"headers": {
		"x-bingapis-sdk": "true",
		"x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
		"x-rapidapi-key": "0a5c0ba13dmsh57afe7533bde53bp185479jsn62cb4fd0bb8c"
	}
})
.then(response => {
	
    response.json().then((res)=>{setquery(res.value)} )
})
.catch(err => {
	console.error(err);
});
    },[offset])
	// AppendArray(trendingarray,getquery)
	// console.log(trendingarray)
    // callme(settrendingarray,getquery)
    useEffect(()=>{  const wow=[];
    const l1 = getquery.length;
    const l = trendingarray.length;

    for(let i = 0 ;i<l1;i++){
        wow[i] = {...getquery[i],id:i+l};
    }
   
    settrendingarray(e =>[...e,...wow]);},[getquery])
    // settrendingarray(getquery)
  
    return ;
}

export default useNewstrendingapi
