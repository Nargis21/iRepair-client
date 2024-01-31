/* eslint-disable react/no-unescaped-entities */
import macbook from '@/assets/images/macbook-exposed.png';
import { Button } from 'antd';
import Image from 'next/image';


const HeroSection = () => {
    return (

        <div className="h-full grid grid-cols-1 lg:grid-cols-2 py-20 justify-items-center items-center ">
            <div
                className="flex flex-col justify-center items-center lg:items-start"
            >
                <h1
                    className="text-5xl lg:text-8xl font-bold text-nowrap"
                >
                    <span className="text-gray-400">Don't worry,</span> <br />
                    <span>We'll fix it.</span>
                </h1>
                <p
                    className="text-lg w-full text-center lg:text-start max-w-[50ch] mt-10 mb-5 text-dark-gray"
                >
                    Welcome to
                    <span className="font-semibold text-black"> iRepair</span>, your
                    one-stop place for all kinds of
                    <span className="font-semibold text-black">Macbook repairs</span>
                    and diagnostics.
                </p>
                <div>
                    <Button type='primary' size='large'>Book a service</Button>
                </div>
            </div>
            <div
                className="mt-10">
                <Image
                    className="drop-shadow-2xl h-[80%] w-[80%]"
                    src={macbook}
                    alt=""
                />
            </div>
        </div>

    );
};

export default HeroSection;
