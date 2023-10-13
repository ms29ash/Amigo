import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Error, Form, Input, InputWrapper, ShowPass } from '../Styles/FormStyle'
import { useState } from 'react'
import tw from 'tailwind-styled-components'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import axios from '../axios'
import Cookies from 'universal-cookie'


function Login() {
    //password show or hide
    const [show, setShow] = useState(false)
    // api call error
    const [resError, setError] = useState(false);
    //universal cookies 
    const cookies = new Cookies();
    //use form hook
    const { register, handleSubmit, formState: { errors }, reset, } = useForm()
    //router navigation
    const navigate = useNavigate()
    //mutation
    const { status, mutate } = useMutation({
        mutationFn: (user) => {
            return axios.post('/auth/login', user)
        },
    })

    //Form Submit hanlder
    const onSubmit = (data) => {
        mutate(data, {
            onSuccess: (data) => {
                reset();
                let token = data?.data?.token;
                cookies.set('token', token, { maxAge: 2592000 })
                navigate('/', { replace: true })
            }, onError: (error) => {
                console.log(error);
                setError(error?.response?.data?.message)
            },
        })
    }



    return (
        <Container >
            <div>
                <Wrapper>
                    <img src="/logo.png" className="w-20 " alt="" />
                    <Form onSubmit={handleSubmit(onSubmit)} >
                        <h1 className="mt-4 mb-6 text-2xl font-bold" >Welcome Back</h1>
                        <p>{resError}</p>
                        <InputWrapper $error={errors.email ? true : false}>
                            <Input type="text" placeholder="Email" {...register('email', { required: "Email is required", pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Invalid email" } })} />
                            <Error>{errors?.email?.message}</Error>
                        </InputWrapper>
                        <InputWrapper $error={errors.password ? true : false}>
                            <Input type={show ? 'text' : "password"} placeholder="Password"  {...register('password', { required: "Password is required", minLength: { value: 4, message: "Password must be at least 4 characters" } })} />
                            <ShowPass onClick={() => setShow(!show)} className="">{show ? 'hide' : "show"}</ShowPass>
                            <Error>{errors?.password?.message}</Error>
                        </InputWrapper>
                        <Button disabled={status === 'pending' ? true : false} type="submit">Login</Button>
                    </Form>
                    <p className="mt-6" > haven't an account <Link to="/auth/signup" className="font-bold text-green hover:underline " >Sign Up</Link> </p>

                </Wrapper>
            </div>
        </Container>
    )
}

export default Login

const Container = tw.div`w-screen h-screen grid place-items-center pattern`
const Wrapper = tw.div`z-10 relative flex flex-col items-center bg-gray p-6 rounded-lg py-[15%]`