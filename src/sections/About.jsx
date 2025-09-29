import React, { useState } from 'react';
import Globe from 'react-globe.gl';
import Button from '../components/Button';

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);

    // const shieldRing = { lat: 90, lng: 0 };
    const handleCopy = () => {
        navigator.clipboard.writeText('clangitstdy@gmail.com');

        setHasCopied(true);

        setTimeout( () => {
            setHasCopied(false);
        }, 2000)

    }
    return (
        <section className='c-space my-20' id="about">
            <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'>
                <div className='col-span-1 xl:row-span-3'>
                    <div className='grid-container'>
                        <img src="/assets/grid1.png" alt="grid-1" className='w-full sm:h-[276px] h-fit object-contain' />
                        <div>
                            <p className='grid-headtext'>Hi, I'm Langit </p>
                            <p className='grid-subtext'>I’m a software development enthusiast who loves building modern websites and exploring creative solutions. New challenges excite me because they always bring opportunities to learn and improve.</p>
                        </div>
                    </div>
                </div>
                
                <div className='col-span-1 xl row-span-3'>
                    <div className='grid-container'>
                        <img src="/assets/grid2.png" alt="grid-2" className='w-full scale sm:w[275] h-fit object-contain' />
                        <div>
                            <p className='grid-headtext'> Tech Stack</p>
                            <p className='grid-subtext'>I enjoy working with JavaScript, PHP, Python, and different frameworks. While I can use them fairly well, I always challenge myself to improve and explore new tools that help me become a better developer.</p>
                        </div>
                    </div>

                </div>

                <div className='col-span-1 row-span-4'>
                    <div className='grid-container'>
                        <div className='rounded-3xl w-full sm:h[325px] h-fit flex justify-center items-center'>
                            <Globe 
                            height={326}
                            width={326}
                            backgroundColor='rgba(0, 0, 0, 0)'
                            backgroundImageOPacity={0.5}
                            showAtmosphere
                            
                            globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                            // ringsData={[shieldRing]}
                            // ringAltitude={0.1}
                            // ringColor={() => 'lightblue'}
                            // ringMaxRadius={180}
                            // ringPropagationSpeed={15}
                            // ringRepeatPeriod={500}
                           
                           />
                        </div>
                        <div>
                            <p className='grid-headtext'>
                                I work remotely across most timezones
                            </p>
                            <p className='grid-subtext'>
                                I'm based in Indonesia. with remote work available.
                            </p>
                            <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
                        </div>
                    </div>
                </div>

                <div className='xl:col-span-2 xl:row-span-3'>
                    <div className='grid-container'>
                        <img src="/assets/grid3.png" alt="grid-3" className='w-full sm:h-[266px] h-fit object-contain' />
                        <div>
                            <p className='grid-headtext'>
                                My Passion for Coding
                            </p>
                            <p className='grid-subtext'>
                                My passion for coding comes from the excitement of creating digital experiences that are both functional and user-friendly. I enjoy exploring web development, especially front-end, and I love facing challenges that push me to learn new skills, improve my work, and grow as a developer.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='xl:col-span-1 xl:row-span-2'>
                    <div className='grid-container'>
                            <img src="/assets/grid4.png" alt="grid-4" className='w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top' />

                            <div className='space-y-2'>
                                <p className='grid-subtext text-center'>
                                    Contact Me
                                </p>
                                <div className='copy-container' onClick={handleCopy}>
                                    <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="Copy" />
                                    <p className='lg:text-2xl md:text-xl font-medium text-gray_gradient text-white'>clangitstdy@gmail.com</p>
                                </div>
                            </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;