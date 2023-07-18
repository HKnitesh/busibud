'use client'
import * as Avatar from '@radix-ui/react-avatar';

export default function Profile({ className }) {
    return (
        <>
            <Avatar.Root className={`rounded-full ${className}`}>
                <Avatar.Image
                    className='w-11 h-11 rounded-full items-center justify-center'
                    src='https://res.cloudinary.com/drw8eqw3i/image/upload/v1687656149/Avatar_ei1qyq.png'
                    // src='https://res.cloudinary.com/drw8eqw3i/image/upload/v1687488235/samples/people/kitchen-bar.jpg'
                    alt='avatar img'
                />

                <Avatar.Fallback className=' font-semibold text-black text-base absolute top-3 left-3 font-inter' >AV</Avatar.Fallback>
            </Avatar.Root>
        </>
    );
}