import './App.css';
import GetFormData from './Components/GetFormData';
import ClassComponent from './Components/ClassComponent';
import FunctionComponent from './Components/FunctionComponent';
import GetInputBoxValue from './Components/GetInputBoxValue';
import PropsViaClassCom from './Components/PropsViaClassCom';
import PropsViaFuncCom from './Components/PropsViaFuncCom';
import ShowAndHIdeElements from './Components/ShowAndHIdeElements';
import ConditionalRenderingIfElse from './Components/ConditionalRenderingIfElse';
import ConditionalRenderingElseIF from './Components/ConditionalRenderingElseIF';
import FunctionasProps from './Components/FunctionasProps';

function App() {

  function call(){
    alert("Hello i am  App Component");
  }

  return (
    <div className='App'>
        {/* < ClassComponent /> */}
        {/* <FunctionComponent/>  */}
        {/* <PropsViaFuncCom name={"Jawad"} age={20} email={"shaikhjawad020@gmail.com"} other={{mobile:"8850838058", address:"mumbai"}} /> */}
        {/* <PropsViaClassCom name={"Jawad"} age={20} email={"shaikhjawad020@gmail.com"} other={{mobile:"8850838058", address:"mumbai"}}/> */}
        {/* <GetInputBoxValue /> */}
        {/* <ShowAndHIdeElements /> */}
        {/* < GetFormData /> */}
        {/* <ConditionalRenderingIfElse /> */}
        {/* <ConditionalRenderingElseIF /> */}
        <FunctionasProps data={call}/>
    </div>
  );
}

export default App;
