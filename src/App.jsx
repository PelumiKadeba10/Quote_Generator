import { useState } from "react";
import Data from "./component/Data";
import Footer from "./component/Footer";

function App(){
  const [quote, setQuote]= useState();

  function returnData(){
    setQuote(<Data />);
  }

  return(
    <>
    <div className="flex justify-center items-center align-center h-screen">
      <div className="text-center bg-slate-200 px-10 py-6 rounded-md shadow-xl">
        <p className="font-bold text-3xl mb-3">Welcome to the Quote Generator</p>
        <p >Click the Button to generate a random quote</p>

        <button
        className="bg-blue-500 p-2 mt-3 rounded hover:text-white"
        onClick={returnData}
        >
          Get Quote
        </button>
        
        <div>
          {quote}
        </div>
       
      </div>
    </div>
    <Footer></Footer>
    </>
  );
}
export default App