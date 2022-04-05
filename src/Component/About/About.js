import React from 'react';

const About = () => {
    return (
        <div className='home mx-28 '>
            <div><img src={require('../images/book_flex2_.jpg')} alt="Laptop" 
            /></div>
            <div>
                <h2 className='text-4xl'>Samsung Galaxy Book Flex2 Alpha 2-in-1 Laptop, 13.3" QLED FHD Touchscreen 400 nit, Intel Quard-Core i5-1135G7 (Beat i7-1065G7), 8GB LPDDR4x RAM, 256GB PCIe SSD, WiFi 6, BT 5.1, Windows 10, Type-C HUB</h2>

                <h4 className='text-xl px-3 mt-12 mb-3 text-left'>About this item:</h4>
                <ul>
                    
                    <li>CPU: 11th Gen Intel Core i5-1135G7 Processor @ 2.40GHz (4 Cores, 8 Threads, 8M Cache, up to 4.20 GHz).</li>
                    <li>13.3 in Full HD QLED touchscreen (1920 x 1080), 10-finger multi-touch support Display; Intel Iris Xe Graphics; 360° flip-and-fold convertible design.</li>
                    <li>8GB LPDDR4x SDRAM Memory for full-power multitasking; 256GB PCIe SSD; 720p HD webcam and Microphone Ideal for Home, Student, Professionals, Small Business, School Education, and Commercial Enterprise, Online Class, Google Classroom, Remote Learning, Zoom Ready.</li>
                    <li>Wi-Fi 6 (Gig+), 802.11 ax and Bluetooth v5.1; 1 HDMI, 2 USB3.0, 1 Headphone out/Mic-in Combo; MicroSD Multi-media Card Reader</li>
                    <li>Bundled 4 In 1 USB Type-C To Ethernet Adapter With 3 x Supper Speed USB 3.0 ports. Windows 10 Home 64 bit (Free Upgrade to Windows 11); Backlit Keyboard; Fingerprint Reader. Royal Silver.</li>
                </ul>
            </div>
        </div>
    );
};

export default About;