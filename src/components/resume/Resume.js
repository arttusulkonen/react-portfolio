import React from 'react';const Resume = () => {    return (        <div>            <a name="experience"/>            <section className="resume">                <div className="container">                    <h2 className="title title_fz16 resume__title">Koulutus</h2>                    <div className="title title_fz36 resume__subtitle">Koulutus ja kurssit</div>                    <div className="divider"/>                    <div className="resume__wrapper">                        <div className="resume__column">                            <h3 className="title title_fz20 resume__column-title">Koulutus</h3>                            <ul>                                <li>                                    <div className="resume__item">                                        <div className="resume__item-head">                                            <div className="resume__item-icon">                                                <img src="icons/experience/university.svg" alt="university"/>                                            </div>                                            <h4 className="title title_fz14">Business College Helsinki</h4>                                            <div className="resume__item-location">                                                Tieto- ja viestintätekniikan perustutkinto | Helsinki (2020-2021)                                            </div>                                        </div>                                        <div className="resume__item-body">                                            HTML5 ja CSS3<br/>                                            JavaScript ja TypeScript<br/>                                            Angular<br/>                                            C#<br/>                                            Git ja DevOps<br/>                                            SQL Server<br/>                                            Azure                                        </div>                                    </div>                                    <div className="resume__item">                                        <div className="resume__item-head">                                            <div className="resume__item-icon">                                                <img src="icons/experience/university.svg" alt="university"/>                                            </div>                                            <h4 className="title title_fz14">Tampereen Aikuiskoulutuskeskus</h4>                                            <div className="resume__item-location">                                                Kuorma-autonkuljettaja | Tampere (2018-2019)                                            </div>                                        </div>                                    </div>                                    <div className="resume__item">                                        <div className="resume__item-head">                                            <div className="resume__item-icon">                                                <img src="icons/experience/university.svg" alt="university"/>                                            </div>                                            <h4 className="title title_fz14">Tampereen Aikuiskoulutuskeskus</h4>                                            <div className="resume__item-location">                                                Ravintolakokin ammattitutkinto | Tampere (2015-2017)                                            </div>                                        </div>                                    </div>                                    <div className="resume__item">                                        <div className="resume__item-head">                                            <div className="resume__item-icon">                                                <img src="icons/experience/university.svg" alt="university"/>                                            </div>                                            <h4 className="title title_fz14">Tampereen seudun ammattiopisto</h4>                                            <div className="resume__item-location">                                                Suomen kielen kurssit | Tampere (2012-2015)                                            </div>                                        </div>                                    </div>                                    <div className="resume__item">                                        <div className="resume__item-head">                                            <div className="resume__item-icon">                                                <img src="icons/experience/university.svg" alt="university"/>                                            </div>                                            <h4 className="title title_fz14">Peruskoulu</h4>                                            <div className="resume__item-location">                                                Tchalna, Karjala (2001-2010)                                            </div>                                        </div>                                    </div>                                </li>                            </ul>                        </div>                        <div className="resume__column">                            <h3 className="title title_fz20 resume__column-title">Kurssit</h3>                            <ul>                                <li>                                    <div className="resume__item">                                        <div className="resume__item-head">                                            <div className="resume__item-icon">                                                <img src="icons/experience/courses.svg" alt="university"/>                                            </div>                                            <h4 className="title title_fz14">Udemy</h4>                                            <div className="resume__item-location">                                                Front-end developer                                            </div>                                        </div>                                        <div className="resume__item-body">                                            Web-Developer 2020 (HTML5/CSS3/SASS/BOOTSTRAP/GULP)<br/>                                            JavaScript from zero to proficiency <br/>                                            React + Redux                                        </div>                                    </div>                                </li>                                <li>                                    <div className="resume__item">                                        <div className="resume__item-head">                                            <div className="resume__item-icon">                                                <img src="icons/experience/courses.svg" alt="university"/>                                            </div>                                            <h4 className="title title_fz14">Udemy</h4>                                            <div className="resume__item-location">                                                SQL Server                                            </div>                                        </div>                                        <div className="resume__item-body">                                            Oracle SQL Certification Course                                        </div>                                    </div>                                </li>                            </ul>                        </div>                    </div>                </div>            </section>        </div>    );};export default Resume;