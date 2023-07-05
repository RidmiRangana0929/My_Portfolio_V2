import React, { useEffect, useRef, useState } from 'react'
import DetailBox from '../../compornent/DetailBox/DetailBox';
import './ResumeStyle.css'

export const ResumePage = () => {
    const loadMoreDetaillsAboutSkill1 = () => {
        window.location.href = 'https://en.wikipedia.org/wiki/Java_(programming_language)'
    }
    const loadMoreDetaillsAboutSkill2 = () => {
        window.location.href = 'https://en.wikipedia.org/wiki/HTML'
    }
    const loadMoreDetaillsAboutSkill3 = () => {
        window.location.href = 'https://en.wikipedia.org/wiki/MySQL'
    }
    const loadMoreDetaillsAboutSkill4 = () => {
        window.location.href = 'https://en.wikipedia.org/wiki/CSS'
    }
    const loadMoreDetaillsAboutSkill5 = () => {
        window.location.href = 'https://en.wikipedia.org/wiki/Microsoft_SQL_Server'
    }
    const loadMoreDetaillsAboutSkill6 = () => {
        window.location.href = 'https://en.wikipedia.org/wiki/JavaScript'
    }
    const loadMoreDetaillsAboutSkill7 = () => {
        window.location.href = 'https://en.wikipedia.org/wiki/C_Sharp_(programming_language)'
    }
    const loadMoreDetaillsAboutSkill8 = () => {
        window.location.href = 'https://en.wikipedia.org/wiki/Python_(programming_language)'
    }
    const loadMoreDetaillsAboutSkill9 = () => {
        window.location.href = 'https://en.wikipedia.org/wiki/React_(software)'
    }
    const loadMoreDetaillsAboutSkill10 = () => {
        window.location.href = 'https://en.wikipedia.org/wiki/Hibernate_(framework)'
    }
    const loadMoreDetaillsAboutSkill11 = () => {
        window.location.href = 'https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)'
    }
    const loadMoreDetaillsAboutSkill12 = () => {
        window.location.href = 'https://react-bootstrap.netlify.app'
    }
    const loadMoreDetaillsAboutSkill13 = () => {
        window.location.href = 'https://mui.com/material-ui/getting-started/overview/'
    }
    const loadMoreDetaillsAboutSkill14 = () => {
        window.location.href = 'https://en.wikipedia.org/wiki/Figma_(software)'
    }
    const loadMoreDetaillsAboutSkill15 = () => {
        window.location.href = 'https://en.wikipedia.org/wiki/Visual_Studio_Code'
    }
    const loadMoreDetaillsAboutSkill16 = () => {
        window.location.href = 'https://en.wikipedia.org/wiki/Android_Studio'
    }
    const loadMoreDetaillsAboutSkill17 = () => {
        window.location.href = 'https://en.wikipedia.org/wiki/Git'
    }
    const loadMoreDetaillsAboutSkill18 = () => {
        window.location.href = 'https://en.wikipedia.org/wiki/IntelliJ_IDEA'
    }
    const loadMoreDetaillsAboutSkill19 = () => {
        window.location.href = 'https://fr.wikipedia.org/wiki/Scene_Builder'
    }
    const loadMoreDetaillsAboutSkill20 = () => {
        window.location.href = 'https://simple.wikipedia.org/wiki/Adobe_Photoshop'
    }
    const loadMoreDetaillsAboutSkill21 = () => {
        window.location.href = 'https://en.wikipedia.org/wiki/Model–view–controller'
    }
    const loadMoreDetaillsAboutSkill22 = () => {
        window.location.href = 'https://en.wikipedia.org/wiki/Multitier_architecture'
    }
    return (
        <div id='resume' className='resume'>
            <div className='headerContainer'>
                <h1 className='header' id='resumeTitle'>SAMMARY</h1>
                <h2 data-aos="zoom-in" data-aos-duration="2000" className='subHeader'>Resume</h2>
                <div className='underline'></div>
            </div>

            <div id='mainLine'></div>

            <div className='timeContainer' id='timeContainer1'>
                <div className='time'><h3 className='timePeriod'>2021 - 2022</h3></div>
                <div className='time'><h3 className='timePeriod'>2011 - 2016</h3></div>
            </div>
            <div className='timeContainer' id='timeContainer2'>
                <div className='time'><h3 className='timePeriod'>2021 - 2023</h3></div>
                <div className='time'><h3 className='timePeriod'>2016 - 2020</h3></div>
            </div>

            <div className='circleContainer' id='circleContainer1'>
                <div className='circle'></div>
                <div className='circle'></div>
            </div>
            <div className='circleContainer' id='circleContainer2'>
                <div className='circle'></div>
                <div className='circle'></div>
            </div>

            <div className='boxContainer' id='boxContainer1'>
                <div data-aos="fade-right" data-aos-duration="2000" className='box'>
                    <DetailBox id={"ijse"}
                        qualification={"Bsc (Hons) in Computer Science"}
                        institute={"Institute of Software Engineering"}
                        location={"Panadura"}
                    />
                </div>
                <div data-aos="fade-right" data-aos-duration="2000" className='box'>
                    <DetailBox id={"princess"}
                        qualification={"Advance Level"}
                        institute={"Princess of Wales' College"}
                        location={"Moratuwa"}
                    />
                </div>
            </div>
            <div className='boxContainer' id='boxContainer2'>
                <div data-aos="fade-left" data-aos-duration="2000" className='box'>
                    <DetailBox id={"esoft"}
                        qualification={"Diploma in Information Technology"}
                        institute={"ESOFT Metro Campus"}
                        location={"Galle"}
                    />
                </div>
                <div data-aos="fade-left" data-aos-duration="2000" className='box'>
                    <DetailBox id={"siridhamma"}
                        qualification={"Ordinary Level"}
                        institute={"Siridhamma College"}
                        location={"Galle"}
                    />
                </div>
            </div>

            <div data-aos="fade-up" data-aos-duration="2000" className='skillContainer' id='skillContainer1'>
                <h3 className='skillType'>Languages and Databases</h3>
                <div className='logoContainer' id='logoContainer1'>
                    <div onClick={loadMoreDetaillsAboutSkill1} className='subLogoContainer'><div className='skillLogo' id='skillLogo1'></div></div>
                    <div onClick={loadMoreDetaillsAboutSkill2} className='subLogoContainer'><div className='skillLogo' id='skillLogo2'></div></div>
                    <div onClick={loadMoreDetaillsAboutSkill3} className='subLogoContainer'><div className='skillLogo' id='skillLogo3'></div></div>
                    <div onClick={loadMoreDetaillsAboutSkill4} className='subLogoContainer'><div className='skillLogo' id='skillLogo4'></div></div>
                    <div onClick={loadMoreDetaillsAboutSkill5} className='subLogoContainer'><div className='skillLogo' id='skillLogo5'></div></div>
                    <div onClick={loadMoreDetaillsAboutSkill6} className='subLogoContainer'><div className='skillLogo' id='skillLogo6'></div></div>
                    <div onClick={loadMoreDetaillsAboutSkill7} className='subLogoContainer'><div className='skillLogo' id='skillLogo7'></div></div>
                    <div onClick={loadMoreDetaillsAboutSkill8} className='subLogoContainer'><div className='skillLogo' id='skillLogo8'></div></div>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="2000" className='skillContainer' id='skillContainer2'>
                <h3 className='skillType'>Frameworks and Libraries</h3>
                <div className='logoContainer' id='logoContainer2'>
                    <div onClick={loadMoreDetaillsAboutSkill9} className='subLogoContainer'><div className='skillLogo' id='skillLogo9'></div></div>
                    <div onClick={loadMoreDetaillsAboutSkill10} className='subLogoContainer'><div className='skillLogo' id='skillLogo10'></div></div>
                    <div onClick={loadMoreDetaillsAboutSkill11} className='subLogoContainer'><div className='skillLogo' id='skillLogo11'></div></div>
                    <div onClick={loadMoreDetaillsAboutSkill12} className='subLogoContainer'><div className='skillLogo' id='skillLogo12'></div></div>
                    <div onClick={loadMoreDetaillsAboutSkill13} className='subLogoContainer'><div className='skillLogo' id='skillLogo13'></div></div>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="2000" className='skillContainer' id='skillContainer3'>
                <h3 className='skillType'>Tools</h3>
                <div className='logoContainer' id='logoContainer3'>
                    <div onClick={loadMoreDetaillsAboutSkill14} className='subLogoContainer'><div className='skillLogo' id='skillLogo14'></div></div>
                    <div onClick={loadMoreDetaillsAboutSkill15} className='subLogoContainer'><div className='skillLogo' id='skillLogo15'></div></div>
                    <div onClick={loadMoreDetaillsAboutSkill16} className='subLogoContainer'><div className='skillLogo' id='skillLogo16'></div></div>
                    <div onClick={loadMoreDetaillsAboutSkill17} className='subLogoContainer'><div className='skillLogo' id='skillLogo17'></div></div>
                    <div onClick={loadMoreDetaillsAboutSkill18} className='subLogoContainer'><div className='skillLogo' id='skillLogo18'></div></div>
                    <div onClick={loadMoreDetaillsAboutSkill19} className='subLogoContainer'><div className='skillLogo' id='skillLogo19'></div></div>
                    <div onClick={loadMoreDetaillsAboutSkill20} className='subLogoContainer'><div className='skillLogo' id='skillLogo20'></div></div>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="2000" className='skillContainer' id='skillContainer4'>
                <h3 className='skillType'>Architectures</h3>
                <div id='skillType'>
                    <h3 onClick={loadMoreDetaillsAboutSkill21} className='architecture' id='architecture1'>MVC Architectures</h3>
                    <h3 className='architecture' id='architecture1'>,</h3>
                    <h3 onClick={loadMoreDetaillsAboutSkill22} className='architecture' id='architecture2'>Layered Architectures</h3>
                </div>
            </div>

        </div>
    )
}
