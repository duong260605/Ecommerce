import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getQuiz, submitQuiz } from "../api";

export default function Quiz() {
  const { id } = useParams();
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  useEffect(() => {
    getQuiz(id)
      .then((res) => setQuiz(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  const handleChange = (qIndex, option) => {
    setAnswers({ ...answers, [qIndex]: option });
  };

  const handleSubmit = async () => {
    try {
      const res = await submitQuiz(id, { answers });
      setResult(res.data);
    } catch (err) {
      console.error(err);
      alert("Nộp bài thất bại");
    }
  };

  if (!quiz) return <p>Đang tải...</p>;

  return (
    <div>
      <h2>Trắc nghiệm: {quiz.title}</h2>
      {quiz.questions.map((q, idx) => (
        <div key={idx} style={{ marginBottom: "1rem" }}>
          <p>
            <b>{idx + 1}. {q.question}</b>
          </p>
          {q.options.map((opt, i) => (
            <label key={i} style={{ display: "block" }}>
              <input
                type="radio"
                name={`q-${idx}`}
                value={opt}
                checked={answers[idx] === opt}
                onChange={() => handleChange(idx, opt)}
              />
              {opt}
            </label>
          ))}
        </div>
      ))}

      <button onClick={handleSubmit}>Nộp bài</button>

      {result && (
        <div style={{ marginTop: "1rem" }}>
          <h3>Kết quả:</h3>
          <p>Điểm: {result.score}/{quiz.questions.length}</p>
        </div>
      )}
    </div>
  );
}
