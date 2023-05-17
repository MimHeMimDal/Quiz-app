import { Button } from "@mui/material";
import { useFormContext } from "../../context/FormContext";
import { useState } from "react";

export const Question = function () {
  const { state, pageCounter, setPageCounter }: any = useFormContext();
  const [activeAnswer, setActiveAnswer] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState(0);
  console.log(state[pageCounter]);
  const answers = [
    ...state[pageCounter].incorrect_answers,
    state[pageCounter].correct_answer,
  ];
  const handleSubmitQuestion = () => {
    if (pageCounter < state.length - 1) {
      setPageCounter(pageCounter + 1);
    }
  };
  console.log(state[pageCounter].correct_answer);
  //   console.log(answers.sort());
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white flex flex-col justify-center gap-8 px-7 py-10 w-2/3 h-[550px] rounded">
      <div className="text-end text-green-500">
        Correct Answers: {correctAnswer}/{state.length}
      </div>
      <div className="text-center flex flex-col items-center justify-center gap-5">
        <h2 className="h-[120px] text-3xl font-bold">{state[pageCounter].question}</h2>
        <div className="flex flex-col gap-3 w-[80%] [&_>_*]:w-full [&_>_*]:bg-blue-500 [&_>_*]:py-2 [&_>_*]:rounded">
          {answers.sort().map((item) => {
            return <div key={item}>{item}</div>;
          })}
        </div>
      </div>
      <div className="self-end">
        <Button
          variant="contained"
          color="warning"
          className="w-[200px]"
          onClick={handleSubmitQuestion}
        >
          Next Question
        </Button>
      </div>
    </div>
  );
};
