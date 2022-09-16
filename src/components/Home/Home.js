import React from 'react'
import {Link} from "react-router-dom"

function Home() {
  return (
    <div>
        <section className="h-800">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner total_slider">
                    <div className={"carousel-item active"} data-bs-interval="2000">
                        <div className="image">
                            <img src="img/1.jpg" className="d-block w-100 h-800" alt="..."/>
                        </div>
                        <div className="caption">
                            <h1>Leading sustainable parking design on Calgary's 9th Avenue</h1>
                            <Link to='#' className="btn bg-transparent view_button" type="button">
                                View Project
                            </Link>
                        </div>
                    </div>
                    <div className={"carousel-item"} data-bs-interval="2000">
                        <div className="image">
                            <img src="img/2.jpg" className="d-block w-100 h-800" alt="..."/>
                        </div>
                        <div className="caption">
                            <h1>Leading sustainable parking design on Calgary's 9th Avenue</h1>
                            <Link to='#' className="btn bg-transparent view_button" type="button">
                                View Project
                            </Link>
                        </div>
                    </div>
                    <div className={"carousel-item"} data-bs-interval="2000">
                        <div className="image">
                            <img src="img/3.jpg" className="d-block w-100 h-800" alt="..."/>
                        </div>
                        <div className="caption">
                            <h1>Leading sustainable parking design on Calgary's 9th Avenue</h1>
                            <Link to='#' className="btn bg-transparent view_button" type="button">
                                View Project
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="work pt-5 pb-0">
            <div className="col-md-12 text-center">
                <h2>Our Work</h2>
                <div className="separator">
                    <div className="spacer"></div>
                    <div className="spacer-single"></div>
                    <div className="gallery">
                        <div className="row mp">
                            <div className="col-md-3">
                                <div className="work_img">
                                    <img src="img/work1.jpg" alt="" height="300" style={{width: "100%"}}/>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="work_img">
                                    <img src="img/work2.jpg" alt="" height="300" style={{width: "100%"}}/>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="work_img">
                                    <img src="img/work3.jpg" alt="" height="300" style={{width: "100%"}}/>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="work_img">
                                    <img src="img/work4.jpg" alt="" height="300" style={{width: "100%"}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="view_project">
            <Link to='#' className="btn bg-transparent project_button" type="button">VIEW ALL PROJECTS</Link>
        </section>

        <section className="work pt-5 pb-0">
            <div className="col-md-12 text-center">
                <h2>Recent Videos</h2>
                <div className="separator">
                    <div className="spacer"></div>
                    <div className="spacer-single"></div>
                    <div className="gallery">
                        <div className="row mp videos">
                            <div className="col-md-3">
                                <embed src="https://www.youtube.com/embed/OVhC0O0-0fI" width="100%" height="100%"/>
                            </div>
                            <div className="col-md-3">
                                <embed src="https://www.youtube.com/embed/CKpBTf84YDY" width="100%" height="100%"/>
                            </div>
                            <div className="col-md-3">
                                <embed src="https://www.youtube.com/embed/sthRo2gtmIU" width="100%" height="100%"/>
                            </div>
                            <div className="col-md-3">
                                <embed src="https://www.youtube.com/embed/_EsEbxeL5Hs" width="100%" height="100%"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="view_project_vdo">
            <Link to='#' className="btn bg-transparent project_button" type="button">VIEW ALL PROJECTS</Link>
        </section>
    </div>
  )
}

export default Home
