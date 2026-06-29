import Books from "./components/Books";

async function getData() {
  let response = await fetch("https://potterapi-fedeperin.vercel.app/en/books");
  const data = await response.json();
  return data;
}
let apiData = await getData();

const App = () => {
  return (
    <>
      <h1>Hello</h1>
      <Books data={apiData} />
    </>
  );
};

export default App;
