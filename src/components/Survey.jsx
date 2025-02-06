import { useState } from "react";
import AnswersList from "./AnswersList";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [editId, setEditId] = useState(0);
  const [answers, setAnswers] = useState({
    bestFeature: [],
    worstBits: [],
    consistency: "",
    color: "",
    logo: "",
    spendTime: [],
    review: "",
    username: "",
    email: "",
  });

  const [answersList, setAnswersList] = useState([{
      id: 1,
      bestFeature: [],
      worstBits: [],
      consistency: 2,
      color: 3,
      logo: 4,
      spendTime: ["chatting", "swimming"],
      review: "Cool duck",
      username: "Vall",
      email: "vall@vall.vall",
  }]);
  const handleChange = (event) => {
    const { name, value, type } = event.target;

    if (type === "checkbox") {
      if(name === "spendTime")
      {
        if (event.target.checked) {
          answers.spendTime.push(value);
        } else {
          answers.spendTime = answers.spendTime.filter(item => item !== value);
        }
      }
      if(name === "worstBits" )
      {
        if (event.target.checked) {
          answers.worstBits.push(value);
        } else {
          answers.worstBits = answers.worstBits.filter(item => item !== value);
        }
      }
      if(name === "bestFeature" )
        {
          if (event.target.checked) {
            answers.bestFeature.push(value);
          } else {
            answers.bestFeature = answers.bestFeature.filter(item => item !== value);
          }
        }
      setAnswers({ ...answers, [value]: event.target.checked});
    } else {
      setAnswers({ ...answers, [event.target.name]: event.target.value });
    }
  };  

  const handleSubmit = (event) => {
    event.preventDefault();

    if(editId != 0)
    {
        
      const editAnswer = answersList.find((t) => t.id === editId)
      const updatedAnswers = answersList.map((t) => 
      t.id === editAnswer.id ? t={id: t.id,
         bestFeature: answers.bestFeature,
          worstBits: answers.worstBits,
           consistency: answers.consistency,
            color: answers.color,
             logo: answers.logo,
              spendTime: answers.spendTime,
               review: answers.review,
                username: answers.username,
                 email: answers.email
                }: t);
      
      
      setAnswersList(updatedAnswers);
    } 
    else
    {
      setAnswersList([
        ...answersList,{
          id: Math.max(...answersList.map((o) => o.id +1)),
          bestFeature: answers.bestFeature,
          worstBits: answers.worstBits,
          consistency: answers.consistency,
          color: answers.color,
          logo: answers.color,
          spendTime: answers.spendTime,
          review: answers.review,
          username: answers.username,
          email: answers.email,
        },
      ]);
    }
    setAnswers({
      bestFeature: [],
      worstBits: [],
      consistency: "",
      color: "",
      logo: "",
      spendTime: [],
      chatting: false,
      review: "",
      username: "",
      email: "",
    })
    
    setEditId(0);
  };

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answers={answersList} setEditId={setEditId} setAnswers={setAnswers}/>
      </section>
      <section className="survey__form">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Tell us what you think about your rubber duck!</h2>

          <div className="form__group">
            <h3>What are the best features of your rubber duck?</h3>
            <ul>
              <li>
                <label
                ><input
                    name="bestFeature"
                    type="checkbox"
                    value={"yellow"} 
                    onChange={handleChange}
                    checked={answers.bestFeature.includes("yellow")}
                  />Its yellow!</label>
              </li>
              <li>
                <label
                ><input name="bestFeature" type="checkbox" value={"squeaks"} onChange={handleChange} checked={answers.bestFeature.includes("squeaks")}/>It squeaks!</label
                >
              </li>
              <li>
                <label
                ><input
                    name="bestFeature"
                    type="checkbox"
                    value="hasLogo"
                    onChange={handleChange}
                    checked={answers.bestFeature.includes("hasLogo")}
                  />It has a logo!</label>
              </li>
              <li>
                <label
                ><input name="bestFeature" type="checkbox" value={"big"}  onChange={handleChange} checked={answers.bestFeature.includes("big")} />Its big!</label>
              </li>
            </ul>
          </div>

          <div className="form__group">
            <h3>What are the worst bits of your rubber duck?</h3>
            <ul>
              <li>
                <label
                ><input
                    name="worstBits"
                    type="checkbox"
                    value={"yellow"} 
                    onChange={handleChange}
                    checked={answers.worstBits.includes("yellow")}
                  />Its yellow!</label>
              </li>
              <li>
                <label
                ><input name="worstBits" type="checkbox" value={"squeaks"} onChange={handleChange} checked={answers.worstBits.includes("squeaks")}/>It squeaks!</label
                >
              </li>
              <li>
                <label
                ><input
                    name="worstBits"
                    type="checkbox"
                    value="hasLogo"
                    onChange={handleChange}
                    checked={answers.worstBits.includes("hasLogo")}
                  />It has a logo!</label>
              </li>
              <li>
                <label
                ><input name="worstBits" type="checkbox" value={"big"}  onChange={handleChange} checked={answers.worstBits.includes("big")} />Its big!</label>
              </li>
            </ul>
          </div>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck consistency?</h3>
            <ul>
              <li>
                <input id="consistency-one" type="radio" name="consistency" value="1" onChange={handleChange} checked={answers.consistency == 1}/>
                <label htmlFor="consistency-one">1</label>
              </li>
              <li>
                <input id="consistency-two" type="radio" name="consistency" value="2" onChange={handleChange} checked={answers.consistency == 2}/><label
                  htmlFor="consistency-two"
                >2</label>
              </li>
              <li>
                <input id="consistency-three" type="radio" name="consistency" value="3" onChange={handleChange} checked={answers.consistency == 3}/><label
                  htmlFor="consistency-three"
                >3</label
                >
              </li>
              <li>
                <input id="consistency-four" type="radio" name="consistency" value="4" onChange={handleChange} checked={answers.consistency == 4}/><label
                  htmlFor="consistency-four"
                >4</label>
              </li>
            </ul>
          </div>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <ul>
              <li>
                <input id="color-one" type="radio" name="color" value="1" onChange={handleChange} checked={answers.color == 1}/>
                <label htmlFor="color-one">1</label>
              </li>
              <li>
                <input id="color-two" type="radio" name="color" value="2" onChange={handleChange} checked={answers.color == 2}/><label
                  htmlFor="color-two"
                >2</label>
              </li>
              <li>
                <input id="color-three" type="radio" name="color" value="3" onChange={handleChange} checked={answers.color == 3}/><label
                  htmlFor="color-three"
                >3</label
                >
              </li>
              <li>
                <input id="color-four" type="radio" name="color" value="4" onChange={handleChange} checked={answers.color == 4}/><label
                  htmlFor="color-four"
                >4</label>
              </li>
            </ul>
          </div>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck logo?</h3>
            <ul>
              <li>
                <input id="logo-one" type="radio" name="logo" value="1" onChange={handleChange} checked={answers.logo == 1}/>
                <label htmlFor="logo-one">1</label>
              </li>
              <li>
                <input id="logo-two" type="radio" name="logo" value="2" onChange={handleChange} checked={answers.logo == 2}/><label
                  htmlFor="logo-two"
                >2</label>
              </li>
              <li>
                <input id="logo-three" type="radio" name="logo" value="3" onChange={handleChange} checked={answers.logo == 3}/><label
                  htmlFor="logo-three"
                >3</label
                >
              </li>
              <li>
                <input id="logo-four" type="radio" name="logo" value="4" onChange={handleChange} checked={answers.logo == 4}/><label
                  htmlFor="logo-four"
                >4</label>
              </li>
            </ul>
          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <ul>
              <li>
                <label
                ><input
                    name="spendTime"
                    type="checkbox"
                    value={"swimming"} 
                    onChange={handleChange}
                    checked={answers.spendTime.includes("swimming")}
                  />Swimming</label>
              </li>
              <li>
                <label
                ><input name="spendTime" type="checkbox" value={"bathing"} onChange={handleChange} checked={answers.spendTime.includes("bathing")}/>Bathing</label
                >
              </li>
              <li>
                <label
                ><input
                    name="spendTime"
                    type="checkbox"
                    value="chatting"
                    onChange={handleChange}
                    checked={answers.spendTime.includes("chatting")}
                  />Chatting</label>
              </li>
              <li>
                <label
                ><input name="spendTime" type="checkbox" value={"noTime"}  onChange={handleChange} checked={answers.spendTime.includes("noTime")} />I don't like to
                  spend time with it</label>
              </li>
            </ul>
          </div>
          <label>What else have you got to say about your rubber duck?
            <textarea
            name="review"
            cols="30"
            rows="10"
            value={answers.review}
            onChange={handleChange}
          ></textarea></label>
          <label>Put your name here (if you feel like it):<input
              type="text"
              name="username"
              value={answers.username}
              onChange={handleChange} /></label>
          <label>Leave us your email pretty please??<input
            type="email"
            name="email"
            value={answers.email}
            onChange={handleChange} /></label>
          <input className="form__submit" type="submit" value="Submit Survey!" />
        </form>
      </section>
    </main>
  );
}

export default Survey;
