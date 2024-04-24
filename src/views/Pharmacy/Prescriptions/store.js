// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Axios Imports 
// import axios from 'axios'

import { BaseURL } from '../../../global/BaseURL'
export const getAllData = createAsyncThunk('Prescript/getAllData', async () => {
  const response = await BaseURL.get(`persons?status=1`)
  console.log(response.data)
  return response.data[`persons`]
})

export const getData = createAsyncThunk('Prescript/getData', async params => {
  const response = await BaseURL.get('persons?status=1', params)
  return {
    params,
    data: response.data['persons'],
    totalPages: 10//response.data.total
  }
})

export const getPrescription = createAsyncThunk('prescription/getPrescription', async obj => {
  const response = await BaseURL.get(`persons/${obj.id}/prescriptions`)
  // const data = response.data['patient'][0]
  console.log(response.data['prescriptions'], 'hello')
  return response.data['prescriptions']
})
export const getDrugList = createAsyncThunk('pharmacy_order/getPrescription', async obj => {
  const response = await BaseURL.get(`order/${obj.drug_name}/pharmacy`)
  // const data = response.data['patient'][0]
  // console.log(response.data['pharmacy_order'])
  return response.data['pharmacy_order']
})
export const updateDrugs = createAsyncThunk('pharmacy_order/approveOrder', async drugObj => {
  // const response = await BaseURL.get(`order/${obj.drug_name}/pharmacy`)
  // return response.data['pharmacy_order']
  
  console.log(drugObj)
  return medcenOrder
})
export const approveOrder = createAsyncThunk('pharmacy_order/approveOrder', async medcenOrder => {
  // const response = await BaseURL.get(`order/${obj.drug_name}/pharmacy`)
  // return response.data['pharmacy_order']
  console.log(medcenOrder)
  // dispatch(updateDrugs({medcenOrder}))
  return medcenOrder
})
export const PrescriptSlice = createSlice({
  name: 'Prescript',
  initialState: {
    data: [],
    total: 1,
    params: {},
    allData: [],
    drugList: [],
    PatientPrescription: [],
    selectedUser: null

  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getAllData.fulfilled, (state, action) => {
        state.allData = action.payload
      })
      .addCase(getDrugList.fulfilled, (state, action) => {
        state.drugList = action.payload
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.data = action.payload.data
        state.params = action.payload.params
        state.total = action.payload.totalPages
      })
      .addCase(getPrescription.fulfilled, (state, action) => {
        state.PatientPrescription = action.payload
      })
  
  }
})

export default PrescriptSlice.reducer
