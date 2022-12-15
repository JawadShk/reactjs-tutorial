import React from 'react';
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
import ConstructorLifeCycleMethod from './Components/ConstructorLifeCycleMethod';
import RenderLifeCycleMethod from './Components/RenderLifeCycleMethod';
import ComponentDidMountLifeCycleMethod from './Components/ComponentDidMountLifeCycleMethod';
import ComponentDidUpdateLifeCycleMethod from './Components/ComponentDidUpdateLifeCycleMethod';
import ShouldComponentUpdateLIfeCycleMethod from './Components/ShouldComponentUpdateLIfeCycleMethod';
import ComponentWillUnmountLifeCycleMethod from './Components/ComponentWillUnmountLifeCycleMethod';
import UsestateHook from './Components/UsestateHook';
import UseEffectHook from './Components/UseEffectHook';
import UseEffectWIthState from './Components/UseEffectWIthState';
import UseEffectWithProps1 from './Components/UseEffectWithProps1';
import StyleType from './Components/StyleType';

function App() {

  const [email,setEmail] = React.useState("jawad@123"); 

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
        {/* <FunctionasProps data={call}/> */}
        {/* <ConstructorLifeCycleMethod /> */}
        {/* <RenderLifeCycleMethod email={email}/>
        <button onClick={()=>setEmail("hamza@123")}>updtae email</button> */}
        {/* <ComponentDidMountLifeCycleMethod /> */}
        {/* <ComponentDidUpdateLifeCycleMethod /> */}
        {/* < ShouldComponentUpdateLIfeCycleMethod /> */}
        {/* < ComponentWillUnmountLifeCycleMethod /> */}
        {/* < UsestateHook /> */}
        {/* <UseEffectHook /> */}
        {/* < UseEffectWIthState /> */}
        {/* < UseEffectWithProps1 /> */}
        < StyleType />
    </div>
  );
}

export default App;
