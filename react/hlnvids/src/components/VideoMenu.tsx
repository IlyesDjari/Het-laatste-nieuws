import '../layouts/videomenu.scss';
import { BrowserRouter ,Routes, Route, Link } from 'react-router-dom';
import Fun from './Fun';

function VideoMenu() {

  function refreshPage(){
    setTimeout(() => {
      window.location.reload();
    },1000)
  }
  
  return (

    <>
    <BrowserRouter >
      <Routes>
    <Route path='PLrV16pC7dwvzQn5z-aIbZj9Gtj3njScyq' element={<Fun/>}></Route>
    <Route path='PLHp9SuwqGeS48fRDw_p-BTtfOKZZZvHm1' element={<Fun/>}></Route>
    <Route path='PLS3XGZxi7cBVTzEE4Sim9UuNKnUJq9Vkh' element={<Fun/>}></Route>
    <Route path='PLQ_voP4Q3cfcpg4QLYZfaizdiuL5lccmF' element={<Fun/>}></Route>
    <Route path='PLfyPvwZGoOMbJ7U_rDvUXEcgKppcKJmlq' element={<Fun/>}></Route>
    <Route path='PLWW3MIqAKZfgYtzj6IyIa04XWCDUrPkOM' element={<Fun/>}></Route>
    <Route path='PLSyY1udCyYqDHbGDJRyVtoukjeKl6r8jS' element={<Fun/>}></Route>
    <Route path='PL_UIpCpN21bn8nsr6Mkoiw14PNwtVw7xB' element={<Fun/>}></Route>
   
    


    </Routes>
    <div className="leftMenu">
        <Link onClick={refreshPage} className='nieuws' to={"/PLS3XGZxi7cBVTzEE4Sim9UuNKnUJq9Vkh"}>
        Nieuws
        </Link>
        <Link onClick={refreshPage} className='fun' to={"/PLrV16pC7dwvzQn5z-aIbZj9Gtj3njScyq"}>
        Fun
        </Link>
        <Link onClick={refreshPage} className='sport' to={"/PLQ_voP4Q3cfcpg4QLYZfaizdiuL5lccmF"}>
        Sport
        </Link>
        <Link onClick={refreshPage} className='tech' to={"/PLHp9SuwqGeS48fRDw_p-BTtfOKZZZvHm1"}>
        Tech
        </Link>
        <Link onClick={refreshPage} className='showbizz' to={"/PLfyPvwZGoOMbJ7U_rDvUXEcgKppcKJmlq"}>
        Showbizz
        </Link>
        <Link onClick={refreshPage} className='eten' to={"/PLWW3MIqAKZfgYtzj6IyIa04XWCDUrPkOM"}>
        Eten
        </Link>
        <Link onClick={refreshPage} className='regionaal' to={"/PLSyY1udCyYqDHbGDJRyVtoukjeKl6r8jS"}>
        Regionaal
        </Link>
        <Link onClick={refreshPage} className='random' to={"/PL_UIpCpN21bn8nsr6Mkoiw14PNwtVw7xB"}>
        Gaming
        </Link>
      </div>
      </BrowserRouter>
      </>
  )
}

export default VideoMenu;