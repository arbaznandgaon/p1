import React from 'react'
import { Link } from 'react-router-dom'
// import AddAlertIcon from '@mui/icons-material/AddAlert';
// import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
// import AddLocationIcon from '@mui/icons-material/AddLocation';
// import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';


function AboutUs() {
  return (
    <div >
    <div class="bg-gray-100 h-auto font-sans">

{/* // <!-- Navigation Bar --> */}
<nav class=" p-4">
    <div class="container mx-auto flex justify-between items-center">
        <a href="#" class="bg-gradient-to-r from-yellow-200  to-yellow-500 rounded-xl p-1 text-3xl  font-semibold">MediaMingle</a>
        <div class="flex space-x-4">
            <a  class="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded"><Link to="/contact">About Us</Link></a>
</div>
    </div>
</nav>

{/* <!-- About Us Section --> */}
<div className='flex'>
<section class="w-1/2 mt-5 p-4">
    <h1 class="text-5xl font-bold mb-4">About Us</h1>
    <p class="text-gray-500 text-xl font- leading-relaxed">
    Welcome to Media Mingle, the ultimate platform where individuals converge to connect, converse, and cultivate meaningful relationships. Our dynamic space is designed for people from all walks of life to engage in rich and diverse conversations, fostering a community that thrives on shared interests and passions.

Media Mingle offers a unique blend of features that empower users to create connections in a vibrant and interactive environment. Whether you're here to network professionally, make new friends, or discuss your favorite topics, our platform provides the perfect stage for genuine interactions.



Discover new horizons as you navigate through our user-friendly interface, finding communities and conversations that align with your interests. From tech enthusiasts to art aficionados, fitness buffs to book lovers, Media Mingle brings together diverse communities under one virtual roof.


Join us on Media Mingle, where every connection is an opportunity to enrich your digital experience and form lasting bonds. Let's create, converse, and connect – because in our world, every interaction matters.</p>
</section>
<section className=' px-4 py-2 w-1/2'>
<div className='text-9xl'>
{/* <AddAlertIcon className='text-9xl'/> <AccessibilityNewIcon className='text-9xl'/> */}
</div> 
<div>

{/* <AddLocationIcon/> */}
{/* <AirplanemodeActiveIcon/> */}

</div>

</section>

</div>

{/* <!-- Footer --> */}
<footer class="p-4 mt-">
    <p class=" text-center">© 2024 MediaMingle. All rights reserved.</p>
</footer>

</div>
    </div>
  )
}

export default AboutUs