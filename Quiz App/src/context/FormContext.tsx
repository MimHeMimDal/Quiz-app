import axios from "axios";
import {
  ReactNode,
  createContext,
  useContext,
  useReducer,
  useState,
  useEffect,
} from "react";

type actions = {
  type: "SET_STATE";
  payload: State;
};

type State = {
  personalInfo: {
    name: string;
    email: string;
    phone: number;
  };
};

const FormContext = createContext({});

export const useFormContext = () => {
  return useContext(FormContext);
};

// const initState = {
//   name: "",
//   email: "",
//   phone: "",
//   id: "",
//   plan: {
//     dateType: "monthly",
//     planType: "",
//     price: "",
//   },
//   addons: {
//     "Online service": {
//       active: false,
//       price: "",
//     },
//     "Large storage": {
//       active: false,
//       price: "",
//     },
//     "Customizable profile": {
//       active: false,
//       price: "",
//     },
//   },
// };

const FormReducer = (state: State, action: actions) => {
  switch (action.type) {
    case "SET_STATE":
      return [...state, ...action.payload];
    default:
      return state;
  }
};

const FormProvider = ({ children }: { children: ReactNode }) => {
  // const [initState, setInitState] = useState([]);
  const [state, dispatch] = useReducer(FormReducer, []);
  const [pageCounter, setPageCounter] = useState(0);
  const [mainDisplay, setMainDisplay] = useState("form");
  return (
    <FormContext.Provider
      value={{
        pageCounter,
        setPageCounter,
        state,
        dispatch,
        mainDisplay,
        setMainDisplay,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
