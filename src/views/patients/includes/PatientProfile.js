// ** React Imports
import { useState, Fragment } from 'react'

// ** Reactstrap Imports
import { Row, Col, Card, Form, CardBody, Button, Badge, Modal, Input, Label, ModalBody, ModalHeader } from 'reactstrap'
import { updateUser } from './store'
import { useDispatch } from 'react-redux'
// ** Third Party Components
import Swal from 'sweetalert2'
import Select from 'react-select'
import { Check, Briefcase, X, User } from 'react-feather'
import { useForm, Controller } from 'react-hook-form'
import withReactContent from 'sweetalert2-react-content'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Utils
import { selectThemeColors } from '@utils'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'
import '../../../global/style.css'
const genderOptions = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' }
]

const MySwal = withReactContent(Swal)

const UserInfoCard = ({ selectedUser }) => {
  // ** State
  const [show, setShow] = useState(false)

  // ** Hook
  const {
    reset,
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      personType: selectedUser.person_type,
      lastName: selectedUser.last_name,
      firstName: selectedUser.first_name,
      email: selectedUser.email,
      gender: selectedUser.gender,
      dob: selectedUser.date_of_birth
     
    }
  })
  const dispatch = useDispatch()
  const onSubmit = data => {
    const newdata = {
      org_id: 1,
      prefix: "ato",
      first_name: data.firstName,
      last_name: data.lastName,
      date_of_birth: data.dob,
      gender: data.gender,
      email: data.email,
      status: true,
      profile_image: "test.png",
      person_type: data.personType,
      patient_ud: selectedUser.id
    }
    if (Object.values(data).every(field => field.length > 0)) {
      setShow(false)
      dispatch(
        updateUser(newdata)
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

  const handleReset = () => {
    reset({
      personType: selectedUser.person_type,
      lastName: selectedUser.last_name,
      firstName: selectedUser.first_name,
      email: selectedUser.email,
      gender: selectedUser.gender,
      dob: selectedUser.date_of_birth
    })
  }

  const handleSuspendedClick = () => {
    return MySwal.fire({
      title: 'Are you sure?',
      text: "You won't be able to sespend user!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Suspend user!',
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-outline-danger ms-1'
      },
      buttonsStyling: false
    }).then(function (result) {
      if (result.value) {
        MySwal.fire({
          icon: 'success',
          title: 'Suspended!',
          text: 'User has been suspended.',
          customClass: {
            confirmButton: 'btn btn-success'
          }
        })
      } else if (result.dismiss === MySwal.DismissReason.cancel) {
        MySwal.fire({
          title: 'Cancelled',
          text: 'Cancelled Suspension :)',
          icon: 'error',
          customClass: {
            confirmButton: 'btn btn-success'
          }
        })
      }
    })
  }

  return (
    <Fragment>
      <Card>
        <CardBody>
      
          <div className='d-flex justify-content-around my-2 pt-75 headercard'>
            <div className='d-flex align-items-center me-2 headercard'>
              <User size={50}/>
              <Badge color='primary' pill className='badge-glow'>
                   No Medical Attachements
             </Badge>
            </div>
            <div className='d-flex align-items-center me-2 headercard'>
              {/* <div className='ms-75 headercard'> */}
            <div>
                <p className='mb-0'>Full Name: <small>{selectedUser.first_name} {selectedUser.last_name} </small></p>
                <p className='mb-0'>Sex: <small> {selectedUser.gender} </small></p>
                </div>
        
              {/* </div> */}
            
            </div>
            <div className='d-flex align-items-center me-2 headercard'>
              {/* <div className='ms-75'> */}
              <div>
                <p className='mb-0'>Registered Date: <small>{new Date(selectedUser.created_at * 1000).toLocaleString()}</small></p>
                <p className='mb-0'>Last Updated: <small>{new Date(selectedUser.last_updated * 1000).toLocaleString()}</small></p>
                </div>
              {/* </div> */}
            </div>
            <div className='d-flex align-items-center headercard'>
              {/* <div className='ms-75'> */}
              <div>
                <p className='mb-0'>DOB: <small>{new Date(selectedUser.created_at * 1000).toLocaleString()}</small></p>
                <p className='mb-0'>DOB: <small>{new Date(selectedUser.created_at * 1000).toLocaleString()}</small></p>
                </div>
{/*               
              </div> */}
            </div>
            <div className='d-flex align-items-center headercard'>
              {/* <div className='ms-75'> */}
              <div>
                <Button color='primary' onClick={() => setShow(true)}>
              Update
            </Button>
            <Button className='ms-1' color='danger' outline onClick={handleSuspendedClick}>
              Archive
            </Button>
            </div>
              {/* </div> */}
            </div>
          </div>
        </CardBody>
      </Card>
      <Modal isOpen={show} toggle={() => setShow(!show)} className='modal-dialog-centered modal-lg'>
        <ModalHeader className='bg-transparent' toggle={() => setShow(!show)}></ModalHeader>
        <ModalBody className='px-sm-5 pt-50 pb-5'>
          <div className='text-center mb-2'>
            <h1 className='mb-1'>Edit Patient Information</h1>
            <p>Updating user details will receive a privacy audit.</p>
          </div>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row className='gy-1 pt-75'>
              <Col md={6} xs={12}>
                <Label className='form-label' for='firstName'>
                  First Name
                </Label>
                <Controller
                  defaultValue=''
                  control={control}
                  id='firstName'
                  name='firstName'
                  render={({ field }) => (
                    <Input {...field} id='firstName' placeholder='John' invalid={errors.firstName && true} />
                  )}
                />
              </Col>
              <Col md={6} xs={12}>
                <Label className='form-label' for='lastName'>
                  Last Name
                </Label>
                <Controller
                  defaultValue=''
                  control={control}
                  id='lastName'
                  name='lastName'
                  render={({ field }) => (
                    <Input {...field} id='lastName' placeholder='Doe' invalid={errors.lastName && true} />
                  )}
                />
              </Col>
              <Col xs={12}>
                <Label className='form-label' for='username'>
                  Person Type
                </Label>
                <Controller
                  defaultValue=''
                  control={control}
                  id='personType'
                  name='personType'
                  render={({ field }) => (
                    <Input {...field} id='personType' placeholder='john.doe.007' invalid={errors.personType && true} />
                  )}
                />
              </Col>
              <Col md={6} xs={12}>
                <Label className='form-label' for='billing-email'>
                   Email
                </Label>
                <Controller
                  defaultValue=''
                  control={control}
                  id='email'
                  name='email'
                  render={({ field }) => (
                    <Input {...field} type='email' id='email' placeholder='john.doe.007' invalid={errors.email && true} />
                  )}
                />
              
                {/* <Input
                  type='email'
                  id='billing-email'
                 
                  placeholder='example@domain.com'
                /> */}
              </Col>
              <Col md={6} xs={12}>
                <Label className='form-label' for='status'>
                  Gender:
                </Label>
                <Controller
                  defaultValue=''
                  control={control}
                  id='gender'
                  name='gender'
                  render={({ field }) => (
                    <Select
                    {...field}
                      id='gender'
                      isClearable={false}
                      className='react-select'
                      classNamePrefix='select'
                      options={genderOptions}
                      theme={selectThemeColors}
                      invalid={errors.gender && true}
                    />
                  )}
                />
              
              </Col>
              <Col md={6} xs={12}>
                <Label className='form-label' for='tax-id'>
                 DOB
                </Label>
                <Controller
                  defaultValue=''
                  control={control}
                  id='dob'
                  name='dob'
                  render={({ field }) => (
                    <Input {...field}
                    id='dob'
                    placeholder='Tax-1234'
                    invalid={errors.dob && true}
                  />
                  )}
                />
               
              </Col>
              <Col md={6} xs={12}>
                <Label className='form-label' for='contact'>
                  Phone
                </Label>
                <Input id='contact'  placeholder='+1 609 933 4422' />
              </Col>
            
              <Col xs={12} className='text-center mt-2 pt-50'>
                <Button type='submit' className='me-1' color='primary'>
                  Save Changes
                </Button>
                <Button
                  type='reset'
                  color='secondary'
                  outline
                  onClick={() => {
                    handleReset()
                    setShow(false)
                  }}
                >
                  Discard
                </Button>
              </Col>
            </Row>
          </Form>
        </ModalBody>
      </Modal>
    </Fragment>
  )
}

export default UserInfoCard
