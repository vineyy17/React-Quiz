import { useQuiz } from "../contexts/QuizContext";

function RestartButton() {
  const { dispatch } = useQuiz();
  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "restartQuiz" })}
    >
      Restart Quiz
    </button>
  );
}

export default RestartButton;
