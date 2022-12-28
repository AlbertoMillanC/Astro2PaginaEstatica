import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Button() {
    const [subscribe, setSubcribe] = useState(false)
  return (
    <>
      <button
        onClick={() => {
            toast.success("felicidades, ya estas suscrito")
            setSubcribe(!subscribe)


        }}    
    >
        
        {
            subscribe ? " ya estas suscrito": "suscribete"
        }
        
        </button>
        <ToastContainer/>

    </>
  );
}

export default Button;

