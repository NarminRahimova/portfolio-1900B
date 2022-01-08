import React from 'react'
import img from '../img.jpeg'

const Aboutme =() => {
    return (
        <div className="container py-5" id="aboutme">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img src={img} alt="" className="profile-img" />
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">About me</h1>
                    <p className="p-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, cupiditate molestias dolore pariatur, aliquam dolor, ipsa soluta velit magnam earum deleniti quia est enim exercitationem molestiae laudantium! Sapiente accusantium quisquam adipisci? Nostrum quae temporibus repellendus aut, omnis obcaecati explicabo odit pariatur possimus nulla molestiae, id aspernatur blanditiis, accusantium aliquid libero consequatur reiciendis debitis. Incidunt, numquam. Eius, deleniti. Fugit cumque commodi veniam. Ab reprehenderit voluptatem voluptates sit porro, ipsa cumque obcaecati deserunt aliquam corrupti nemo quas aspernatur eligendi, accusantium harum odio.</p>
                </div>
            </div>
        </div>
    )
}

export default Aboutme
