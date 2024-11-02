
import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';


const SocialIcon = () => {


    return (
        <div className="flex justify-center space-x-4 mb-4">
            <FaGoogle

                className="text-blue-500 cursor-pointer text-2xl" />
            <FaGithub

                className="text-blue-500 cursor-pointer text-2xl" />
        </div>
    );
};

export default SocialIcon;