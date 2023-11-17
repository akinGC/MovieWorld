
import Card from "../component/Card"

export default async function Home({searchParams}) {
  // const getGenere = useSearchParams()
  // let genereValue = getGenere.get('genere')

  const getGenere= searchParams.genere || 'trending'
  // const url =getGenere==='trending'? 'https://jsonplaceholder.typicode.com/users':'https://jsonplaceholder.typicode.com/comments'


  const url = getGenere==='trending'? 'https://moviesdatabase.p.rapidapi.com/titles':'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming'
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'efc7aa481emshb7f16e0ad0fb5aep17d96cjsnfabc8ade8a55',
      'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
  };
  

    const response = await fetch(url, options ,{next:{revalidate:1000}});
    const result = await response.json();
  
  return  (
    <div className=" grid grid-cols-1 sm:grid-cols-4 gap-20 p-5">
      {
        result?.results?.map((itm,key)=>(
          <Card key={key} result={itm}/>
        ))
      }
    </div>
  )

  
  
}