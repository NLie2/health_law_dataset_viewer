import './App.css'
// Import Routes and Route from react-router-dom
import { Routes, Route } from 'react-router-dom';
import DatasetViewer from './DatasetViewer';
import Questionnaire from './Questionnaire'
import NavBar from './NavBar';
import MultiStepForm from './MultiStepForm';

function App() {

  return (
    <div>      
      <NavBar />

      <Routes>
        <Route path='*' element={<DatasetViewer />} />
        <Route path="/health_law_dataset_viewer" element={<DatasetViewer />} />
        <Route path="/health_law_dataset_viewer/questionnaire" element={<Questionnaire />} />
        <Route path="/form" element={<MultiStepForm />} />
      </Routes>
    </div>
  )
}

export default App
