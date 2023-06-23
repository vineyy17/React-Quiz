function RestartButton({ dispatch }) {
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
