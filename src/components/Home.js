import React from 'react'
import img2 from "../assets/engineer.jpg"
import {AiFillGoogleCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai" 

export const Home = () => {
  return (
    <>
    <div className="home" id="home">
        <main>
        <h1>Nexus Flow</h1>
        <h3>Empowering Connectivity, Enabling Efficiency</h3>    
        </main>
        
    </div>

    <div className="home2">
    <img src={img2} alt="" />
      <div>
        <p>
At Nexus Flow Systems, we are driven by a passion for simplifying the complex and enhancing the way businesses operate. Our innovative Software as a Service (SaaS) solutions are designed to seamlessly connect your workflows, streamline processes, and unlock newfound efficiency.        </p>
      </div>

    </div>

    <div className="home3" id="about">
      <div>
        <h1>
          Who we are
        </h1>
        <p>As the world continues to evolve, so do the needs of businesses. Our commitment to innovation and adaptability ensures that our SaaS offerings stay ahead of the curve, enabling you to stay competitive and achieve your goals with confidence.

Join us on this journey of transformation and discover the power of connectivity with Nexus Flow Systems. With a relentless focus on creating solutions that empower businesses to thrive in today's dynamic digital landscape, Nexus Flow Systems is committed to delivering cutting-edge technology with a human touch. Our team of dedicated experts is dedicated to understanding your unique challenges and crafting tailored solutions that make a tangible difference.
        </p>
      </div>


    </div>
    <div className="home4" id="brands">
      <div>
      <h1>Brands</h1>
      <article>
        <div style={{
          //animationDelay:"0.3s",
        }}>
          <AiFillGoogleCircle/>
          <p>Google</p>
        </div>
        <div style={{
          //animationDelay:"0.3s",
        }}>
          <AiFillInstagram/>
          <p>Instagram</p>
        </div>
        <div style={{
          //animationDelay:"0.3s",
        }}>
          <AiFillYoutube/>
          <p>Youtube</p>
        </div>
      </article>


      </div>
    </div>



    </>
  )
}
