 import {useEffect, useState} from 'react';
import icon from '../assets/logo.png';

 
import '../app.css';
export const Header = () => {

  const [theme, setTheme] = useState("light");
  
  useEffect(()=>{
   
     document.documentElement.removeAttribute("class")
     document.documentElement.classList.add(theme)

  },[theme]);
 

  return (
   
<div className="boxBar">

  <div className="icon">
    <img src={icon} alt="iconImage"  className='iconImage'/>
    </div>

    <div className="header">
      <p className='headerText'>task mate</p>
    </div>



    <div className='themeSelector'>
      <div className="round1" onClick={()=>setTheme("light")}></div>
      <div className="round2" onClick={()=>setTheme("black")}></div>
      <div className="round3" onClick={()=>setTheme("spider")} >
        <div className="lines l1"></div>
        <div className="lines l2"></div>
       
        <div className="lines l3"></div>
        <div className="lines l4"></div>
      </div>
      <div className="round4" onClick={()=>setTheme("art")}>
      <div className="lines l1"></div>
        <div className="lines l2"></div>
        
        <div className="lines l3"></div>
        <div className="lines l4"></div>
      </div>
    </div>

   


</div>

  )
}
