import  React from 'react'; 
 
 const Logo = () => {
  return  (
    <svg viewBox="0 0 200 200"  width="500" height="500"  version= "1.1"  >
      <text x="55" y="120"  fill="#968150" fontSize="110px" fontFamily="Hp" >C</text>
      <text x="110" y="120" fill="#968150" fontSize="30px" fontFamily="Hp">o</text>
      <text x="80" y="150" fill ="#968150" fontSize="100px" fontFamily="Hp">L</text>
      <text x="130" y="150" fill ="#968150" fontSize="30px" fontFamily="Hp">aps</text>
      <line x1 = "40" y1 = "40" x2 = "135" y2 = "40" stroke = "#968150" strokeWidth = "1"/>
      <line x1 = "40" y1 = "70" x2 = "130" y2 = "70" stroke = "#968150" strokeWidth = "1"/>
      <line x1 = "40" y1 = "100" x2 = "160" y2 = "100" stroke = "#968150" strokeWidth = "1"/>
      <line x1 = "40" y1 = "130" x2 = "180" y2 = "130" stroke = "#968150" strokeWidth = "1"/>
      <line x1 = "40" y1 = "160" x2 = "180" y2 = "160" stroke = "#968150" strokeWidth = "1"/>
      <line x1 = "40" y1 = "40" x2 = "40" y2 = "160" stroke = "#968150" strokeWidth = "1"/>
    </svg>
  );
}

export default Logo; 