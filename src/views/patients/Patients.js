// ** React Imports
import { Fragment, useState, useEffect } from 'react'
// ** Table Columns
// ** Store & Actions
import { getAllData, getData, getUserr, addUser, deleteUser } from './includes/store'
import { useDispatch, useSelector } from 'react-redux'
// ** React Imports
import { Link } from 'react-router-dom'
// ** Custom Components
import Avatar from '@components/avatar'
// ** Store & Actions
import { store } from '@store/store'
// ** Icons Imports
// import {  Check, X, ChevronDown, MoreVertical, FileText, Trash2, Archive} from 'react-feather'
import {
  ChevronDown, Trash2,
  Edit2} from 'react-feather'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import DataTable from 'react-data-table-component'
// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'

// ** Reactstrap Imports
import {
  Card,
  Row,
  Col,
  Modal,
  Input,
  Label,
  Button,
  ModalBody,
  ModalHeader,
  FormFeedback,
  UncontrolledTooltip
} from 'reactstrap'

// ** Third Party Components
import Select from 'react-select'
// import { Check, X } from 'react-feather'
import { useForm, Controller } from 'react-hook-form'

// ** Utils
import { selectThemeColors } from '@utils'

// import { addUser } from '../store'


const genderOptions = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' }
 
]

const defaultValues = {
  firstName: '',
  lastName: '',
  personType: '',
  dob: '',
  email: ''
  
}

const renderClient = row => {
  const stateNum = Math.floor(Math.random() * 6),
    states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
    color = states[stateNum]
    return <Avatar color={color || 'primary'} className='me-1' content={row.first_name || 'John Doe'} initials />
  
}
export const columns = [
  {
    name: 'Full Name',
    sortable: true,
    minWidth: '300px',
    sortField: 'fullName',
    selector: row => row.first_name,
    cell: row => (
      <div className='d-flex justify-content-left align-items-center'>
        {renderClient(row)}
        <div className='d-flex flex-column'>
          <Link
            to={`/patients/getone/${row.id}`}
            className='user_name text-truncate text-body'
            onClick={() => store.dispatch(getUserr(row.id))}
          >
            <span className='fw-bolder'>{row.first_name + row.last_name}</span>
          </Link>
          <small className='text-truncate text-muted mb-0'>{row.email}</small>
        </div>
      </div>
    )
  },
  {
    name: 'Gender',
    sortable: true,
    minWidth: '172px',
    sortField: 'role',
    selector: row => row.gender,
    cell: row => <span className='text-capitalize'>{row.gender}</span>
  },
  {
    name: 'Role',
    minWidth: '138px',
    sortable: true,
    sortField: 'currentPlan',
    selector: row => row.person_type,
    cell: row => <span className='text-capitalize'>{row.person_type}</span>
  },
  {
    name: 'DoB',
    minWidth: '230px',
    sortable: true,
    sortField: 'dob',
    selector: row => row.date_of_birth,
    cell: row => <span className='text-capitalize'>{row.date_of_birth}</span>
  },
  {
    name: 'Email',
    minWidth: '230px',
    sortable: true,
    sortField: 'email',
    selector: row => row.person_type,
    cell: row => <span email='text-capitalize'>{row.email}</span>
  },
  {
    name: 'Actions',
    minWidth: '100px',
    cell: row => (
      <div className='column-action d-flex align-items-center'>
        <Link className='cursor-pointer' size={17} id={`send-tooltip-${row.id}`} 
           to={`/patients/getone/${row.id}`}
           onClick={() => store.dispatch(getUserr(row.id))}
        >
        <Edit2 size={17} className='mx-1' />
          </Link>
        <UncontrolledTooltip placement='top' target={`send-tooltip-${row.id}`}>
          Edit
        </UncontrolledTooltip>
        <Link    onClick={() => {
        const confirmBox = window.confirm(
      "Do you really want to delete this Patient?"
    )
    if (confirmBox === true) {
     store.dispatch(deleteUser(row.id))
    }
  }} id={`pw-tooltip-${row.id}`}>
          <Trash2 size={17} className='mx-1' />
        </Link>
        <UncontrolledTooltip placement='top' target={`pw-tooltip-${row.id}`}>
          Delete
        </UncontrolledTooltip>
        
      </div>
    )
  }
]
const Patients = () => {
  const [show, setShow] = useState(false)
  // ** Hooks
  const {
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues })
  const dispatch = useDispatch()
  const onSubmit = data => {
    if (Object.values(data).every(field => field.length > 0)) {
      setShow(false)
      dispatch(
        addUser({
          org_id: 1,
          prefix: "ato",
          first_name: data.firstName,
          last_name: data.lastName,
          date_of_birth: data.dob,
          gender: "Male",
          email: data.email,
          status: true,
          profile_image: "test.png",
          person_type: data.personType
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


  const store = useSelector(state => state.patients)

  // ** States
 
  const [sort, setSort] = useState('desc')
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [sortColumn, setSortColumn] = useState('id')
  const [rowsPerPage, setRowsPerPage] = useState(10)
  // ** Get data on mount
  useEffect(() => {
    dispatch(getAllData())
    dispatch(
      getData({
        sort,
        sortColumn,
        q: searchTerm,
        page: currentPage,
        perPage: rowsPerPage
        // role: currentRole.value,
        // status: currentStatus.value,
        // currentPlan: currentPlan.value
      })
    )
  }, [dispatch, store.data.length, sort, sortColumn, currentPage])

  // ** Function in get data on page change
  const handlePagination = page => {
    dispatch(
      getData({
        sort,
        sortColumn,
        q: searchTerm,
        perPage: rowsPerPage,
        page: page.selected + 1
      })
    )
    setCurrentPage(page.selected + 1)
  }
  // ** Function in get data on rows per page
  const handlePerPage = e => {
    const value = parseInt(e.currentTarget.value)
    dispatch(
      getData({
        sort,
        sortColumn,
        q: searchTerm,
        perPage: value,
        page: currentPage
        // role: currentRole.value,
        // currentPlan: currentPlan.value,
        // status: currentStatus.value
      })
    )
    setRowsPerPage(value)
  }

  // ** Function in get data on search query change
  const handleFilter = val => {
    setSearchTerm(val)
    dispatch(
      getData({
        sort,
        q: val,
        sortColumn,
        page: currentPage,
        perPage: rowsPerPage
      })
    )
  }
  // ** Custom Pagination
  const CustomPagination = () => {
    const count = Number(Math.ceil(store.total / rowsPerPage))

    return (
      <ReactPaginate
        previousLabel={''}
        nextLabel={''}
        pageCount={count || 1}
        activeClassName='active'
        forcePage={currentPage !== 0 ? currentPage - 1 : 0}
        onPageChange={page => handlePagination(page)}
        pageClassName={'page-item'}
        nextLinkClassName={'page-link'}
        nextClassName={'page-item next'}
        previousClassName={'page-item prev'}
        previousLinkClassName={'page-link'}
        pageLinkClassName={'page-link'}
        containerClassName={'pagination react-paginate justify-content-end my-2 pe-1'}
      />
    )
  }

  // ** Table data to render
  const dataToRender = () => {
    const filters = {
      // role: currentRole.value,
      // currentPlan: currentPlan.value,
      // status: currentStatus.value,
      q: searchTerm
    }

    const isFiltered = Object.keys(filters).some(function (k) {
      return filters[k].length > 0
    })

    if (store.data.length > 0) {
      return store.data
    } else if (store.data.length === 0 && isFiltered) {
      return []
    } else {
      return store.allData.slice(0, rowsPerPage)
    }
  }

  const handleSort = (column, sortDirection) => {
    setSort(sortDirection)
    setSortColumn(column.sortField)
    dispatch(
      getData({
        sort,
        sortColumn,
        q: searchTerm,
        page: currentPage,
        perPage: rowsPerPage
        // role: currentRole.value,
        // status: currentStatus.value,
        // currentPlan: currentPlan.value
      })
    )
  }

  return (
   <Fragment>

      <Card className='overflow-hidden'>
        <div className='react-dataTable'>
          <DataTable
            noHeader
            subHeader
            sortServer
            pagination
            responsive
            paginationServer
            columns={columns}
            onSort={handleSort}
            sortIcon={<ChevronDown />}
            className='react-dataTable'
            paginationComponent={CustomPagination}
            data={dataToRender()}
            subHeaderComponent={
           
                <div className='invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75'>
                  <Row>
                    <Col xl='6' className='d-flex align-items-center p-0'>
                      <div className='d-flex align-items-center w-100'>
                        <label htmlFor='rows-per-page'>Show</label>
                        <Input
                          className='mx-50'
                          type='select'
                          id='rows-per-page'
                          value={rowsPerPage}
                          onChange={handlePerPage}
                          style={{ width: '5rem' }}
                        >
                          <option value='10'>10</option>
                          <option value='25'>25</option>
                          <option value='50'>50</option>
                        </Input>
                        <label htmlFor='rows-per-page'>Entries</label>
                      </div>
                    </Col>
                    <Col
                      xl='6'
                      className='d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1'
                    >
                      <div className='d-flex align-items-center mb-sm-0 mb-1 me-1'>
                        <label className='mb-0' htmlFor='search-invoice'>
                          Search:
                        </label>
                        <Input
                          id='search-invoice'
                          className='ms-50 w-100'
                          type='text'
                          value={searchTerm}
                          onChange={e => handleFilter(e.target.value)}
                        />
                      </div>
            
                      <div className='d-flex align-items-center table-header-actions'>
                        <Button className='add-new-user' color='primary' onClick={() => setShow(true)}>
                          Add New User
                        </Button>
                        
                      </div>
                    </Col>
                  </Row>
                </div>
              
            }
          />
        </div>
      </Card>

      <Modal isOpen={show} toggle={() => setShow(!show)} className='modal-dialog-centered modal-lg'>
        <ModalHeader className='bg-transparent' toggle={() => setShow(!show)}></ModalHeader>
        <ModalBody className='px-sm-5 mx-50 pb-5'>
          <div className='text-center mb-2'>
            <h1 className='mb-1'>Jest A test Form</h1>
            <p>Just click on Submit button and you will see a static data updated to the DB</p>
          </div>
          <Row tag='form' className='gy-1 pt-75' onSubmit={handleSubmit(onSubmit)}>
            <Col md={6} xs={12}>
              <Label className='form-label' for='firstName'>
                First Name
              </Label>
              <Controller
                control={control}
                name='firstName'
                render={({ field }) => {
                  return (
                    <Input
                      {...field}
                      id='firstName'
                      placeholder='John'
                      value={field.value}
                      invalid={errors.firstName && true}
                    />
                  )
                }}
              />
              {errors.firstName && <FormFeedback>Please enter a valid First Name</FormFeedback>}
            </Col>
            <Col md={6} xs={12}>
              <Label className='form-label' for='lastName'>
                Last Name
              </Label>
              <Controller
                name='lastName'
                control={control}
                render={({ field }) => (
                  <Input {...field} id='lastName' placeholder='Doe' invalid={errors.lastName && true} />
                )}
              />
              {errors.lastName && <FormFeedback>Please enter a valid Last Name</FormFeedback>}
            </Col>
            <Col xs={12}>
              <Label className='form-label' for='username'>
                Person Type
              </Label>
              <Controller
                name='personType'
                control={control}
                render={({ field }) => (
                  <Input {...field} id='personType' placeholder='john.doe.007' invalid={errors.personType && true} />
                )}
              />
              {errors.personType && <FormFeedback>Please enter a valid personType</FormFeedback>}
            </Col>
            <Col md={6} xs={12}>
              <Label className='form-label' for='email'>
                 Email
              </Label>
              <Controller
                name='email'
                control={control}
                render={({ field }) => (
                  <Input {...field} type = "email" placeholder ="abc@gmail.com"
                  id='email' invalid={errors.email && true} />
                )}
              />
            </Col>
            <Col md={6} xs={12}>
              <Label className='form-label' for='status'>
                Gender:
              </Label>
              <Select
                id='status'
                isClearable={false}
                className='react-select'
                classNamePrefix='select'
                options={genderOptions}
                theme={selectThemeColors}
                defaultValue={genderOptions[0]}
              />
            </Col>
            <Col md={6} xs={12}>
              <Label className='form-label' for='tax-id'>
                DoB
              </Label>
              <Controller
                name='dob'
                control={control}
                render={({ field }) => (
                  <Input {...field}  placeholder ="2021-10-04"
                  id='dob' Placeholder='john.doe.007' invalid={errors.dob && true} />
                )}
              />
            
            </Col>
            <Col md={6} xs={12}>
              <Label className='form-label' for='contact'>
                Phone
              </Label>
              <Input id='contact' defaultValue='' placeholder='+1 609 933 4422' />
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

export default Patients
