// ** React Imports
import { Fragment, useEffect } from 'react'
import { getPatientDetail, addPrescription } from './store'
import { useDispatch, useSelector } from 'react-redux'
// ** Reactstrap Imports
import { Nav, NavItem, NavLink, TabContent, TabPane, Row, Col, Label, Card, CardBody, Badge, 
  Button, CardHeader, Input, FormFeedback
 
  } from 'reactstrap'

// ** Icons Imports
import { User, Lock, Bookmark, Bell, Link, Box, Airplay, EyeOff } from 'react-feather'

import LabHistory from './LabHistory'
import PatientFiles from './PatientFiles'
import Prescriptions from './Prescriptions'
import FollowupHistory from './FollowupHistory'
import { useForm, Controller } from 'react-hook-form'
import { useParams } from 'react-router-dom'
// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/base/plugins/extensions/ext-component-sweet-alerts.scss'

const UserTabs = ({ active, toggleTab }) => {
    // ** Store Vars
    const store = useSelector(state => state.patients)
    const dispatch = useDispatch()
  
    const defaultValues = {
      tempreture: '',
          weight: '',
          symptom1: '',
          symptom2: '',
          symptom3: '',
          symptom4: '',
          symptom5: '',
          symptom6: ''
      
    }
    // ** Hooks
    const { id } = useParams()
  const patientDat = store.selectedPatient
    // ** Get suer on mount
    useEffect(() => {
      dispatch(getPatientDetail(parseInt(id)))
    }, [dispatch])

     // ** Hooks
  const {
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues })
  const onSubmit = data => {
    if (Object.values(data).every(field => field.length > 0)) {
      const t = JSON.stringify({
        tempreture: data.tempreture,
     weight: data.weight,
     symptom1: data.symptom1,
     symptom2: data.symptom2,
     symptom3: data.symptom3,
     symptom4: data.symptom4,
     symptom5: data.symptom5,
     symptom6: data.symptom6
   })
      dispatch(
        addPrescription({
      
          sql: `INSERT INTO patients(patient_id,consulted_by,pre_examination,examinations,status, created_at, updated_at) VALUES (1,2,${t},${t},1, unix_timestamp(), unix_timestamp())`
          // patient_id:1,
          // consulted_by:2,
          // pre_examination:{   
          //   tempreture: data.tempreture,
          //   weight: data.weight,
          //   symptom1: data.symptom1,
          //   symptom2: data.symptom2,
          //   symptom3: data.symptom3,
          //   symptom4: data.symptom4,
          //   symptom5: data.symptom5,
          //   symptom6: data.symptom6},
          // examinations:{
          //   tempreture: data.tempreture,
          //   weight: data.weight,
          //   symptom1: data.symptom1,
          //   symptom2: data.symptom2,
          //   symptom3: data.symptom3,
          //   symptom4: data.symptom4,
          //   symptom5: data.symptom5,
          //   symptom6: data.symptom6
          // },
          // status:1

       
        })
      )
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

  return !patientDat ? null : (
    <Fragment>
      <Nav pills className='mb-2'>
        <NavItem>
          <NavLink active={active === '1'} onClick={() => toggleTab('1')}>
            <User className='font-medium-3 me-50' />
            <span className='fw-bold'>Patient History  </span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={active === '2'} onClick={() => toggleTab('2')}>
            <Lock className='font-medium-3 me-50' />
            <span className='fw-bold'>Lab Details</span>
            <div className='position-relative'>
              <Badge pill color='danger' className='badge-up'>
                 5
               </Badge>
               <Bell className='text-danger' size={22} />
           </div>

          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={active === '3'} onClick={() => toggleTab('3')}>
            <Bookmark className='font-medium-3 me-50' />
            <span className='fw-bold'>Prescriptons</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={active === '4'} onClick={() => toggleTab('4')}>
            <Bell className='font-medium-3 me-50' />
            <span className='fw-bold'>Followup History</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={active === '5'} onClick={() => toggleTab('5')}>
            <Link className='font-medium-3 me-50' />
            <span className='fw-bold'>Attachments</span>
            
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={active}>
        <TabPane tabId='1'>
        {/* Medication History */}
        <Fragment>
      <Card className='plan-card border-primary'>
        <CardBody>

        <CardHeader>


            <h4 className='mb-1'><EyeOff />Pre-Examination Servey</h4>
         
        </CardHeader>

          <Row tag='form' className='gy-1 pt-75' onSubmit={handleSubmit(onSubmit)}>
            <Col md={4} xs={12}>
              <Label className='form-label' for='firstName'>
                Tempreture
              </Label>
              <Controller
                control={control}
                name='tempreture'
                render={({ field }) => {
                  return (
                    <Input
                      {...field}
                      id='tempreture'
                      placeholder=''
                      value={field.value}
                      invalid={errors.tempreture && true}
                    />
                  )
                }}
              />
              {errors.tempreture && <FormFeedback>Please enter a valid tempreture</FormFeedback>}
            </Col>
            <Col md={4} xs={12}>
              <Label className='form-label' for='weight'>
                Weight
              </Label>
              <Controller
                name='weight'
                control={control}
                render={({ field }) => (
                  <Input {...field} id='weight' placeholder='' invalid={errors.weight && true} />
                )}
              />
              {errors.weight && <FormFeedback>Please enter a valid weight</FormFeedback>}
            </Col>
            <Col md={4} xs={12}>
              <Label className='form-label' for='username'>
                Symptom1
              </Label>
              <Controller
                name='symptom1'
                control={control}
                render={({ field }) => (
                  <Input {...field} id='symptom1' placeholder='' invalid={errors.symptom1 && true} />
                )}
              />
              {errors.symptom1 && <FormFeedback>Please enter a valid symptom1</FormFeedback>}
            </Col>
            <Col md={4} xs={12}>
              <Label className='form-label' for='symptom2'>
                 Symprom 2
              </Label>
              <Controller
                name='symptom2'
                control={control}
                render={({ field }) => (
                  <Input {...field} type = "text" placeholder =""
                  id='symptom2' invalid={errors.symptom2 && true} />
                )}
              />
            </Col>
            <Col md={4} xs={12}>
              <Label className='form-label' for='status'>
                Symptom 3
              </Label>
              <Controller
                name='symptom3'
                control={control}
                render={({ field }) => (
                  <Input {...field} type = "text" placeholder =""
                  id='symptom3' invalid={errors.symptom3 && true} />
                )}
              />
            </Col>
            <Col md={4} xs={12}>
              <Label className='form-label' for='tax-id'>
                Sympto 4
              </Label>
              <Controller
                name='symptom4'
                control={control}
                render={({ field }) => (
                  <Input {...field}  placeholder ="2021-10-04"
                  id='symptom4' placeholder='' invalid={errors.symptom4 && true} />
                )}
              />
            
            </Col>
            <Col md={4} xs={12}>
              <Label className='form-label' for='tax-id'>
                Sympto 5
              </Label>
              <Controller
                name='symptom5'
                control={control}
                render={({ field }) => (
                  <Input {...field}  placeholder ="2021-10-04"
                  id='symptom5' placeholder='' invalid={errors.symptom5 && true} />
                )}
              />
            
            </Col>
            <Col md={4} xs={12}>
              <Label className='form-label' for='symptom6'>
                Symptom 6
              </Label>
              <Input id='symptom6' defaultValue='' placeholder='' />
            </Col>
        
            <Col xs={12} className='text-center mt-2 pt-50'>
              <Button type='submit' className='me-1' color='primary' onClick={handleSubmit(onSubmit)}>
                Submit
              </Button>
              <Button type='reset' color='secondary' outline >
                Discard
              </Button>
            </Col>
          </Row>
       
           
        </CardBody>
      </Card>

    </Fragment>
        {/*End of Medication History  */}
        </TabPane>
        <TabPane tabId='2'>
          <LabHistory selectedPatient={store.selectedPatient} />
        </TabPane>
        <TabPane tabId='3'>
          <Prescriptions selectedPatient={store.selectedPatient} />
        </TabPane>
        <TabPane tabId='4'>
          <FollowupHistory selectedPatient={store.selectedPatient} />
        </TabPane>
        <TabPane tabId='5'>
          <PatientFiles selectedPatient={store.selectedPatient} />
        </TabPane>
      </TabContent>
    </Fragment>
  )
}
export default UserTabs
