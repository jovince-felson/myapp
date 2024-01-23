import Heading from "./Heading";
import Activiti from "./Files/activiti";
import Activitys from "./Files/Activitys";


function App() {
  return (
    <div className="bg-black p-[70px]">
      <div className="bg-white p-5px rounded-lg py-10 px-16">
        <Heading />

        <div className="flex gap-2 flex-wrap mt-5">
          <Activiti head="Trichy" num="23" bgColor="#8272DA"></Activiti>
          <Activiti head="December" num="14:03:34" bgColor="#FD6663"></Activiti>
          <Activiti head="React" num="Build Using" bgColor="#FCA201"></Activiti>
          <Activitys/>
        
        </div>
       
      </div>
    </div>
  );
}
export default App;
