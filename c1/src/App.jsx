 import React from "react";
function App() {
  const[score,setCounter]=React.useState(76);

  const[wicket,setCounter1]=React.useState(2);

  const[over,setCounter2]=React.useState(50);
  
  if(wicket == 12)
  {
   return "break"
  }
  const Changevalue1 =(value)=>{
    return setCounter(score+value);
  }
  const Changevalue2 =(value)=>{
    return setCounter1(wicket+value);
  }
  const Changevalue3 =(value)=>{
    return setCounter2(over+value);
  }
  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{""}
          <h1 className="scoreCount">
           
                 {/* show "score" here   */ score}
         
            
          </h1>
        </div>
        <div>
          Wicket:{""}
          <h1 className="wicketCount">
            {wicket
              // show wicket here
            }
          </h1>
        </div>

        <div>
          Over:{""}
          <h1 className="overCount">
            { over
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
            }
            <h1>
              <button onClick={()=> Changevalue3(1)}>addovercount</button>
            </h1>
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1" onClick={()=> Changevalue1(1)}>Add 1</button>
        <button className="addScore4" onClick={()=> Changevalue1(4)}>Add 4</button>
        <button className="addScore6" onClick={()=> Changevalue1(6)}>Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */
        <button onClick={()=> Changevalue2(1)}>Add 1 wicket</button>
        }
      
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={()=> Changevalue3(1)}>Add 1</button>
      </div>

      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */
      
     
      }
    
    </div>
  );
}

export default App;