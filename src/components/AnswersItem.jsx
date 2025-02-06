// Components don't need to be separeted into individual files
// Here we have a smaller component that helps compose the AnswersItem below

const handelClick = (props) => {
  
}
const answersSet = {
  swimming: "Swimming",
  bathing: "Bathing",
  chatting: "Chatting",
  noTime: "I don't like to spend time with it"
};

const featureSet = {
  yellow: "Its yellow!",
  squeaks: "It squeaks!",
  hasLogo: "It has a logo!",
  big: "Its big!"
};
function FeatureList({ list }) {
  return (
    <ul>
      {list.map((item,index) => (
        <li key={index}>{featureSet[item]}</li>
      ))}
    </ul>
  );
}

function ItemsList({ list }) {
  return (
    <ul>
      {list.map((item,index) => (
        <li key={index}>{answersSet[item]}</li>
      ))}
    </ul>
  );
}

// This is the main component being exported from this file
export default function AnswersItem({
  // Feel free to change this props names to what suits you best
  // Rememeber here we're destructuring answerItem, which is the prop name that we've passed
  //
  answerItem: { id, username, color, spendTime, review, bestFeature, worstBits, logo, consistency, email },
  setEditId,
  setAnswers
}) {
  return (
    <li>
      <article className="answer">
        <h3>{username || "Anon"} said:</h3>
        <p>
          <em>What would you say is the best featuers of your rubber duck?</em>
          <FeatureList list={bestFeature} />
        </p>
        <p>
          <em>What would you says it the worst bits about your rubber duck?</em>
          <FeatureList list={worstBits} />
        </p>
        <p>
          <em>How do you rate your rubber duck consistency?</em>
          <span className="answer__line">{consistency}</span>
        </p>
        <p>
          <em>How do you rate your rubber duck color?</em>
          <span className="answer__line">{color}</span>
        </p>
        <p>
          <em>How do you rate your rubber duck logo?</em>
          <span className="answer__line">{logo}</span>
        </p>
        <p>
          <em>How do you like to spend time with your rubber duck?</em>
          <ItemsList list={spendTime} />
        </p>
        <p>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line">{review}</span>
        </p>
        <p>
          <button onClick={() => { setEditId(id); setAnswers({
            bestFeature: bestFeature,
            worstBits: worstBits,
            consistency: consistency,
            color: color,
            logo: logo,
            spendTime: spendTime,
            review: review,
            username: username,
            email: email,
          });}}>Edit</button>
        </p>
      </article>
    </li>
  );
}
