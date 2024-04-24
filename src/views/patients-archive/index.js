//import React from 'react' 
import React, { useState, useEffect } from 'react'
import { MDBDataTableV5 } from 'mdbreact' 
import { Link } from 'react-router-dom'
import { Edit2 } from 'react-feather'
import { UncontrolledTooltip } from 'reactstrap'
import {  useSelector } from 'react-redux'
import { BaseURL } from '../../global/BaseURL'

export default function TopSearch() {

  const store = useSelector(state => state.patients)
  //let data = ""
  const [patient, setP] = useState([])
let datatable = ""
  useEffect(() => {
    fetch("http://127.0.0.1:9000/patients")
    .then(response => response.json())
    .then(data => setP(data))

  }, [])
  
if (patient.patients) {
  
  console.log(patient.patients["5"].first_name)
   datatable = {
    columns: [
      {
        label: 'Name',
        field: 'name',
        width: 150,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name'
        }
      },
      {
        label: 'Position',
        field: 'position',
        width: 270
      },
      {
        label: 'Office',
        field: 'office',
        width: 200
      },
      {
        label: 'Age',
        field: 'age',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Start date',
        field: 'date',
        sort: 'disabled',
        width: 150
      },
      {
        label: 'Salary',
        field: 'salary',
        sort: 'disabled',
        width: 100
      },
      {
        label:"Action",
        field: 'action',
    minWidth: '100px',
    sort: 'disabled',
    width:100
      }
    ],
    rows: [
      {
        
        name: patient.patients["5"].first_name,
        position: 'System Architect',
        office: 'Edinburgh',
        age: '61',
        date: '2011/04/25',
        salary: '$320',
        action: 
          <div className='column-action d-flex align-items-center'>
            <Link className='cursor-pointer' size={17} id={`send-tooltip-1`} 
               to={`/patients/getone/1`}
               onClick={() => store.dispatch(getUserr(1))}
            >
            <Edit2 size={17} className='mx-1' />
              </Link>
            <UncontrolledTooltip placement='top' target={`send-tooltip-${1}`}>
              Edit
            </UncontrolledTooltip>
            
          </div>
        
      }
      
    ]
  }
 
}

//console.log(JSON.stringify(store.allPData).length)

  return  !patient.patients ? null : <div>
    <MDBDataTableV5 hover  responsive 
  entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4}
   data={datatable} searchTop searchBottom={false} className='react-dataTable'/> 
   {/* {store.allPData[5].first_name} */}
    </div>
}