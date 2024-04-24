// ** Custom Components
import Avatar from '@components/avatar'
import Timeline from '@components/timeline'
import { getPatientLab, addLabOrder, updateLab } from './store'
import { useDispatch, useSelector } from 'react-redux'

import classnames from 'classnames'
import { Fragment, useState, useEffect } from 'react'
import { TrendingUp, User, Box, DollarSign, Airplay,  Check, X, CreditCard, PlusCircle  } from 'react-feather'
import { useForm, Controller } from 'react-hook-form'
import Cleave from 'cleave.js/react'
import Select from 'react-select'
import { selectThemeColors } from '@utils'
// import { useParams } from 'react-router-dom'
// ** Custom Components
// import Avatar from '@components/avatar'
// ** Reactstrap Imports
import {  CardHeader, Row,
  
   Col,
   Card,
   Modal,
   Label,
   Input,
   Button,
   CardBody,
   CardText,
   CardTitle,
   ModalBody,
   InputGroup,
   ModalHeader,
   FormFeedback,
   InputGroupText} from 'reactstrap'
import { Breadcrumbs } from '@mui/material'
import { useParams } from 'react-router-dom'
let data = []
  // {
  //   title: 'Blood Test',
  //   subtitle: 'blood examination',
  //   color: 'light-primary',
  //   icon: <Airplay size={24} />
  // },
  const options = [
    { value: '1', label: 'Blood Chemistry' },
    { value: '2', label: 'Xray' },
    { value: '3', label: 'Radiology' }
  ]
const cols = { xl: '3', sm: '6' }

const defaultValues = {
  labname: '',
  doctorid: 1,
  result: '',
  attachement: '',
  lab_id: ''
}

const LabHistory = ({ selectedPatient }) => {
 // ** States
 const [show, setShow] = useState(false)
 const [showLab, addLab] = useState(false)
 const [saveLab, editLab] = useState(false)
 const [selectedLab, getIndex] = useState(0)
//  const [cardType, setCardType] = useState('')
const store = useSelector(state => state.patients)
const dispatch = useDispatch()
 // ** Get suer on mount
 useEffect(() => {
  dispatch(getPatientLab())
  setShow(false, 0)
}, [dispatch])

const { id } = useParams()
 // ** Hooks
 const {
   reset,
   handleSubmit,
   formState: {  }
 } = useForm({ defaultValues })

 const onSubmit = () => {
  
   if (defaultValues.labname.length) {

    dispatch(
      addLabOrder({
    
      sql: `INSERT INTO lab_requests (patient_id, requested_by, lab_id, status, created_at, updated_at) VALUES (${id}, ${defaultValues.doctorid}, ${defaultValues.labname}, 0, 22233, 4234);`
      })
    )
   } else {

   }
   addLab(!showLab)
  
 }
 /////////////////////////////////////////////////////////////////
 
const onLabSubmit = () => {
  if (defaultValues.result.length) {
   dispatch(
    updateLab({
   
       sql: `UPDATE lab_requests SET lab_result = '${defaultValues.result}', status=1, lab_result_attachment = '${defaultValues.attachement}'  WHERE id = ${defaultValues.lab_id}`
     })
   )
  } else {

  }
  editLab(!saveLab)
}
////////////////////////////////////////////////////////
 const handleChange = (e) => {
  defaultValues.labname = e.value
  }
  const handleChangeLab = () => {
    //defaultValues[e.name] = e.value
    defaultValues.result = "jndjkbcu"
    defaultValues.attachement = "nzkjansxbxu"
    defaultValues.lab_id = data[selectedLab].lab_id
    }
  const showLabDetails = (rowid) => {
    getIndex(rowid)
    setShow(true)
  }
  const addResult = () => {
    editLab(true)
    setShow(false)
  }
//const { id } = useParams()
const patientLabs = store.patientLabs

if (patientLabs) {
  for (let i = 0; i < patientLabs.length; i++) {
    if (i === 0) {
      data = []
    }
    const labtype = {
          id: i,
          lab_id: patientLabs[i].id,
          title: patientLabs[i].name,
          subtitle: patientLabs[i].lab_result,
          color: patientLabs[i].status === 1 ? 'light-success' : 'light-danger',
          icon: <Airplay />
    }
    data.push(labtype)
  }

}

  return !selectedPatient ? null : (
    
<Fragment>

    <Card className='card-statistics'>
    <CardHeader>
      <CardTitle tag='h4'>Lab History {selectedPatient.patient[0].pre_examination}</CardTitle>
      <CardText className='card-text font-small-2 me-25 mb-0'><PlusCircle size={24}  onClick={() => addLab(true)}/></CardText>
    </CardHeader>
    <CardBody className='statistics-body'>
      <Row>

      {data.map((item, index) => {
            const colMargin = Object.keys(cols)
            const margin = index === 2 ? 'sm' : colMargin[0]
          return (
            <Col
            key={index}
            {...cols}
            className={classnames({
              [`mb-2 mb-${margin}-0`]: index !== data.length - 1
            })}
          >
            <div className='d-flex align-items-center'>
              <Avatar color={item.color} icon={item.icon} className='me-2' onClick={() => showLabDetails(item.id)}/>
              <div className='my-auto'>
                <h4 className='fw-bolder mb-0'>{item.title}</h4>
                <CardText className='font-small-3 mb-0'>{item.subtitle}</CardText>
              </div>
            </div>
          </Col>
          )
        })}


      </Row>
    </CardBody>
  </Card>

<Modal
isOpen={show}
toggle={() => setShow(!show)}
className='modal-dialog-centered'
onClosed={() => ""}
>
<ModalHeader className='bg-transparent' toggle={() => setShow(!show)}></ModalHeader>
<ModalBody className='px-sm-5 mx-50 pb-5'>
  <h1 className='text-center mb-1'>Lab Result Details{selectedLab}</h1>
  <p className='text-center'>Examined By Dr {
       !patientLabs ? null : !patientLabs[selectedLab].requested_by
       }</p>
  <Row tag='form' className='gy-1 gx-2 mt-75' onSubmit={handleSubmit(onSubmit)}>
    <Col xs={12}>
      <Label className='form-label' for='credit-card'>
       
      </Label>
      <div className='d-flex align-items-center'>
      <Breadcrumbs active="Payer Space" />
              <div className='my-auto'>
                <h4 className='fw-bolder mb-0'>{
       !patientLabs ? null : patientLabs[selectedLab].name
       }</h4>
                <CardText className='font-small-3 mb-0'>{
       !patientLabs ? null : patientLabs[selectedLab].lab_result
       }</CardText>
              </div>
            </div>
    </Col>
    <Col md={6}>
     
      <div className='d-flex align-items-center'>
              <Avatar size={24} className='me-2'/>
              <div className='my-auto'>
                <h4 className='fw-bolder mb-0'>Status</h4>
                <CardText className='font-small-3 mb-0'>{
       !patientLabs ? null : patientLabs[selectedLab].status === 1  ? 'Completed' : 'Pending'
       }</CardText>
              </div>
            </div>
    </Col>
    <Col xs={6} md={3}>
      <Label className='form-label' for='exp-date'>
        Exp. Date
      </Label>
      <div className='d-flex align-items-center'>
              <Avatar size={24} className='me-2'/>
              <div className='my-auto'>
                <h4 className='fw-bolder mb-0'>Date</h4>
                <CardText className='font-small-3 mb-0'>21/21/2022</CardText>
              </div>
            </div>
    </Col>
  
    <Col className='text-center mt-1' xs={12}>
      <Button className='me-1' color='primary' onClick={addResult}>
        Add Result<Fragment></Fragment>
      </Button>
      <Button
        color='secondary'
        outline
        onClick={() => {
          setShow(!show)
          reset()
        }}
      >
        Close
      </Button>
    </Col>
  </Row>
</ModalBody>
</Modal>

<Modal
isOpen={showLab}
toggle={() => addLab(!showLab)}
className='modal-dialog-centered'
onClosed={() => ""}
>
<ModalHeader className='bg-transparent' toggle={() => addLab(!showLab)}></ModalHeader>
<ModalBody className='px-sm-5 mx-50 pb-5'>
  <h1 className='text-center mb-1'>Order new Lab For this Patient</h1>
  <p className='text-center'>Examined By Dr {
       !patientLabs ? null : patientLabs[0].requested_by
       }</p>
  <Row tag='form' className='gy-1 gx-2 mt-75' onSubmit={handleSubmit(onSubmit)}>
    <Col xs={12}>
      <Label className='form-label' for='credit-card'>
       
      </Label>
      <div className='d-flex align-items-center'>
      <Breadcrumbs active="Payer Space" />
              <div className='my-auto'>
                <h4 className='fw-bolder mb-0'>Select Labratory Type</h4>
                
              </div>
            </div>
            <Select 
             isClearable={false}
             className='react-select'
             classNamePrefix='select'
             theme={selectThemeColors}
            options={options}   onChange={handleChange} />
    </Col>
  
  
    <Col className='text-center mt-1' xs={12}>
      <Button type='submit' className='me-1' color='primary'  onClick={handleSubmit(onSubmit)}>
        Add Result<Fragment></Fragment>
      </Button>
      <Button
        color='secondary'
        outline
        onClick={() => {
          addLab(!showLab)
          reset()
        }}
      >
        Close
      </Button>
    </Col>
  </Row>
</ModalBody>
</Modal>

<Modal
isOpen={saveLab}
toggle={() => editLab(!saveLab)}
className='modal-dialog-centered'
onClosed={() => ""}
>
<ModalHeader className='bg-transparent' toggle={() => editLab(!saveLab)}></ModalHeader>
<ModalBody className='px-sm-5 mx-50 pb-5'>
  <h1 className='text-center mb-1'>Add Labratoruy Result</h1>
  <p className='text-center'>Examined By Dr {
       !patientLabs ? null : patientLabs[0].requested_by
       }</p>
  <Row tag='form' className='gy-1 gx-2 mt-75' >
    <Col xs={12}>
      <Label className='form-label' for='credit-card'>
       
      </Label>
      <div className='d-flex align-items-center'>
      <Breadcrumbs active="Payer Space" />
              <div className='my-auto'>
                <h4 className='fw-bolder mb-0'></h4>  
              </div>
            </div>
            <Input type="text" name="result" placeholder='attachement'  onChange={handleChangeLab} />
            <div className='d-flex align-items-center'>
      <Breadcrumbs active="Payer Space" />
              <div className='my-auto'>
                <h4 className='fw-bolder mb-0'></h4>
              </div>
            </div>
            <Input type="text" name = "attachement" placeholder='attachement' onChange={handleChangeLab} />   
    </Col>
    <Col className='text-center mt-1' xs={12}>
      <Button className='me-1' color='primary'  onClick={handleSubmit(onLabSubmit)}>
        Save Result<Fragment></Fragment>
      </Button>
      <Button
        color='secondary'
        outline
        onClick={() => {
          editLab(!saveLab)
          reset()
        }}
      >
        Close
      </Button>
    </Col>
  </Row>
</ModalBody>
</Modal>

</Fragment>
  )
}

export default LabHistory
