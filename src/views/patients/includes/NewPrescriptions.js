// ** React Imports
import { Fragment } from 'react'

// ** Reactstrap Imports
import {
  Row,
  Col,
  Card,
  Badge,
  Alert,
  Modal,
  Label,
  Button,
  CardBody,
  Progress,
  CardTitle,
  ModalBody,
  CardHeader,
  ModalHeader
} from 'reactstrap'

// ** Third Party Components
import Swal from 'sweetalert2'
import Select from 'react-select'
import withReactContent from 'sweetalert2-react-content'

// ** Utils


// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/base/plugins/extensions/ext-component-sweet-alerts.scss'

const MySwal = withReactContent(Swal)

const NewPrescriptions = ({selectedPatient}) => {
  console.log(selectedPatient, " --")
  // ** States
  return !selectedPatient ? null : (
    <Fragment>
      <Card>
        <CardHeader>
          <CardTitle tag='h4'> Prescriptions History</CardTitle>
        </CardHeader>
        <CardBody>
          <Row>
            {selectedPatient.prescriptions.map((item, index) => {
              return (

            <Col md='6' key = {selectedPatient.prescriptions[index].prescription}>
              <div className='mb-2 pb-50'>
                <h5>
                  Medicine Name: <strong>{selectedPatient.prescriptions[index].prescription}</strong>
                </h5>
                <span>Category</span><strong>{selectedPatient.prescriptions[index].prescription}</strong>
              </div>
              <div className='mb-2 pb-50'>
                <h5>Dosage and description</h5><strong>{selectedPatient.prescriptions[index].dosage}{selectedPatient.prescriptions[index].instruction}</strong>
                <span></span>
              </div>
              <div className='mb-2 mb-md-1'>
                <h5>
                  Approved Pharmacist{' '}
                  <Badge color='light-primary' className='ms-50'>
                  <strong>{selectedPatient.prescriptions[index].approved_pharmacist}</strong>
                  </Badge>
                </h5>
                <span>Ordered By</span>
              </div>
              <Alert color='warning' className='mbbusinesses-2'>
                <h4 className='alert-heading'>Frequency! {selectedPatient.prescriptions[index].frequancy}</h4>
                <div className='alert-body'>No of Days {selectedPatient.prescriptions[index].no_of_day}</div>
              </Alert>
              </Col>
               )

              })}
          </Row>
        </CardBody>
      </Card>

    </Fragment>
  )
}

export default NewPrescriptions
