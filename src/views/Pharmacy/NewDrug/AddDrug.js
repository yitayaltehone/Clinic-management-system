import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input, Row } from 'reactstrap'
import { Fragment, useState } from 'react'
import Add from '@material-ui/icons/Add'
import { useForm, Controller } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import {  addUser } from '../store'
// import { store } from '@store/store'
const defaultValues = {
  name: '',
  properties: '',
  order_price: '',
  sell_price: '',
  expire_date: ''
  
}

const AddDrug = () => {

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
          name: data.name,
          properties: data.properties,
          order_price: data.order_price,
          sell_price: data.sell_price,
          amount: data.amount,
          expire_date: data.expire_date
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

    return (
        <div>
          <div className='d-flex align-items-center mb-sm-0 mb-1 me-1'>
             
        <Button color='success' outline onClick={() => setShow(true)}>
          <Add /> Add new Drug
        </Button>
        <Modal isOpen={show} toggle={() => setShow(!show)} className='modal-dialog-centered'>
          <ModalHeader color='success' toggle={() => setShow(!show)}>New Drug Registeration Form</ModalHeader>
          <ModalBody>
            <Row tag='form' className='gy-1 pt-75' onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-2'>
              <Label className='form-label' for='name'>
                Name:
              </Label>
              <Controller
                control={control}
                name='name'
                render={({ field }) => {
                  return (
                    <Input
                      {...field}
                      id='name'
                      placeholder='Amoxaciline'
                      value={field.value}
                      invalid={errors.name && true}
                    />
                  )
                }}
              />
              {errors.name && <FormFeedback>Please enter a valid First Name</FormFeedback>}
            </div>
            <div className='mb-2'>
              <Label className='form-label' for='order_price'>
                Order price:
              </Label>
              <Controller
                control={control}
                name='order_price'
                render={({ field }) => {
                  return (
                    <Input
                      {...field}
                      id='order_price'
                      placeholder='John'
                      value={field.value}
                      invalid={errors.order_price && true}
                    />
                  )
                }}
              />
              {errors.order_price && <FormFeedback>Please enter a valid First Name</FormFeedback>}
            
            </div>
            <div className='mb-2'>
              <Label className='form-label' for='order_price'>
                Sell price:
              </Label>
              <Controller
                control={control}
                name='sell_price'
                render={({ field }) => {
                  return (
                    <Input
                      {...field}
                      id='sell_price'
                      placeholder='John'
                      value={field.value}
                      invalid={errors.sell_price && true}
                    />
                  )
                }}
              />
              {errors.sell_price && <FormFeedback>Please enter a valid First Name</FormFeedback>}
            
            </div>
            <div className='mb-2'>
              <Label className='form-label' for='amount'>
                Amount:
              </Label>
              <Controller
                control={control}
                name='amount'
                render={({ field }) => {
                  return (
                    <Input
                      {...field}
                      id='amount'
                      placeholder='John'
                      value={field.value}
                      invalid={errors.amount && true}
                    />
                  )
                }}
              />
              {errors.amount && <FormFeedback>Please enter a valid First Name</FormFeedback>}
            
            </div>
            <div className='mb-2'>
              <Label className='form-label' for='expire_date'>
                Expired Date:
              </Label>
              <Controller
                control={control}
                name='expire_date'
                
                render={({ field }) => {
                  return (
                    <Input
                      {...field}
                      id='expire_date'
                      type='date'
                      value={field.value}
                      invalid={errors.expire_date && true}
                    />
                  )
                }}
              />
              {errors.expire_date && <FormFeedback>Please enter a valid First Name</FormFeedback>}
            
            </div>
            <div className='mb-2'>
                <Label className='form-lable' for='properties' >Preperty</Label>
               
          <Controller
                control={control}
                name='properties'
                render={({ field }) => {
                  return (
                    <Input
                      {...field}
                      type='textarea'
                       placeholder='Write something About the new drug property)'
                       rows={5}
                      id='properties'
                      
                      value={field.value}
                      invalid={errors.properties && true}
                    />
                  )
                }}
              />
              {errors.properties && <FormFeedback>Please enter a valid First Name</FormFeedback>}
            </div>
            <Button type='submit' className='me-1' color='success' >
              Submit
            </Button>
            <Button type='reset' color='secondary' onClick={() => setShow(false)}>
          Cancel
        </Button>
          </Row>
          </ModalBody>
        </Modal>
      </div>
     
        </div>

    )
}
export default AddDrug