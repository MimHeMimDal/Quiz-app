import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import { useState } from "react";
import { useFormContext } from "../../context/FormContext";
import axios from "axios";

export const QustionForm = function () {
  const [formInputs, setFormInputs] = useState({
    questionNumbers: "10",
    category: "",
    difficulty: "",
  });

  const { setMainDisplay, state, dispatch } = useFormContext();

  const handleInputChange = (e) => {
    switch (e.target.name) {
      case "questionNumbers":
        return setFormInputs({
          ...formInputs,
          questionNumbers: e.target.value,
        });
      case "formCategorySelect":
        return setFormInputs({
          ...formInputs,
          category: e.target.value,
        });
      case "formDifficultySelect":
        return setFormInputs({
          ...formInputs,
          difficulty: e.target.value,
        });
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://opentdb.com/api.php?amount=${formInputs.questionNumbers}&category=${formInputs.category}&difficulty=${formInputs.difficulty}&type=multiple`
      )
      .then((response) => {
        // setInitState(response.data.results);
        dispatch({ type: "SET_STATE", payload: response.data.results });
        setMainDisplay("questions");
      });
  };

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white">
      <form className="flex flex-col py-8 px-10 gap-5" onSubmit={handleSubmit}>
        <h1>Setup Quiz</h1>
        <div className="flex flex-col gap-1">
          <label htmlFor="">Number of Questions</label>
          <input
            type="text"
            name="questionNumbers"
            className="bg-[#F1F4FD] px-2 focus:outline-none"
            value={formInputs.questionNumbers}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <FormControl fullWidth>
            <InputLabel id="formCategory">Category</InputLabel>
            <Select
              labelId="formCategory"
              name="formCategorySelect"
              id="formCategorySelect"
              value={formInputs.category}
              label="Category"
              onChange={handleInputChange}
            >
              <MenuItem value={9}>General Knowledge</MenuItem>
              <MenuItem value={10}>Books</MenuItem>
              <MenuItem value={11}>Movies</MenuItem>
              <MenuItem value={12}>Music</MenuItem>
              <MenuItem value={15}>Video Games</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div>
          <FormControl fullWidth>
            <InputLabel id="formDifficulty">Difficulty</InputLabel>
            <Select
              labelId="formDifficulty"
              name="formDifficultySelect"
              id="formDifficultySelect"
              value={formInputs.difficulty}
              label="Difficulty"
              onChange={handleInputChange}
            >
              <MenuItem value="easy">Easy</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="hard">Hard</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div>
          <Button type="submit" variant="contained" color="warning" fullWidth>
            Start
          </Button>
        </div>
      </form>
    </div>
  );
};
