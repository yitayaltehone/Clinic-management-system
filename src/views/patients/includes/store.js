// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Axios Imports 
// import axios from 'axios'

import { BaseURL } from '../../../global/BaseURL'
export const getAllData = createAsyncThunk('Patients/getAllData', async () => {
  const response = await BaseURL.get('persons')
  return response.data['persons']
})
export const getAllData2 = createAsyncThunk('Patients/getAllData2', async () => {
  const response = await BaseURL.get('patients')
  return response.data['patients']
}) 


export const getData = createAsyncThunk('Patients/getData', async params => {
  const response = await BaseURL.get('persons', params)
  return {
    params,
    data: response.data['persons'],
    totalPages: 10//response.data.total
  }
})
export const getData2 = createAsyncThunk('Patients/getData2', async params => {
 const response = await BaseURL.get('patients', params)
 //console.log(response.data.patients)patients
 return {
   params,
   data: response.data['patients']["0"],
   totalPages: 10//response.data.total
 }
})

export const getUserr = createAsyncThunk('Patients/getUserr', async id => {
  // /console.log('no data')
   // const response = await axios.get(`http://127.0.0.1:9000/persons/${id}`)
  // return response.data['persons'][0]
  const response = await BaseURL.get(`persons/${id}`)
  // const data = response.data['patient'][0]
  return response.data['person'][0]
  
})
export const getPatientLab = createAsyncThunk('Patients/getPatientLab', async () => {
  const response = await BaseURL.post('update', { sql:"select lab_requests.id, lab_requests.requested_by, lab_requests.lab_result, lab_requests.lab_result_attachment, lab_requests.status, persons.first_name,persons.last_name, persons.person_type, lab_group.name from lab_requests, persons,lab_group where lab_requests.patient_id = persons.id and persons.id = 1 and lab_requests.lab_id = lab_group.id "})
  return response.data['result']
  
})
export const addLabOrder = createAsyncThunk('Patients/addLabOrder', async (sql, { dispatch }) => {
  const response = await BaseURL.post('update', sql)
  await dispatch(getPatientLab())
  return response
  
})
export const updateLab = createAsyncThunk('Patients/updateLab', async (data, { dispatch }) => {
  const response = await BaseURL.post('update', data)
  await dispatch(getPatientLab())
  return response
  
})

export const getPatientDetail = createAsyncThunk('Patients/getPatientDetail', async id => {

   // const response = await axios.get(`http://127.0.0.1:9000/persons/${id}`)
  // return response.data['persons'][0]
  const response = await BaseURL.get(`patients-info/1`, id)
  // const data = response.data['patient'][0]
  return response.data['patient']
})
// export const getPatientDetail = createAsyncThunk('Patients/getPatientDetail', async id => {
//   const response = await axios.get(`http://127.0.0.1:9000/patients-info/1`, id)
//   // const data = response.data['patient'][0]
//   return response.data['patient']
// })
export const addUser = createAsyncThunk('Patients/addUser', async (user, { dispatch, getState }) => {
  await BaseURL.post('persons', user)
  await dispatch(getData(getState().users.params))
  await dispatch(getAllData())
  return user
})

export const addPrescription = createAsyncThunk('Patients/addPrescription', async data => {
  await BaseURL.post('update', data)
  // await dispatch(getData(getState().data.params))
  //await dispatch(getAllData())
 console.log(data)
  return data
})

export const updateUser = createAsyncThunk('Patients/addUser', async (user, { dispatch, getState }) => {
  await BaseURL.put(`persons/${user.patient_ud}`, user)
  await dispatch(getData(getState().users.params))
  await dispatch(getUserr(user.patient_ud))
  return user
})
export const deleteUser = createAsyncThunk('Patients/deleteUser', async (id, { dispatch, getState }) => {
  await BaseURL.delete(`persons/${id}`)
  await dispatch(getData(getState().users.params))
  await dispatch(getAllData())
  return id
})

export const PatientsSlice = createSlice({
  name: 'Patients',
  initialState: {
    data: [],
    total: 1,
    params: {},
    allData: [],
    allPData: [],
    selectedUser: null,
    selectedPatient: null,
    patientLabs: null,
    labOrders: null,
    archivedPatient: null
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getAllData.fulfilled, (state, action) => {
        state.allData = action.payload
      })
      .addCase(getAllData2.fulfilled, (state, action) => {
        state.allPData = action.payload.data
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.data = action.payload.data
        state.params = action.payload.params
        state.total = action.payload.totalPages
      })
      .addCase(getUserr.fulfilled, (state, action) => {
        state.selectedUser = action.payload
      })
      .addCase(getPatientDetail.fulfilled, (state, action) => {
        state.selectedPatient = action.payload
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.selectedUser = action.payload
      })
      .addCase(getPatientLab.fulfilled, (state, action) => {
        state.patientLabs = action.payload
      })
      .addCase(addLabOrder.fulfilled, (state, action) => {
        state.labOrders = action.payload
      })
      .addCase(updateLab.fulfilled, (state, action) => {
        state.labOrders = action.payload
      })
      .addCase(addPrescription.fulfilled, (state, action) => {
        state.selectedUser = action.payload
      })
      .addCase(getData2.fulfilled, (state, action) => {
        state.data = action.payload.data
        state.params = action.payload.params
        state.total = action.payload.totalPages
      })
   
  }
})

export default PatientsSlice.reducer
