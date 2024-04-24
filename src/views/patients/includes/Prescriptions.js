// ** React Imports
import { Fragment } from 'react'

// ** Billing Components
import PrescriptionHistory from './PrescriptionHistory'
import NewPrescriptions from './NewPrescriptions'

const Prescriptions = ({selectedPatient}) => {
  console.log(selectedPatient)
  return !selectedPatient ? null : (
    <Fragment>
      <PrescriptionHistory selectedPatient={selectedPatient}/>
      <NewPrescriptions selectedPatient={selectedPatient}/>
    
    </Fragment>
  )
}

export default Prescriptions
