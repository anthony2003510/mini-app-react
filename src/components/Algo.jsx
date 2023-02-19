import {useState} from 'react'
export function Algo() {
    var [cont, setCont] = useState(0)
    
    function sumCont(){
        setCont(cont = cont+1)
    };
  return (
    <>
        <div className="text-white">{cont}</div>
        <button onClick={sumCont}>Click</button>    
    </>
   
  )
}

export default Algo