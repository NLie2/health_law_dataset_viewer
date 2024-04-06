import './App.css'
// Import Routes and Route from react-router-dom
import { Routes, Route } from 'react-router-dom';
import DatasetViewer from './DatasetViewer';
import Questionnaire from './Questionnaire';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<DatasetViewer />} />
        <Route path="/about" element={<Questionnaire />} />
      </Routes>
    </div>
  )
}

export default App
