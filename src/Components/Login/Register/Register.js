import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import Lottie from 'lottie-web';


const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const container = useRef(null)
    useEffect(() => {
        Lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('./lottie.json')
        })
    }, [])
    return (
        <div className='mt-[5.5rem] bg-[#F5F5F5]'>
            <div className='h-screen flex justify-center items-center  w-[80%] mx-auto'>
                <div className='shadow bg-white py-12 px-8  w-[40%]'>
                    <h1 className='font-semibold text-2xl mb-6'>Wellcome To Our <span className='text-blue-dark'>Village</span> </h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type='text' className='block form-input mb-4' placeholder='Your Name' {...register("name")} />
                        <input type='text' className='block form-input mb-4' placeholder='Your Village Name' {...register("VillName")} />
                        <input type="email" placeholder='Email' required className="mb-4 form-input  w-full " {...register('email')} />

                        <input className='form-input' placeholder='Password' {...register("password", { required: true })} />

                        {errors.password && <span className='block text-red-700 my-2'>This field is required</span>}
                        <button type='submit' className='btn mt-4 w-full'>Sign Up</button>
                    </form>
                </div>
                <div className='w-[60%]' >
                    <div className='' ref={container}>

                    </div>
                </div>


            </div>
        </div>
    );
};

export default Register;