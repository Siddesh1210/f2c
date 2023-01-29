import './App.css';
import { Route,Routes,Link } from 'react-router-dom';
import Home from './Components/Home';
import Courses from './Components/Courses';
import Technologies from './Components/Technologies';
import Contact from './Components/Contact';
import CourseDetail from './Components/CourseDetail';

// So in future if we need to add any new card we can just pass JSON Card data in Courses.js File

function App() {
  return (
    <div className="App">
      {/* navbar */}
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand text-white link">Free to Code</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-white">
              <li className="nav-item">
                <Link to="/" className="nav-link active text-white link" aria-current="page" >Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/courses" className="nav-link active text-white link" aria-current="page">Courses</Link>
              </li>
              <li className="nav-item">
                <Link to="/technologies" className="nav-link text-white link" >Technologies</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link text-white link">Contact</Link>
              </li>
              <button class="call-btn ms-2"><a href="tel:9623235838" className="call-anchor">Call Us</a></button>
            </ul>
          </div>
        </div>
      </nav>


      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/courses" element={<Courses/>}></Route>
        <Route path="/technologies" element={<Technologies/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/course-detail" element={<CourseDetail/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
