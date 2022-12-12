import '../layouts/header.scss';

function Header()  {
  return (
   
    <div className='navContainer'>
      <img className='logo' src={require('../images/logoBW.png')} alt="" />

      <ul>
       <li>Nieuws</li>
       <li>Sport</li>
       <li>Showbizz</li>
       <li>Tech</li>
       <li>Fun</li>
       <li>Regionaal</li>
       <li className='video'>Video</li>
      <li>Mijn gids</li>
      </ul>

     <div className='accountNav'>
       <button className='log'>Login</button>
       <button className="reg">Registreer</button>
       <img className='profilepicture' src={require("../images/profilepicture.png")} alt="profilePicture" />
     </div>
    </div>
  )
}

export default Header;