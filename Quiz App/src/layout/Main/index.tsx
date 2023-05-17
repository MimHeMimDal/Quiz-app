import { Question } from "../../components/Question";
import { QustionForm } from "../../components/QuestionForm";
import { useFormContext } from "../../context/FormContext";

export const Main = function () {
  const { mainDisplay } = useFormContext();
  return (
    <div className="h-screen bg-[#F1F4FD]">
      {mainDisplay === "form" ? <QustionForm /> : <Question />}
    </div>
  );
};
