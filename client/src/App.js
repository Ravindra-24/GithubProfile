import { useState } from "react";
import "./App.css";
import { Toaster } from "react-hot-toast";
import LoadingBar from "react-top-loading-bar";
import Main from "./GithubProfile/Main";


function App() {
  const [progress, setProgress] = useState(0);
  return (
    <div className="App">
      <Toaster />
      <LoadingBar
        color="#6096f8"
        height={4}
        shadow={true}
        progress={progress}
        loaderSpeed={500}
        containerStyle={{ zIndex: 1000 }}
        transitionTime={500}
        waitingTime={1000}
        onLoaderFinished={() => setProgress(0)}
      />
      <Main setProgress={setProgress}/>
    </div>
  );
}

export default App;
