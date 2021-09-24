import React, { useRef, useEffect, useState } from 'react';
import  './css/classifier.css';
import * as mobilenet from '@tensorflow-models/mobilenet';
import {
  useHistory, Link
} from "react-router-dom";
import { PieChart, Pie, Cell } from 'recharts';


export default function UploadImg() {
    const [imageUrl, setImageUrl] = useState(null);
    const inputRef = useRef();
    const imageRef = useRef();
    const [IsuploadPic, setIsuploadPic] = useState(false);
    const [state, setState] = useState("");
    const [results, setResults] = useState(null);
    const history = useHistory();



 const handleUpload = e => {
  setIsuploadPic(true);
    const { files } = e.target;
    if (files.length > 0) {
    const url = URL.createObjectURL(files[0]);
    setImageUrl(url)
    };
}

useEffect(() =>{
    setState("Identifying breeds...");
   

    if (imageUrl){
      setIsuploadPic(false);
        mobilenet.load().then(model => {
            // Classify the image.
            console.log("imageUrl", imageUrl)
            model.classify(imageRef.current).then(predictions => {
              // const arrangeResults = predictions.map(array => array = {...array, probability: (array.probability * 100).toFixed(2) });
              setResults(predictions);
              console.log('results: ');
               console.log(results);
            });
        });
    }
}, [imageUrl])


useEffect(() => {
  if (results){
    setState("completed");
  }
  }, [results]);


useEffect(() => {
  setResults(null);
 
}, [history.location.pathname]);

console.log("results", results)

const handleRestart = (e)=>{
  setResults(null);
  setImageUrl(null);
  setState("");

}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, className }) => {

  const radius = 25 + innerRadius + (outerRadius - innerRadius);
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  console.log("className", className)

  return (
  
    <text x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'}  dominantBaseline="central" >
      {`${(percent * 100).toFixed(2)}%`}
      {"-"}
      {"  "}
       {className} 

    </text>
    
    
  );
};


 return (
    <div className="uploadContainer">
       <div className="backContainer2">
                <Link to={"/"}>
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" role="presentation"><path d="M18.378 23.369c.398-.402.622-.947.622-1.516 0-.568-.224-1.113-.622-1.515l-8.249-8.34 8.25-8.34a2.16 2.16 0 0 0 .548-2.07A2.132 2.132 0 0 0 17.428.073a2.104 2.104 0 0 0-2.048.555l-9.758 9.866A2.153 2.153 0 0 0 5 12.009c0 .568.224 1.114.622 1.515l9.758 9.866c.808.817 2.17.817 2.998-.021z"></path></svg>
                    <div className="buttonBack">Back</div>
                </Link>
        </div>
        <div className="cardContainer">
            <div className="cardTop">
              { imageUrl && (
          <img src={imageUrl} ref={imageRef}/>
              )}
          <button onClick={() => inputRef.current.click()} disabled={state === "completed"} className={state === "completed" ? "diableBttn" : "activeBttn"}> { imageUrl  ? state : "Upload Image" }</button>
          
          <span className="loadingPucStatus">
          { IsuploadPic ? "Loading image" : ""}
          </span>

          <input type='file' accept='image/*' capture='camera' ref={inputRef} onChange={handleUpload}></input>

          {results && (
          <div className="resultsContainer" >
            <div className="dogsResults">The dog you scanned looks like:</div>

          <PieChart height={300} width={1200}>
                <Pie
                  data={results}
                  cx="50%"
                  cy="50%"
                  labelLine={true}
                  label={renderCustomizedLabel}  
                  outerRadius={90}
                  fill="#8884d8"
                  dataKey="probability"
                  isAnimationActive={false}
                  paddingAngle={9} 
                  minAngle={1}
                >
                  {results.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                  
                </Pie>
            </PieChart>



              {/* <ul id="chartContainer">
                {results.map(({ className, probability }) => (
                  <li key={className}>{`${className}: %${(probability * 100).toFixed(2)}`}</li>
                ))}
              </ul> */}


             
          </div>
          )
        } 

<div class="cardBottom"><svg viewBox="0 0 500 246" fill="#F6F6F7"><path d="M500 67.361L500.0001 246H0V67.361C73.44 24.535 158.8547 0 250 0c91.1453 0 176.56 24.535 250.0001 67.361H500z"></path></svg></div>
          </div>
        </div>
        {results && (
        <button className="StartOverBttn" onClick={handleRestart}>Start over</button>
        )}
    </div>

    );
}