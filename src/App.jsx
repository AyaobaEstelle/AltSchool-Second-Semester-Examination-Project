import { Routes, Route, NavLink } from "react-router-dom";
import Counter from "./components/Counter";
import About from "./components/About";
import NotFound from "./components/NotFound";
import TestError from "./components/TestError";
import './index.css'

function App() {
  return (
    <main className="App">
      <nav>
      <NavLink className=" counter-logo" to="/">Counter</NavLink>
      <NavLink className="nav-link" to="/test-error-boundary">Error Boundary</NavLink>
      <NavLink className="nav-link" to="/about">About</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/about" element={<About />} />
        <Route path="/test-error-boundary" element={<TestError />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <footer>
        <p className="clr-neutral-100 || text-align-center">
          &copy;Copyright All right reserved by{" "}
          <strong className="clr-primary-600">Ayaoba</strong>
        </p>
      </footer>
    </main>
  )
}

export default App;