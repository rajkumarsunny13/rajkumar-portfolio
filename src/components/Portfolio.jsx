import "./Portfolio.css";
// import { useState } from "react";
import myImg from '../assets/myimage_bw.jpg';
import deSiner from '../assets/designer.svg';
import cVd from '../assets/Cardiovascular_disease_1.png'
import fOw from '../assets/fow.jpeg'
import hTml from '../assets/html-5.png'
import cSs from '../assets/css-3.png'
import jsImg from '../assets/javascript.png'
import rEact from '../assets/react.png'
import jAva from '../assets/java.png'
import sQl from '../assets/sql.png'
const Portfolio = () => {
    return (
        <>
            <div className="parent">
                <div className="Header">
                    <div id="myimg"><img src={myImg} alt="myimage"></img></div>
                    <h1>KANDUKURI RAJKUMAR</h1>
                    <div className="Nav">
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#projects">Projects</a>
                        <a href="#skills">Skills</a>
                        <a href="#contact">Contact</a>
                    </div>
                </div>
                <div className="Main">
                    <section id="home">
                       <h2> Hello! I’m Kandukuri Rajkumar, an aspiring web developer and a recent graduate from R.VR & J.C College of Engineering.I have a strong interest in building beautiful, functional websites and applications.I focus on writing clean code, improving my skills every day, and creating projects that solve real-world problems.</h2>
                    </section>
                         <p className="abo">About</p>
                    <section id="about">
                       <div className="p1"> <p>
                            Hi, I'm Rajkumar, a passionate web developer with a strong foundation in modern frontend technologies.<br/> I enjoy turning ideas into fully functional and visually appealing web applications.
                        </p></div>
                       <div className="p2"> <p>
                            I recently graduated from R.V.R and J.C College of Engineering,<br/> where I developed a solid understanding of programming fundamentals, problem-solving, and software development practices.
                        </p></div>
                        <div className="p3"><p>
                            I love exploring new tools, improving my coding style, and building projects that reflect my creativity and technical skills. My current focus is on mastering React, JavaScript, and responsive UI design. I’m always open to learning, collaborating, and working on projects that challenge me to grow as a developer.
                        </p></div>
                    </section>
                          <p className="pro">Projects</p>
                    
                    <section id="projects">
                        <div className="pro1">
                            <div className="pr1"><img className="cvd" src={cVd} alt="Cardiovascular project"></img>
                                    <article id="phead">Detection of Cardiovasuclar Diseases</article>
                                    <p id="proj1">Detection of cardiovascular diseases in ECG images analyzes the heart's electrical patterns to identify irregularities, enabling early diagnosis and monitoring of cardiac health.</p>
                                    <p id="sset1">Python, CNN, Alexnet</p>

                            </div>
                              <div className="pr2"><img className="fow" src={fOw}></img>
                                    <article id="phead2">Food order website</article>
                                    <p id="proj2">A static food ordering website that showcases restaurant menus, food items, and pricing with a clean, responsive UI.
                                    Users can browse dishes and view order details, but ordering and payment features are not implemented.</p>
                                    <p id="sset">HTML, CSS, Javascript, Sql</p>
                              </div>
                        </div>
                    </section>
                       <p className="sskil">Skills</p>
                    <section id="skills">
                        <div className="sl">
                              <img className="pic1" src={hTml}></img>
                              <img className="pic2" src={cSs}></img>
                              <img className="pic3" src={jsImg}></img>
                              <img className="pic4" src={rEact}></img>
                              <img className="pic5" src={jAva}></img>
                              <img className="pic6" src={sQl}></img>

                        </div>
                    </section>
                    
                  
                </div>
                <div className="Footer">
                       <p className="touch">Get in Touch</p>

                       <section id="contact">
                             <div className="info">
                                <h4>Contact me</h4>
                                 <img className="im" src={myImg} alt="myimage"></img>

                               <p>
                                 <i className="fa fa-envelope"></i>
                                     rajkumarkandukuri7@gmail.com
                               </p>

                                <p>
                                 <i className="fa fa-map-marker"></i>
                                         Hyderabad, Telangana
                                 </p>
                                 <div className="social">
                                     <a href="https://www.linkedin.com/in/kandukuri-rajkumar-811b14228" target="_blank" rel="noreferrer">
                                     <i className="fa fa-linkedin"></i></a>

                                     <a href="https://github.com/rajkumarsunny13">
                                     <i className="fa fa-github"></i>
                                     </a>
                                 </div>
                            </div>

                        </section>
                 </div>

            </div>
        </>
    );
};

export default Portfolio;
