import AnswersItem from "./AnswersItem";

export default function AnswersList({answers, setEditId, setAnswers}) {
  console.log("Inside AnswersList: ", answers);

  const { answersList } = answers;

  return (
    <ul>
      {answers.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} setEditId={setEditId} setAnswers={setAnswers} key={i} />
      ))}
    </ul>
  );
}
