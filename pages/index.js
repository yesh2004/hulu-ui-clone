import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Result from '../components/Result'
import request from '../utils/request'
export default function Home({results}) {
  
  return (
    <div className=''>
      <Head>
        <title>Hulu</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Nav/>
      {console.log(results)}
      <Result results={results}/>

      
    </div>

  )
}

export async function getServerSideProps(context){
  const genre=context.query.genre

  const req=await fetch(`https://api.themoviedb.org/3${request[genre]?.url||request.fetchTrending.url}`)
                        .then(res=>res.json())

  return{
    props:{
      results:req.results
    }
  }
}