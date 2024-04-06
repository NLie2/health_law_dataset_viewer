import { Link } from 'react-router-dom'
import './Nav.css'

export default function NavBar(){
  return(
    <div className='nav'>
      <li>
        <Link to='/health_law_dataset_viewer'>View full dataset </Link>
      </li>
      <li>
        <Link to='/health_law_dataset_viewer/questionniare'>Answer questionnaire </Link>
      </li>
    </div>
  )
}