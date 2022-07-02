import React, { useState } from 'react'
import {
  Card,
  CardWhite,
  Calendar,
  Venus,
  VenusWhite,
} from '../../../assets/images'
import { RadioButtons, Input, Button, SpaceDivider } from '../../ui'
import RadioOption from '../../../models/RadioOption'
import classes from './index.module.css'
import useStyles from '../../styles/global'
import SlideIn from '../../animation'

const gender_options = [
  new RadioOption('Female', <Venus />, <VenusWhite />),
  new RadioOption('Male', <Venus />, <VenusWhite />),
]
const membership_options = [
  new RadioOption('Classic', <Card />, <CardWhite />),
  new RadioOption('Silver', <Card />, <CardWhite />),
  new RadioOption('Gold', <Card />, <CardWhite />),
]

const initialState = {
  name: '',
  gender: '',
  dob: '',
  email: '',
  mobile: '',
  id: '',
  membership: '',
}

const MembershipForm = () => {
  const [formState, setFormState] = useState(initialState)

  const onCancel = () => {
    setFormState(initialState)
  }

  console.log(formState)

  const styles = useStyles()
  return (
    <SlideIn from="right">
      <div className={classes.form_container}>
        <SpaceDivider marginVertical={60} />
        <div className={classes.formContent}>
          <Input
            placeholder="John Doe"
            title="Name"
            value={formState.name}
            handleChange={(e) =>
              setFormState((prev) => {
                return { ...prev, name: e }
              })
            }
          />
          <RadioButtons
            title="Gender"
            options={gender_options}
            value={formState.gender}
            handleChange={(e) =>
              setFormState((prev) => {
                return { ...prev, gender: e }
              })
            }
          />
          <Input
            placeholder="dd/mm/yyyy"
            title="Date of Birth"
            icon={<Calendar />}
            value={formState.dob}
            handleChange={(e) =>
              setFormState((prev) => {
                return { ...prev, dob: e }
              })
            }
          />
          <Input
            placeholder="name@gmail.com"
            title="Email"
            type={'email'}
            value={formState.email}
            handleChange={(e) =>
              setFormState((prev) => {
                return { ...prev, email: e }
              })
            }
          />
          <Input
            placeholder="+91 98765 43210"
            title="Mobile"
            value={formState.mobile}
            handleChange={(e) =>
              setFormState((prev) => {
                return { ...prev, mobile: e }
              })
            }
          />
          <Input
            placeholder="576802-ERD0348 45"
            title="Customer ID"
            value={formState.id}
            handleChange={(e) =>
              setFormState((prev) => {
                return { ...prev, id: e }
              })
            }
          />
          <RadioButtons
            title="Membership"
            options={membership_options}
            onSelect={(e) => console.log(e)}
            value={formState.membership}
            handleChange={(e) =>
              setFormState((prev) => {
                return { ...prev, membership: e }
              })
            }
          />
          <SpaceDivider marginVertical={30} />
          <div className={styles.buttonContainer}>
            <Button
              title="cancel"
              type="secondary"
              onClickHandler={(e) => onCancel()}
            />
            <Button
              title="save"
              type="primary"
              onClickHandler={(e) => console.log(e)}
            />
          </div>
        </div>
      </div>
    </SlideIn>
  )
}

export default MembershipForm
