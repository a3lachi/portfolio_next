import styles from './Home.module.css';
import LanBlock from '../components/LanBlock';
import Head from 'next/head';

// import { Link } from "react-router-dom";
// import Footer from '../components/Footer';
// import Datano from "../assets/projects/datano.png" ;
// import Bapz from "../assets/projects/bapzvscode.png";
// import Compiler from "../assets/projects/compiler.png";
// import Webmac from "../assets/projects/webmac.png"
// import Skills from '../components/Skills';

// import Calculator from "../assets/projects/calculator.png";

const Home = () => {

    const scrollToAbout = () => {
        console.log('scrolling')
        var elmntToView = document.getElementById("about");
        elmntToView.scrollIntoView({behavior:"smooth"});
    }

  return (
    <>
        <Head>
            <title>Aalachi Mohamed - Software Engineer</title>
            <meta name="description" content="Portfolio of Aalachi Mohamed, a Software Engineer specializing in backend development." />
            <meta name="keywords" content="Aalachi Mohamed, Software Engineer, backend, full stack, C, Python" />
            <meta name="author" content="Aalachi Mohamed" />
        </Head>
        <main className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.landing}>
                        <div>
                            <div style={{ fontFamily:'Verdana' , opacity:'0.5'}}>Hello! I am</div>
                            <div style={{ fontFamily:'Verdana'  , fontWeight:'bold' , fontSize:'2.5em'}}>AALACHI MOHAMED</div>
                            <div style={{ fontFamily:'Verdana' , fontSize:'3.5em' }}>a SOFTWARE ENGINEER</div>

                            <div style={{ display:'flex' , justifyContent:'center' , marginTop:'20px'}} >
                                <div className={styles.arrow}><img src="./arrow.svg" alt="arrow" width={20} style={{ marginRight:'15px' }} /></div>
                                <div style={{ fontFamily:'Courier New' , cursor:'pointer' }}  >Know more</div>
                            </div>

                            <div className={styles.gears}>
                                <img alt="gear" className={styles.gearOne} src={"./gear.svg"} width={90}/>
                                <img alt="gear" className={styles.gearTwo} src={"./gear.svg"} width={90}/>
                                <img alt="gear" className={styles.gearThree} src={"./gear.svg"} width={90}/>
                            </div>
                        </div>
                    </div>

                    
                    {/* <div id='about' className={styles.about} style={{ marginTop:'100vh' , width:'100vw' , zIndex:'3',  backgroundColor:'black' , color:'white' , minHeight:'100vh'}} >
                            <img src={"/a3la.jpg"} alt="myphoto" width={700} style={{borderRadius: '30px'}}  />
                            <div style={{ maxWidth:'760px' , paddingTop:'40px' , padding:'20px'}}>
                                <h2 style={{ fontFamily:'Verdana' , opacity:'0.5' , fontSize:'2rem'}}>Who am I</h2>
                                <p>I have always been passionate about building software, always strove to learn more, discover technologies
                                and understand the different paradigms behind each one of them. <span style={{fontWeight:'bold'}} className="bold">The goal of my journey
                                is to understand the secrets behind good software</span> and its success.</p><p>As a result of this life long learning process, I am able to <span className="bold">design</span> and write
                                <span style={{fontWeight:'bold'}} className="bold"> modular, expandable and clean software</span>. I always try to <span style={{fontWeight:'bold'}} className="bold">solve
                                problems in a language agnostic-manner</span>, in order to choose the most suited technology to the
                                problem at hand.</p><p><span style={{fontWeight:'bold'}} className="bold">I believe in this being the main purpose of a software engineer !</span></p>
                            </div> 
                            
                            <div style={{ maxWidth:'760px' , paddingTop:'40px' , padding:'20px'}}>
                                <h2 style={{ fontFamily:'Verdana' , opacity:'0.5' , fontSize:'2rem'}}>What I believe in</h2>
                                <Skills />
                                </div>
                            <div style={{ maxWidth:'760px' , paddingTop:'40px' , padding:'20px'}}>
                                <h2 style={{ fontFamily:'Verdana' , opacity:'0.5' , fontSize:'2rem'}}>Programming languages I use</h2>

                                <div className={styles.stack}>
                                    <div className={styles.lanzwrap } >
                                    <div className={styles.lanz}>
                                        <LanBlock ext=".sql" lan="PLSQL" />
                                        <LanBlock ext=".py" lan="Python" />
                                        <LanBlock ext=".sh" lan="Bash" />
                                        <LanBlock ext=".js" lan="Javascript" />
                                        <LanBlock ext=".c" lan="C" />
                                        <LanBlock ext=".cpp" lan="C++" />
                                        <LanBlock ext=".java" lan="Java" />
                                        <LanBlock ext=".ts" lan="Typescript" />
                                        <LanBlock ext=".go" lan="Go" />
                                        
                                        
                                    </div>
                                    </div>
                                    
                                        
                                </div>
                            </div>

                        <div>
                        </div>
                        
                    </div>
                    <div  id="projectss" style={{  width:'100vw' , backgroundColor:'white' , zIndex:'3' , color:'black' , minHeight:'100vh'}} >
                        <div style={{ width:'760px' , paddingTop:'40px' , padding:'20px' , margin:'0 auto'}} >
                            <h2 style={{ width:'90vw' , fontFamily:'Verdana' , opacity:'0.5' , fontSize:'2rem'}}>What I have worked on</h2>
                            <div className={styles.projectsContainer}>
                                <Link className={styles.projectWrapperOne} to="/projects/dorker" >
                                    <div id="1" className={styles.project} >
                                        <div className={styles.projectImage}>
                                            <img alt="dorker" src="./dorker.png"/>
                                        </div>
                                        <div id="projectText" className={styles.projectText}><h3>Google Crawler</h3><p></p><p>This project was requiring me to make a program that crawls Google and retrieve links using Selenium library in Python.</p><p></p></div>
                                    </div>
                                </Link>
                                <Link className={styles.projectWrapperTwo} to="/projects/datano" >
                                    <div className={styles.project}>
                                        <div className={styles.projectImage}>
                                            <img alt="datano" src={Datano} width={500} />
                                        </div>
                                        <div id="projectText" className={styles.projectText}><h3>Image Annotation</h3><p></p><p>An image annotation tool built with React using Canvas. </p><p></p></div>
                                    </div>
                                </Link>
                                <Link className={styles.projectWrapperThree}  to="/projects/bapz">
                                    <div className={styles.project}>
                                        <div className={styles.projectImage}>
                                            <img alt="bapz" src={Bapz} width={500}  />
                                        </div>
                                        <div id="projectText" className={styles.projectText}><h3>Full stack e-commerce</h3><p></p><p>I built this e-commerce website out of liking Bape clothing, I used Django in the backend and React in the frontend.</p><p></p></div>
                                    </div>
                                </Link>
                                <a className={styles.projectWrapperFour}  href="/projects/compiler"  >
                                    <div className={styles.project}>
                                        <div className={styles.projectImage}>
                                            <img alt="compiler" src={Compiler} width={500} />
                                        </div>
                                        <div id="projectText" className={styles.projectText}><h3>Compiler</h3><p></p><p>This project involves the development of a compiled programming language in C.</p><p></p></div>
                                    </div>
                                </a>
                                <a className={styles.projectWrapperFive}  href="/projects/webmac" >
                                    <div className={styles.project}>
                                        <div className={styles.projectImage}>
                                            <img alt="webmac" src={Webmac}  width={500}  />
                                        </div>
                                        <div id="projectText" className={styles.projectText}><h3>Webmac</h3><p></p><p>A macOs style portfolio.</p><p></p></div>
                                    </div>
                                </a>
                                <a className={styles.projectWrapperSix}  href="/projects/calculator" >
                                    <div className={styles.project}>
                                        <div className={styles.projectImage}>
                                            <img alt="calc" src={Calculator}  width={500}  />
                                        </div>
                                        <div id="projectText" className={styles.projectText}><h3>Calculator</h3><p></p><p>A Java Calculator app.</p><p></p></div>
                                    </div>
                                </a>
                                
                            </div>
                        </div>
                    </div>

                    <div id="posts" style={{  width:'100vw' , backgroundColor:'black' , zIndex:'3' , color:'white' , height:'auto' , paddingBottom:'50px'}} >
                        <div style={{maxWidth:'960px' , margin:'0 auto'}}>
                            <h2 style={{ width:'90vw' , fontFamily:'Verdana' , opacity:'0.5' , fontSize:'2rem' , padding:'20px' , paddingBottom:'0px'}}>Posts I have written</h2>
                            <div className={styles.writes}>
                                <ul>
                                    <li>
                                        <a className={styles.textHover}  href="/posts/rest">What is a REST api ?
                                            <span className={styles.date}>Jan 14, 2024</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className={styles.textHover} href="/posts/debate">Framework vs library vs package vs module : The debate
                                            <span className={styles.date}>Jan 3, 2024</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className={styles.textHover} href="/posts/front">Front-end development is not software engineering
                                            <span className={styles.date}>Dec 15, 2023</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className={styles.textHover} href="/posts/auth">Should you implement Authentication yourself?
                                            <span className={styles.date}>Dec 6, 2023</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className={styles.textHover}  href="/posts/vim">What's all the hype around Vim ?
                                            <span className={styles.date}>Nov 20, 2023</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div> */}

                    {/* <Footer /> */}

                </div>

            
        </main>
    </>
  );
}

export default Home;