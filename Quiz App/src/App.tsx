import FormProvider from "./context/FormContext";
import { Main } from "./layout/Main";

function App() {
  return (
    <FormProvider>
      <Main />
    </FormProvider>
  );
}

export default App;
