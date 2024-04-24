// ** React Imports
import { Fragment, useState, useEffect } from 'react'
// ** Table Columns
// ** Store & Actions
import { getPrescription, getDrugList, approveOrder } from './store'
//import AddDrug from '../NewDrug'
import SellDrug from '../SellDrug'
import { Medication } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
// ** React Imports
import { Link, useParams } from 'react-router-dom'
// ** Custom Components
import Avatar from '@components/avatar'
// ** Store & Actions
// import { store } from '@store/store'
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
  FormFeedback
} from 'reactstrap'

// ** Third Party Components
import Select from 'react-select'
// import { Check, X } from 'react-feather'
import { selectThemeColors } from '@utils'
const prescriptions = () => {
  const {id} = useParams()
  const [genderOptions, setGenderOptions]  = useState([])
  const [show, setShow] = useState(false)
  const [expiryDate, setExpiryDate] = useState("")
  const [properties, setPrroperties] = useState("")
  const [amounts, setAmounts] = useState(0)
  const [prices, setPrices] = useState(0)
  const [total_price, setTotalPrices] = useState(0)
  const [drug_name, setDrugName] = useState(0)
  
  const store = useSelector(state => state.Prescript)
  // ** Hooks
  const dispatch = useDispatch()
  const submitOrder = () => {
      setShow(false)
        dispatch(approveOrder({
            petient_id: id,
            drug_name,
            amount: amounts,
            total_price, 
            unit_price: prices
        }))
  }

  // ** States
  const [sort, setSort] = useState('desc')
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [sortColumn, setSortColumn] = useState('id')
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [selectedDrug, setSelectedDrug] = useState([])
  
  // ** Get data on mount
  useEffect(() => {
    dispatch(getPrescription({
      id
    }))
    
    
  }, [dispatch])
  const showModal = async (drug_name) => {
    const x = await dispatch(getDrugList({
      drug_name
    }))
   
    setShow(true) 
    const similar_drugs = x.payload
    setSelectedDrug(similar_drugs)
    similar_drugs.forEach((drug) => {
      setGenderOptions(r => [
         ...r, 
        { value: drug.id, label: drug.name }
      ]
      )
    })
console.log(genderOptions)
   }

   const getDrug = event => {
      const value = event.value
      setDrugName(event.label)
      const x = selectedDrug.filter((dr) => dr.id === value)
      setExpiryDate(x[0].expire_date)
      setPrroperties(x[0].properties)
      setAmounts(0) 
      setPrices(x[0].sell_price)

   }
   const calculatePrice = event => {
    const this_amount = event.target.value 
    setAmounts(this_amount)
    setTotalPrices(this_amount * prices)
   }
  const columns = [
    {
      name: 'person_id',
      sortable: true,
      minWidth: '50px',
      sortField: 'id',
      selector: row => row.person_id,
      cell: row => (
        <div className='d-flex justify-content-left align-items-center'>
         {row.person_id}
         
        </div>
      )
    },
    {
      name: 'prescription',
      sortable: true,
      minWidth: '172px',
      sortField: 'prescription',
      selector: row => row.prescription,
      cell: row => <span className='text-capitalize'>{row.prescription}</span>
    },
    {
      name: 'dosage',
      sortable: true,
      minWidth: '72px',
      sortField: 'dosage',
      selector: row => row.dosage,
      cell: row => <span className='text-capitalize'>{row.dosage}</span>
    },
    {
      name: 'frequancy',
      minWidth: '38px',
      sortable: true,
      sortField: 'frequancy',
      selector: row => row.frequancy,
      cell: row => <span className='text-capitalize'>{row.frequancy}</span>
    },
    {
      name: 'no_of_day',
      minWidth: '38px',
      sortable: true,
      sortField: 'no_of_day',
      selector: row => row.no_of_day,
      cell: row => <span className='text-capitalize'>{row.no_of_day}</span>
    },
    {
      name: 'food_relation',
      minWidth: '138px',
      sortable: true,
      sortField: 'food_relation',
      selector: row => row.food_relation,
      cell: row => <span className='text-capitalize'>{row.food_relation}</span>
    },
    {
      name: 'instruction',
      minWidth: '138px',
      sortable: true,
      sortField: 'instruction',
      selector: row => row.instruction,
      cell: row => <span className='text-capitalize'>{row.instruction}</span>
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
         
            </Link>
          
          <Link  to={""}  onClick={() => {
          
      if (confirmBox === true) {
       store.dispatch(deleteUser(row.id))
      }
    }} id={`pw-tooltip-${row.id}`}>
          </Link>
          <Button color='white' onClick={() => showModal(row.prescription)}>
                 <Medication id='login-tip' color='success'/> 
          </Button>
        </div>
      )
    }
  ]
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
      return store.PatientPrescription.slice(0, rowsPerPage)
    }
    
  }
  // console.log(dataToRender())
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
                        {/* <Button className='add-new-user' color='primary' onClick={() => setShow(true)}>
                          Add New User
                        </Button> */}
                        {/* <AddDrug /> */}
                        
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
            <h1 className='mb-1'>Drug Sell Form</h1>
            <p>Just Fill the Amount of Drug field and click on Submit button to Save the Save the Sold Drug </p>
          </div>
          <Row tag='form' className='gy-1 pt-75'>
          <Col md={6} xs={12}>
              <Label className='form-label' for='status'>
                Drug Name:
              </Label>
              <Select
                onChange={getDrug}
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
              <Label className='form-label' for='firstName'>
                Expired Date
              </Label>             
                    <Input
                      
                      id='firstName'
                      value={expiryDate}
                    />
               
            </Col>
            
            <Col xs={12}>
              <Label className='form-label' for='username'>
                Drug Preoperty
              </Label>
         
                  <Input  id='personType' value={properties}  />
              
            </Col>
            <Col md={6} xs={12}>
              <Label className='form-label' for='email'>
                 amount
              </Label>
 
                  <Input  type = "number" value={amounts}
                  id='email'  onChange={calculatePrice}/>
             
            </Col>
            
            <Col md={6} xs={12}>
              <Label className='form-label' for='tax-id' >
                Sell Price
              </Label>
              
                  <Input   value = {prices}
                  id='dob'  />
                         
            </Col>
            <Col md={6} xs={12}>
              <Label className='form-label' for='contact'>
                Total Price
              </Label>
              <Input id='contact' defaultValue='' value={total_price} />
            </Col>
        
            <Col xs={12} className='text-center mt-2 pt-50'>
              <Button type='button' className='me-1' color='success' onClick={submitOrder}>
                Submit
              </Button>
              <Button type='reset' color='secondary' outline >
                Discard
              </Button>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
      
    </Fragment>
  )
}

export default prescriptions
