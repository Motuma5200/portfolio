import React from 'react'

function Backend() {
  return (
    <div className="skills-content">
    <h3 className="skills-tittle">Backend Developer</h3>

    <div className="skills-box">
        <div className="skills-group">
            <div className="skills-data">
            <i class="uil uil-cloud-question"></i>
                <div >
                    <h3 className="skill-name">PHP</h3>
                    <div className="skill__bar">
                            <span className="skill__perc php">
                                <span className="tooltip">40%</span>
                            </span>
                        </div>
                </div>
            </div>

            <div className="skills-data">
            <i class="uil uil-cloud-question"></i>
                <div >
                    <h3 className="skill-name">Node js</h3>
                    <div className="skill__bar">
                            <span className="skill__perc nodejs">
                                <span className="tooltip">50%</span>
                            </span>
                        </div>
                </div>
            </div>

            <div className="skills-data">
            <i class="uil uil-cloud-question"></i>
                <div >
                    <h3 className="skill-name">Python</h3>
                    <div className="skill__bar">
                            <span className="skill__perc python">
                                <span className="tooltip">55%</span>
                            </span>
                        </div>
                </div>
            </div>

            <div className="skills-data">
            <i class="uil uil-cloud-question"></i>
                <div >
                    <h3 className="skill-name">SQL Server</h3>
                    <div className="skill__bar">
                            <span className="skill__perc splserver">
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

export default Backend