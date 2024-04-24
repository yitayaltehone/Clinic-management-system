// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Axios Imports 
// import axios from 'axios'

import { BaseURL } from '../../global/BaseURL'
export const getAllData = createAsyncThunk('pharmacy/getAllData', async () => {
  const response = await BaseURL.get('pharmacy')
  return response.data['pharmacy']
})

export const getData = createAsyncThunk('pharmacy/getData', async params => {
  const response = await BaseURL.get('pharmacy', params)
  return {
    params,
    data: response.data['pharmacy'],
    totalPages: 10//response.data.total
  }
})
export const getData2 = createAsyncThunk('pharmacy/getData2', async params => {
 const response = await BaseURL.get('pharmacy', params)
 //console.log(response.data.patients)patients
 return {
   params,
   data: response.data['pharmacy']["0"],
   totalPages: 10//response.data.total
 }
})

export const getUserr = createAsyncThunk('pharmacy/getUserr', async id => {
  // /console.log('no data')
   // const response = await axios.get(`http://127.0.0.1:9000/persons/${id}`)
  // return response.data['persons'][0]
  const response = await BaseURL.get(`pharmacy/${id}`)
  // const data = response.data['patient'][0]
  return response.data['pharmacy'][0]
  
})

export const getPatientDetail = createAsyncThunk('Patients/getPatientDetail', async id => {

   // const response = await axios.get(`http://127.0.0.1:9000/persons/${id}`)
  // return response.data['persons'][0]
  const response = await BaseURL.get(`pharmacy/1`, id)
  // const data = response.data['patient'][0]
  return response.data['pharmacy']
})
// export const getPatientDetail = createAsyncThunk('Patients/getPatientDetail', async id => {
//   const response = await axios.get(`http://127.0.0.1:9000/patients-info/1`, id)
//   // const data = response.data['patient'][0]
//   return response.data['patient']
// })
export const addUser = createAsyncThunk('pharmacy/addUser', async (user, { dispatch, getState }) => {
  await BaseURL.post('pharmacy', user)
  await dispatch(getData(getState().users.params))
  await dispatch(getAllData())
  return user
})

export const updateUser = createAsyncThunk('pharmacy/addUser', async (user, { dispatch, getState }) => {
  await BaseURL.put(`pharmacy/${user.id}`, user)
  await dispatch(getData(getState().users.params))
  await dispatch(getUserr(user.id))
  return user
})
export const deleteUser = createAsyncThunk('pharmacy/deleteUser', async (id, { dispatch, getState }) => {
  await BaseURL.delete(`pharmacy/${id}`)
  await dispatch(getData(getState().users.params))
  await dispatch(getAllData())
  return id
})

export const PharmacySlice = createSlice({
  name: 'Pharmcy',
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
  }
})

export default PharmacySlice.reducer
