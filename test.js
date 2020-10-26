



 const Test =()=>(
 const [counter,setCounter] = React.useState(0)
     const [counter,setCounter] = React.useState(0)




     return(
         <div>
             <butoon onClick={setCounter(counter+1)}/>
             <p>{counter}</p>
         </div>
     )
 )
