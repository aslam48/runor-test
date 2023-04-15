import React from 'react'
import { Formik, useFormik } from 'formik'
import * as Yup from 'yup'
import './UserServiceProfile.css'
import FormInputError from '../FormInputError/FormInputError'
import FormError from '../FormError/FormError'
import { useSelector } from 'react-redux'


const UserServiceProfileForm = () => {
    const {errorMessage: message} = useSelector(store => store.profile)
    const formik = useFormik({
        initialValues: {
            skills: '',
            category: '',
            accountType: '',
        },
        validationSchema: Yup.object({
            skills: Yup.string().required('Skill is required'),
            category: Yup.string().min(2, "Must be atlest 2 characters").required('Category name is required'),
            accountType: Yup.string().min(2, "Must be atlest 2 characters").required('Account type is required'),
        }),
        onSubmit: async(values) => {
            // do something on submit
        }
    })
    return (
        <div className='service-profile-form'>
            {/* <h2 className='font-bold text-center'>Configure your account</h2> */}
            <form onSubmit={formik.handleSubmit}>
                <FormError message={message}/>
                <div className='form-group'>
                    <label htmlFor='accountType'>Select account type that matches your interest on Runor</label>
                    <input 
                        type='text' 
                        id='accountType'
                        {...formik.getFieldProps('accountType')}
                    />
                    <FormInputError 
                        isTouched={formik.touched.accountType}
                        errorMessage={formik.errors.accountType}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='firstname'>Select service you are interested in or you wish to provide</label>
                    <input 
                        type='text' 
                        id='category'
                        {...formik.getFieldProps('category')}
                    />
                    <FormInputError 
                        isTouched={formik.touched.category}
                        errorMessage={formik.errors.category}
                    />
                </div>

                <div className='form-group'>
                    <label htmlFor='othername'>Skills related to the service you offer</label>
                    <input 
                        type='text' 
                        id='skills'
                        {...formik.getFieldProps('skills')}
                    />
                    <FormInputError 
                        isTouched={formik.touched.skills}
                        errorMessage={formik.errors.skills}
                    />
                </div>
            </form>
        </div>
    )
}

export default UserServiceProfileForm