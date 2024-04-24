import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input, UncontrolledTooltip } from 'reactstrap'
import { Fragment, useState } from 'react'
import { Medication } from '@mui/icons-material'
const SellDrug = () => {
const [formModal, setFormModal] = useState(false)
    return (
        <div>
            <div className='d-flex align-items-center mb-sm-0 mb-1 me-1'>
             
             <Button color='white'  onClick={() => setFormModal(!formModal)}>
               <Medication id='login-tip' color='success'/> 
             </Button>
             <UncontrolledTooltip target='login-tip' placement='left'>
                Here Selling Drugs.
              </UncontrolledTooltip>
             
             <Modal isOpen={formModal} toggle={() => setFormModal(!formModal)} className='modal-dialog-centered'>
               <ModalHeader color='success' toggle={() => setFormModal(!formModal)}>Selling Drug Lists</ModalHeader>
               <ModalBody>
                 <div className='mb-2'>
                   <Label className='form-label' for='name'>
                     Drug Name:
                   </Label>
                   <Input type='text' id='email' placeholder='Amoxaciline 500' />
                 </div>
                 <div className='mb-2'>
                   <Label className='form-label' for='sell'>
                     Sell price:
                   </Label>
                   <Input type='text' id='password' placeholder='2640' />
                 </div>
                 <div className='mb-2'>
                   <Label className='form-label' for='password'>
                     Amount:
                   </Label>
                   <Input type='number' id='password' placeholder='1524' />
                 </div>
                 <div className='mb-2'>
                   <Label className='form-label' for='date'>
                     Expired Date:
                   </Label>
                   <Input type='date' id='password' />
                 </div>
                 <div className='mb-2'>
                     <Label className='form-lable' >Property</Label>
                     <Input
                 type='textarea'
                 placeholder='Amoxicillin is used to treat a wide variety of bacterial infections. This medication is a penicillin-type antibiotic. It works by stopping the growth of ...
                 '
                 rows={5}
               />
     
                 </div>
               </ModalBody>
               <ModalFooter>
                 <Button color='success' onClick={() => setFormModal(!formModal)}>
                   Selling Drugs
                 </Button>{' '}
                 <Button color='secondary' onClick={ () => setFormModal(!formModal)  } >
               Cancel
             </Button>
               </ModalFooter>
             </Modal>
           </div>
           
        </div>
    )

}
export default SellDrug