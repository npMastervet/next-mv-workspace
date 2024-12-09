import React from 'react'
import { Button } from '@/components/ui/button'
import FormInput from '@/components/form/FormInput'
import { SubmitButton } from '@/components/form/Buttons'
import FormContainer from '@/components/form/FormContainer'

const CreateProfileAction = async (prevState:any,formData: FormData) => {
  'use server'
  const firstName = formData.get('firstName');  
  console.log('test', firstName);
  return {
    message : 'Create Profile Success'
  }
}

const CreateProfile = () => {
  return (
    <section>
      <h1 className='text-2xl font-semibold mb-8 capitalize'>New User</h1>
      <div className='border p-8 rounded-md'>
        <FormContainer action={CreateProfileAction} >
          <div className='grid md:grid-cols-2 gap-4 mt-4'>
            <FormInput name="firstName" label="First Name" type="text" placeholder="First Name" />
            <FormInput name="lastName" label="Last Name" type="text" placeholder="Last Name" />
            <FormInput name="userName" label="User Name" type="text" placeholder="User Name" />
          </div>
          <SubmitButton text="Create Profile" className='' size='lg' />
        </FormContainer>
      </div>
    </section>
  )
}

export default CreateProfile