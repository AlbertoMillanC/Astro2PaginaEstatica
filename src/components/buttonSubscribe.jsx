import { useState } from "react";


function Button() {
    const [subscribe, setSubcribe] = useState(false)
  return (
    <div>
      <button
        onClick={() => setSubcribe(!subscribe)}    
    >
        
        {
            subscribe ? " ya estas suscrito": "suscribete"
        }
        
        </button>
    </div>
  );
}

export default Button;

