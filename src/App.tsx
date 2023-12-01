import Welcome from "./components/Welcome";
import WelcomeLayout from "./components/WelcomeLayout";
import BMICalculator from "./components/bmi-calculator/BMICalculator";
import Form from "./components/form-input/Form";
import PackingList from "./components/packing-list/PackingList";
import Rainbox from "./components/rainbow/Rainbox";

function App() {
  return (
    <>
      <WelcomeLayout>
        <Welcome name="First" />
        <Welcome name="Sally" />
      </WelcomeLayout>

      <PackingList />

      <Form />

      <BMICalculator />

      <Rainbox />
    </>
  );
}

export default App;
