import React, { useState, useEffect } from 'react'
import { FaImage, FaSpinner, FaTimes } from 'react-icons/fa';
import ImageUploading from 'react-images-uploading'
import { useDispatch, useSelector } from 'react-redux';
import { setErrorMessage } from '../../features/profile/profileSlice';

const PhotoEdit = ({title, setShowImageUploader, dispatcher}) => {
    const maxNumber = 1;
    const [images, setImages] = useState([])
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const {errorMessage} = useSelector( store => store.profile)

    const handleChange = (imageList, addUpdateIndex) =>{
        setImages(imageList)
    }

    const uploadImage = async(image) =>{
        setLoading(true)
        try {
            const res = await dispatch(dispatcher(image)).unwrap()
            setLoading(false)
            setShowImageUploader(false)
        } catch (error) {
            setLoading(false)
        }
    }

    useEffect(()=>{
        dispatch(setErrorMessage(''))
    }, [])

    return (
        <div className='w-full p-2 lg:p-10 bg-black bg-opacity-70 h-screen fixed top-0 left-0 z-50'>
            <FaTimes 
                className='font-bold text-2xl text-primary lg:text-3xl lg:text-white absolute right-1 top-1 lg:right-10 lg:top-10 bg-slate-500 rounded-full'
                onClick={()=>setShowImageUploader(false)}
            />
            <ImageUploading 
                value={images}
                onChange={handleChange}
                maxNumber={maxNumber}
                dataURLKey='data_url'
                maxFileSize={1024 * 1024}
            >
                {
                    ({
                        imageList,
                        onImageUpload,
                        onImageRemoveAll,
                        onImageUpdate,
                        onImageRemove,
                        isDragging,
                        dragProps,
                        errors
                    })=>(
                        <div className='w-full flex flex-col justify-between text-center m-auto gap-4 lg:w-1/3 bg-slate-50 p-3 lg:p-5 rounded-md shadow-lg h-full'>
                            <h2 className='font-semibold'>{title}</h2>
                            {
                                errorMessage? <>
                                    <small className='text-red-500 font-semibold'>{errorMessage}</small>
                                </> : null
                            }
                            {
                                errors && <div>
                                    { errors.maxFileSize && <small className='text-red-500 font-semibold'>Image too large (maximum size 1MB)</small>}
                                </div>
                            }
                            {
                                imageList.length === 0 ? (
                                    <button 
                                        className='bg-primary p-2 px-4 rounded-full text-white hover:bg-black hover:text-white'
                                        onClick={onImageUpload}
                                        {...dragProps}
                                        >
                                            Drop or click here
                                    </button>
                                ): null
                            }
                            <div className='flex flex-col justify-evenly gap-5 flex-grow'>
                                {
                                    imageList.length === 0 ? (
                                        <FaImage className='w-full h-1/2 bg-slate-300 text-slate-500 rounded-sm'/>
                                    ): null
                                }
                                {
                                imageList.map((image, index) =>(
                                    <div className='flex flex-col gap-5' key={index}>
                                        <img 
                                            src={image['data_url']} alt='' 
                                            className='m-auto h-full w-full'
                                        />
                                        <div className='w-full flex justify-between gap-4'>
                                            <button 
                                                className='w-full bg-black p-2 px-4 flex items-center justify-center gap-2 rounded-full text-white hover:bg-primary hover:text-black'
                                                onClick={()=>uploadImage(image)}
                                                disabled={loading}
                                                > 
                                                {
                                                    loading? (
                                                        <>
                                                            <FaSpinner className='animate-spin text-white text-xl'/> Uploading
                                                        </>
                                                    ): (
                                                        'Upload'
                                                    )
                                                }
                                            </button>
                                            <button 
                                                className='w-full bg-primary p-2 px-4 rounded-full text-white hover:bg-black hover:text-primary'
                                                onClick={onImageRemoveAll}
                                                > Remove 
                                            </button>
                                        </div>
                                    </div>
                                        
                                )) 
                            }
                            </div>
                        </div>
                    )
                }
            </ImageUploading>
        </div>
    )
}

export default PhotoEdit