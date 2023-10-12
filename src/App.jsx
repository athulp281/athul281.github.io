import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Header from "./components/Header";
import FeatureBox from "./components/FeatureBox";
import AboutBox from "./components/AboutBox";
import ProjectBox from "./components/ProjectBox";
import MyContextProvider from "./useContext/MyContextProvider";
// import { MyContextProvider } from "./useContext/MyContextProvider";

function App() {
    return (
        <MyContextProvider>
            <Router>
                <div>
                    <Routes>
                        <Route exact path="/" element={<Home />}></Route>
                        <Route
                            exact
                            path="/contact"
                            element={<Contact />}
                        ></Route>
                        <Route exact path="/head" element={<Header />}></Route>
                        <Route
                            exact
                            path="/featurebox"
                            element={<FeatureBox />}
                        ></Route>
                        <Route
                            exact
                            path="/aboutbox"
                            element={<AboutBox />}
                        ></Route>
                        <Route
                            exact
                            path="/projectbox"
                            element={<ProjectBox />}
                        ></Route>
                    </Routes>
                </div>
            </Router>
        </MyContextProvider>
    );
}

export default App;
