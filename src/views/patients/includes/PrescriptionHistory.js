// ** React Imports
import { Fragment, useState } from 'react'

// ** Reactstrap Imports
import {
  Row,
  Col,
  Card,
  Label,
  Input,
  Modal,
  Button,
  CardBody,
  CardTitle,
  ModalBody,
  CardHeader,
  ModalHeader,
  FormFeedback
} from 'reactstrap'

// ** Third Party Components
import Select from 'react-select'
import { Home, Check, X, Briefcase } from 'react-feather'
import { useForm, Controller } from 'react-hook-form'
import { addPrescription } from './store'
import { useDispatch, useSelector } from 'react-redux'
// ** Utils

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'
const defaultValues = {
  prescription: '',
  dosage: '',
  frequancy: '',
  no_of_day: '',
  food_relation: '',
  instruction:''

}

const PrescriptionHistory = ({selectedPatient}) => {
  // ** States
  console.log(selectedPatient)
  const [show, setShow] = useState(false)
  const store = useSelector(state => state.patients)
  const dispatch = useDispatch()
  const patientLabs = store.patientLabs
  console.log(patientLabs)
  // ** Hooks
  const {
    reset,
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues })

  const onSubmit = data => {
    if (Object.values(data).every(field => field.length > 0)) {
      setShow(false)
      reset()
      dispatch(
        addPrescription({
          // patient_id: 1,
          // prescription: data.prescription,
          // dosage: data.dosage,
          // frequancy: data.frequancy,
          // no_of_day: data.no_of_day,
          // food_relation: data.food_relation,
          // status: true,
          // instruction: data.instruction
    sql: `INSERT INTO prescriptions (person_id, prescription, provided_by, approved_pharmacist, dosage, frequancy, no_of_day, food_relation, instruction, status, created_at, updated_at) VALUES ( '4', 'Amoxacilin', '4', '1', '10', 'once per day', '30 days', 'eat more vegetables ', 'hiuhu', '1', '22233', '4234');`
        })
      )
      setShow(!show)
    } else {
      for (const key in data) {
        if (data[key].length === 0) {
          setError(key, {
            type: 'manual'
          })
        }
      }
    }
    
  }

  return !selectedPatient ? null : (
    <Fragment>
      <Card>
        <CardHeader>
          <CardTitle tag='h4'>Add New Prescriptions {selectedPatient.patient[0].pre_examination}</CardTitle>
          <Button color='primary' size='sm' onClick={() => setShow(true)}>
            Add New
          </Button>
        </CardHeader>
        <CardBody>
          <Row>
            <Col xl='7' xs='12'>
              <Row tag='dl' className='mb-0'>
               
              </Row>
            </Col>
            <Col xl='5' xs='12'>
              <Row tag='dl' className='mb-0'>
               
              </Row>
            </Col>
          </Row>
        </CardBody>
      </Card>

      <Modal isOpen={show} toggle={() => setShow(!show)} className='modal-dialog-centered modal-lg'>
        <ModalHeader className='bg-transparent' toggle={() => setShow(!show)}></ModalHeader>
        <ModalBody className='px-sm-5 mx-50 pb-5'>
          <div className='text-center mb-2'>
            <h1 className='mb-1'>Prescription Registration</h1>
       
          </div>
          <Row tag='form' className='gy-1 pt-75' onSubmit={handleSubmit(onSubmit)}>
            <Col md={6} xs={12}>
              <Label className='form-label' for='prescription'>
              Prescription
              </Label>
              <Controller
                control={control}
                name='prescription'
                render={({ field }) => {
                  return (
                    <Input
                      {...field}
                      id='prescription'
                      placeholder='John'
                      value={field.value}
                      invalid={errors.prescription && true}
                    />
                  )
                }}
              />
              {errors.prescription && <FormFeedback>Please enter a valid Prescription Name</FormFeedback>}
            </Col>
            <Col md={6} xs={12}>
              <Label className='form-label' for='dosage'>
              Dosage
              </Label>
              <Controller
                name='dosage'
                control={control}
                render={({ field }) => (
                  <Input {...field} id='dosage' placeholder='Doe' invalid={errors.dosage && true} />
                )}
              />
              {errors.dosage && <FormFeedback>Please enter a valid Dosage</FormFeedback>}
            </Col>
            <Col xs={12}>
              <Label className='form-label' for='username'>
              Frequancy
              </Label>
              <Controller
                name='frequancy'
                control={control}
                render={({ field }) => (
                  <Input {...field} id='frequancy' placeholder='john.doe.007' invalid={errors.frequancy && true} />
                )}
              />
              {errors.frequancy && <FormFeedback>Please enter a valid frequancy</FormFeedback>}
            </Col>
            <Col md={6} xs={12}>
              <Label className='form-label' for='no_of_day'>
                 No of Days
              </Label>
              <Controller
                name='no_of_day'
                control={control}
                render={({ field }) => (
                  <Input {...field}  placeholder ="abc@gmail.com"
                  id='no_of_day' invalid={errors.no_of_day && true} />
                )}
              />
            </Col>
            <Col md={6} xs={12}>
              <Label className='form-label' for='status'>
              Food Relation:
              </Label>
              <Controller
                name='food_relation'
                control={control}
                render={({ field }) => (
                  <Input {...field}  placeholder ="2021-10-04"
                  id='food_relation' placeholder='john.doe.007' invalid={errors.food_relation && true} />
                )}
              />
            </Col>
            <Col md={6} xs={12}>
              <Label className='form-label' for='tax-id'>
              Instruction
              </Label>
              <Controller
                name='instruction'
                control={control}
                render={({ field }) => (
                  <Input {...field}  placeholder ="2021-10-04"
                  id='instruction' placeholder='john.doe.007' invalid={errors.instruction && true} />
                )}
              />
            
            </Col>
           
            <Col xs={12} className='text-center mt-2 pt-50'>
              <Button type='submit' className='me-1' color='primary'>
                Submit
              </Button>
              <Button type='reset' color='secondary' outline onClick={() => setShow(false)}>
                Discard
              </Button>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </Fragment>
  )
}

export default PrescriptionHistory
