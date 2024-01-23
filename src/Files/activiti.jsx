const Activiti=(prop)=>
{
 return(
  <div  className="p-10 rounded-lg flex-grow" style={{backgroundColor:prop.bgColor }}>


    <div className="font-bold text-4xl text-center">{prop.head}</div>
    <div  className="font-bold text-4xl text-center">{prop.num}</div>
   
  </div>



  )
}

export default Activiti