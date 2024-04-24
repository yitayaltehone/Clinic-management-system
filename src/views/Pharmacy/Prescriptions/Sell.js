// ** React Imports
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

// ** Store & Actions
import { getUserr } from './includes/store'
import { useSelector, useDispatch } from 'react-redux'

// ** Reactstrap Imports
import { Row, Col, Alert } from 'reactstrap'

// ** User View Components
import UserTabs from './includes/Tabs'
import PatientProfile from './includes/PatientProfile'
import PatientSummary from './includes/PatientSummary'
// ** Styles
import '@styles/react/apps/app-users.scss'
import '../../global/style.css'
const UserView = () => {
  // ** Store Vars
  const store = useSelector(state => state.patients)
  const dispatch = useDispatch()
  // ** Hooks 
  const { id } = useParams()

  // ** Get suer on mount
  useEffect(() => {
    dispatch(getUserr(parseInt(id)))
  }, [dispatch])

  const [active, setActive] = useState('1')

  const toggleTab = tab => {
    if (active !== tab) {
      setActive(tab)
    }
  }

  return store.selectedUser !== null && store.selectedUser !== undefined ? (
    <div className='app-user-view'>
      <Row>
        <Col xl='12' lg='12' xs={{ order: 1 }} md={{ order: 0, size: 12 }}>
          <PatientProfile selectedUser={store.selectedUser} />
         
        </Col>
        </Row>
        <Row>
        <Col xl='12' lg='12' xs={{ order: 0 }} md={{ order: 1, size: 12 }}>
          <UserTabs active={active} toggleTab={toggleTab} />
        </Col>
      </Row>
      <Row>
        <Col xl='12' lg='12' xs={{ order: 0 }} md={{ order: 1, size: 12 }}>
        <PatientSummary />
        </Col>
      </Row>
    </div>
  ) : (
    <Alert color='danger'>
      <h4 className='alert-heading'>Patient not found</h4>
      <div className='alert-body'>
        User with id: {id} doesn't exist. Check list of all Users: <Link to='/patients'>Patient List</Link>
      </div>
    </Alert>
  )
}
export default UserView
