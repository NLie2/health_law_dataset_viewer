import './App.css'
// Import Routes and Route from react-router-dom
import { Routes, Route } from 'react-router-dom';
import DatasetViewer from './DatasetViewer';
import Questionnaire from './Questionnaire'
import NavBar from './NavBar';

function App() {

  return (
    <div>      
      <NavBar />

      <Routes>
        <Route path="/health_law_dataset_viewer/" element={<DatasetViewer />} />
        <Route path="/health_law_dataset_viewer/questionniare/" element={<Questionnaire />} />

      </Routes>
    </div>
  )
}

export default App
