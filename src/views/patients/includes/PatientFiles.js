// ** React Imports
import { Fragment } from 'react'

// ** Reactstrap Imports
import { Card, CardBody, CardTitle, Input, Label, Button } from 'reactstrap'

// ** Icons Imports
import { Check, X, Link } from 'react-feather'

const connectedAccounts = [
  {
    checked: true,
    title: 'Google',
    subtitle: 'Calendar and contacts',
    logo: require('@src/assets/images/icons/social/google.png').default
  },
  {
    checked: false,
    title: 'Slack',
    subtitle: 'Communication',
    logo: require('@src/assets/images/icons/social/slack.png').default
  },
  {
    checked: true,
    title: 'Github',
    subtitle: 'Git repositories',
    logo: require('@src/assets/images/icons/social/github.png').default
  },
  {
    checked: false,
    title: 'Mailchimp',
    subtitle: 'Email marketing service',
    logo: require('@src/assets/images/icons/social/mailchimp.png').default
  },
  {
    checked: false,
    title: 'Asana',
    subtitle: 'Communication',
    logo: require('@src/assets/images/icons/social/asana.png').default
  }
]
 
const connections = ({selectedPatient}) => {
  console.log(selectedPatient)
  return !selectedPatient ? null : (
    <Fragment>
      <Card>
        <CardBody>
          <CardTitle className='mb-75'>Connected accounts {selectedPatient.patient[0].pre_examination}</CardTitle>
          <p>Display content from your connected accounts on your site</p>
          {connectedAccounts.map((item, index) => {
            return (
              <div key={index} className='d-flex mt-2'>
                <div className='flex-shrink-0'>
                  <img className='me-1' src={item.logo} alt={item.title} height='38' width='38' />
                </div>
                <div className='d-flex align-item-center justify-content-between flex-grow-1'>
                  <div className='me-1'>
                    <p className='fw-bolder mb-0'>{item.title}</p>
                    <span>{item.subtitle}</span>
                  </div>
                  <div className='mt-50 mt-sm-0'>
                    <div className='form-switch'>
                      <Input type='switch' defaultChecked={item.checked} id={`account-${item.title}`} />
                      <Label className='form-check-label' for={`account-${item.title}`}>
                        <span className='switch-icon-left'>
                          <Check size={14} />
                        </span>
                        <span className='switch-icon-right'>
                          <X size={14} />
                        </span>
                      </Label>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </CardBody>
      </Card>
    
       
    </Fragment>
  )
}

export default connections
