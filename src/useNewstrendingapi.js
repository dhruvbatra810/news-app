import {useEffect,useState} from 'react'


// function AppendArray(arr1, arr2){
//     arr1=[];
//   const  l1 = arr1.length;
//     const l2 = arr2.length;
//     for (let i=0 ; i<l2 ;i++){
//     	arr1[i] = {...arr2[i] , id: i};
//     }
//     return arr1;
// }
function callme (settrendingarray, getquery){
  

}
const useNewstrendingapi = (settrendingarray) => {
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
	// AppendArray(trendingarray,getquery)
	// console.log(trendingarray)
    // callme(settrendingarray,getquery)
    useEffect(()=>{  const wow=[];
    const l1 = getquery.length;
    for(let i = 0 ;i<l1;i++){
        wow[i] = {...getquery[i],id:i};
    }
    settrendingarray(wow);},[getquery])
    // settrendingarray(getquery)
    return ;
}

export default useNewstrendingapi
