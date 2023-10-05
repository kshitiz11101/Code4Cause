import React, { useState } from 'react'

const SelfAssessment = () => {
    const [loading,setloading]=useState(false);
    const [message,setmessage]=useState("");
    const [age,setage]=useState(0);
    const [gender,setgender]=useState(0);
    const [depression,setdepression]=useState(0);
    const [swings,set_swings]=useState(0);
    const [tiredness,settiredness]=useState(0);
    const [anxiety,setanxiety]=useState(0);
    const [stress,setstress]=useState(0);
    const [obsessive_thinking,setObsessive_thinking] = useState(0)
    const [panic_attacks,set_panic_attack]=useState(0);
    const [compulsive_behaviour,set_compulsive_behaviour]=useState(0);
    const [currentQuestion,setCurrentQuestion] = useState(0)
    const [showResults,setShowResults] = useState(false);
 const questions=[
  {
    text: "Age",
    options: [
      { id: 0, text: "18-29", value: 23},
      { id: 1, text: "30-44", value: 37},
      { id: 2, text: "45-60", value: 52},
      { id: 3, text: ">60", value: 65},
    ],
  },
  {
    text: "Gender",
    options: [
      { id: 0, text: "Male", value:1 },
      { id: 1, text: "Female", value:0 }
    ],
  },
  {
    text: "Do you feel Tiredness?",
    options: [
      { id: 0, text: "Yes", value:1 },
      { id: 1, text: "No", value:0 },
    ],

  },
  {
  text:"Do you suffer from Mood Swings?",
  options:[
    {id:0,text:"Yes",value:1},
    {id:1,text:"No",value:0}
  ],
},
  {
      text: "Do you suffer from Compulsive behavior?",
      options: [
        { id: 0, text: "Yes", value:1 },
        { id: 1, text: "No", value:0 },
      ],
    },
    {
        text: "Do you get Panic attacks?",
        options: [
          { id: 0, text: "Yes", value:1 },
          { id: 1, text: "No", value:0 },
        ],
      },
      
    {
      text: "Do you suffer from Depression?",
      options: [
        { id: 0, text: "Yes", value:1 },
        { id: 1, text: "No", value:0 },
      ],
    },
    {
      text: "Do you suffer from Anxiety?",
      options: [
        { id: 0, text: "Yes", value:1 },
        { id: 1, text: "No", value:0 },
      ],
    },
    {
      text: "Do you feel Stressed?",
      options: [
        { id: 0, text: "Yes", value:1 },
        { id: 1, text: "No", value:0 },
      ],
    },
    {
      text: "Do you suffer from Obsessive thinking?",
      options: [
        { id: 0, text: "Yes", value:1 },
        { id: 1, text: "No", value:0 },
      ],
    },
  
   
    ];
    const optionClicked=async(option)=>{
if(currentQuestion===0){
  setage(option.value);
}
if(currentQuestion===1){
  setgender(option.value);
}
if(currentQuestion===2){
  settiredness(option.value);
}
if(currentQuestion===3){
  set_compulsive_behaviour(option.value);
}
if(currentQuestion===4){
  set_swings(option.value);
}
if(currentQuestion===5){
  setdepression(option.value);
}
if(currentQuestion===6){
  setanxiety(option.value);
}
if(currentQuestion===7){
  setstress(option.value);
}
if(currentQuestion===8){
  set_panic_attack(option.value);
}
if(currentQuestion===9){
  set_compulsive_behaviour(option.value);
}
if(currentQuestion===10){
  setObsessive_thinking(option.value);
}
console.log(currentQuestion);
if (currentQuestion + 1 < questions.length) {
  setCurrentQuestion(currentQuestion + 1);
} else {
  setShowResults(true);

  setmessage("We're here for you. Please Contact Us for a Free Consultation session with our Expert");
}


    }
    const handleSubmit = ()=>{
      //   e.preventDefault();
        setloading(true);
        const data = {
          hospitalized ,
          live_parents ,
          section_8 ,
          lack_concentration ,
          anxiety ,
          depression ,
          obsessive_thinking ,
          mood_swings ,
          panic_attacks ,
          compulsive_behaviour ,
          tiredness ,
          age ,
          gender
        }
  
    function resetQuiz(){
                     
      setage(0)
      setanxiety(0)
      set_compulsive_behaviour(0)
      setdepression(0)
      setgender(0)
      setHospitalized(0)
      setLack_concentration(0)
      setLive_parents(0)
      set_swings(0)
      setObsessive_thinking(0)
      set_panic_attack(0)
      setSection_8(0)
      settiredness(0)
      setCurrentQuestion(0);
      setShowResults(false);

  }
  return (
    <div>
      <Navbar/>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center mt-5">Self Assessment Tool</h1>
            <div className="card mt-5">
              <div className="card-body">
                <h5 className="card-title">
                  {questions[currentQuestion].text}
                </h5>
                <div className="card-text">
                  {questions[currentQuestion].options.map((option) => (
                    <button
                      className="btn btn-primary m-2"
                      onClick={() => optionClicked(option)}
                    >
                      {option.text}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            {showResults && (
              <div className="card mt-5">
                <div className="card-body">
                  <h5 className="card-title">Result</h5>
                  <div className="card-text">
                    {message}
                    <button className="btn btn-primary m-2" onClick={resetQuiz}>
                      Reset Quiz
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      
    </div>
    </div>
  )
{'}'}

            }
          }
export default SelfAssessment
