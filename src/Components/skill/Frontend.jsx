import React from 'react'

function Frontend() {
  return (
    <div className="skills-content">
        <h3 className="skills-tittle">Frontend Developer</h3>

        <div className="skills-box">
            <div className="skills-group">
                <div className="skills-data HTML-skill">
                <i class="uil uil-cloud-question"></i>
                    <div >
                        <h3 className="skill-name">HTML</h3>
                        <div className="skill__bar">
                            <span className="skill__perc html">
                                <span className="tooltip">80%</span>
                            </span>
                        </div>

                    </div>
                </div>

                <div className="skills-data">
                <i class="uil uil-cloud-question"></i>
                    <div >
                        <h3 className="skill-name">CSS</h3>
                        <div className="skill__bar">
                            <span className="skill__perc css">
                                <span className="tooltip">65%</span>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="skills-data">
                <i class="uil uil-cloud-question"></i>
                    <div >
                        <h3 className="skill-name">JavaScript</h3>
                        <div className="skill__bar">
                            <span className="skill__perc javascript">
                                <span className="tooltip">60%</span>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="skills-data">
                <i class="uil uil-cloud-question"></i>
                    <div >
                        <h3 className="skill-name">Bootstrap</h3>
                        <div className="skill__bar">
                            <span className="skill__perc bootstrap">
                                <span className="tooltip">70%</span>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="skills-data">
                <i class="uil uil-cloud-question"></i>
                    <div >
                        <h3 className="skill-name">React</h3>
                        <div className="skill__bar">
                            <span className="skill__perc react">
                                <span className="tooltip">75%</span>
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Frontend