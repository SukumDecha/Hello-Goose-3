import Welcome from "./components/Welcome";
import WelcomeLayout from "./components/WelcomeLayout";
import PackingList from "./components/packing-list/PackingList";

function App() {
  return (
    <>
      <WelcomeLayout>
        <Welcome name="First" />
        <Welcome name="Sally" />
      </WelcomeLayout>

      <PackingList />
    </>
  );
}

export default App;
