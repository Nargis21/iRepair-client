'use client'
import { Button, Divider, Input } from 'antd';
import React from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { createUser } from "@/services/users/create-user";
import { toast } from 'sonner';
import { signIn } from 'next-auth/react';
import Link from 'next/link';

type TForm = {
    name: string;
    email: string;
    password: string
}

const RegisterPage = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm<TForm>();
    const onSubmit = async (data: TForm) => {
        const status = await createUser({ role: "user", ...data })
        if (status?.data?.acknowledged) {
            toast.success('Register Successful')
            await signIn("irepair", {
                email: data.email,
                password: data.password,
                callbackUrl: "/dashboard",
            });
            reset()
        } else {
            toast.error('Register Failed')
        }
    };

    return (
        <div className=''>

            <div className="lg:p-10 md:p-6 p-2 shadow-xl bg-white max-w-lg my-12 mx-auto">
                <h1 className='text-2xl text-center mb-8'>Register</h1>
                <form onSubmit={handleSubmit(onSubmit)} >

                    <div className='mb-4 w-full'>
                        <label>Full Name</label>
                        <Input
                            type="text"
                            placeholder="Full Name"
                            className="w-full mt-2 p-3 border border-gray-500 rounded-md form-control"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: "Name is required",
                                },
                            })}
                        />
                        {errors.name?.type === "required" && (
                            <span className="label-text-alt text-red-500 text-sm">
                                {errors.name.message}
                            </span>
                        )}
                    </div>
                    <div className='mb-4 w-full'>
                        <label>Email Address</label>
                        <Input
                            type="email"
                            placeholder="Email Address"
                            className="w-full mt-2 p-3 border border-gray-500 rounded-md"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: "Email is required",
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: "Provide a valid email",
                                },
                            })}
                        />
                        {errors.email?.type === "required" && (
                            <span className="label-text-alt text-red-500 text-sm">
                                {errors.email.message}
                            </span>
                        )}
                        {errors.email?.type === "pattern" && (
                            <span className="label-text-alt text-red-500 text-sm">
                                {errors.email.message}
                            </span>
                        )}
                    </div>
                    <div className='mb-4 w-full'>
                        <label>Password</label>
                        <Input

                            type="password"
                            placeholder="Password"
                            className="w-full mt-2 p-3 border border-gray-500 rounded-md"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: "Password is required",
                                },
                                minLength: {
                                    value: 6,
                                    message: "Password should be contains 6 characters",
                                },
                            })}
                        />
                        {errors.password?.type === "required" && (
                            <span className="label-text-alt text-red-500 text-sm">
                                {errors.password.message}
                            </span>
                        )}
                        {errors.password?.type === "minLength" && (
                            <span className="label-text-alt text-red-500 text-sm">
                                {errors.password.message}
                            </span>
                        )}

                    </div>

                    <Button type='primary' block size='large' htmlType='submit'>Register</Button>
                </form>
                <p className="text-sm pt-2 font-semibold ">
                    Already have a account?
                    <Link className="text-sky-500 underline ml-2" href="/login">
                        Please Login
                    </Link>
                </p>
                <Divider plain >or</Divider>
                <Button type='primary' block size='large' htmlType='submit' className='mb-4 lg:mb-0 flex items-center justify-center gap-2 font-semibold w-full text-black' ghost>
                    <Image
                        src='https://cdn-icons-png.flaticon.com/512/2965/2965278.png'
                        sizes="100vw"
                        width={30}
                        height={30}
                        alt="product image"
                    />
                    <p>Continue With Google</p>
                </Button>
            </div>
        </div>
    );
};

export default RegisterPage;