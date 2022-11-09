import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Footer from "./components/footer/Footer";
// import Header from "./components/header/Header";
import MyRoute from "./config/MyRoute";
// import ReactJWPlayer from "react-jw-player";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <BrowserRouter>
        {/* <Header /> */}
      <ChakraProvider>
        <MyRoute />
      </ChakraProvider>
      <Footer />

    </BrowserRouter>
  );
}

export default App;

/* <ReactJWPlayer
playerId="hZJ5LXvq&property=a6ff8345-b0e3-11ec-a4d6-cea865fc4034"
playerScript="https://cdn.jwplayer.com/libraries/hZJ5LXvq.js"
file="https://content.jwplatform.com/videos/3AaKBfXD-6r0ogSN1.mp4 "
/> */
