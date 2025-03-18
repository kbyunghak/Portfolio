import React from "react";
import Andrew from '../images/Andrew.png';

const Resume = () => {
  return (
    <div className="main-wrapper">
      <div className="container px-3 px-lg-5">
      <article className="resume-wrapper mx-auto theme-bg-light p-5 mb-5 my-5 shadow-lg">
          
          <div className="resume-header d-flex justify-content-between align-items-center">
            <div>
              <h2 className="resume-name">Andrew Kim</h2>
              <div className="resume-title">Software Developer</div>
            </div>
            <div className="resume-contact text-end">
              <ul>
                <li><a href="tel:1-604-812-8504">1-604-812-8504</a></li>
                <li><a href="mailto:kbyunghak@gmail.com">kbyunghak@gmail.com</a></li>
                <li><a href="https://www.linkedin.com/in/kbyunghak/">linkedin.com/in/kbyunghak</a></li>
                <li>Burnaby, BC, Canada</li>
              </ul>
            </div>
          </div>
          <div>
            <section className="summary-section d-flex align-items-center">
                <img src= {Andrew} alt="Andrew Kim" className="summary-image me-4" />           
                <p>
                  Passionate and results-driven software developer with expertise in designing, developing, and optimizing scalable applications. 
                  Skilled in C#, ASP.NET Core, JavaScript, React.js, and SQL Server, with a strong foundation in full-stack development. 
                  Adept at problem-solving, collaborating with cross-functional teams, and continuously learning new technologies to enhance software performance. 
                  Focused on delivering high-quality solutions that drive business success and user satisfaction.
                </p>           
              </section>
          </div>          
          <div className="resume-body">
            <div className="resume-main">                                               
              <section className="work-section">
                <h3 className="resume-section-heading">Work Experience</h3>
                <div className="item">
                  <h4 className="item-title">Software Developer</h4>
                  <div className="item-meta">Ballard Power Systems | Jul 2021 - Sep 2024</div>
                  <ul className="resume-list">
                  <li>Analyzed and evaluated business requirements to define project scope and ensure alignment with new development initiatives.</li>
                    <li>Led full-stack development projects, overseeing database design, web application development, and IIS deployment.</li>
                    <li>Designed and optimized relational database schemas for MS SQL Server, implementing efficient data warehousing solutions.</li>
                    <li>Optimized complex SQL queries and reports, enhancing system performance and data accessibility.</li>
                  </ul>
                </div>
                <div className="item">
                  <h4 className="item-title">Software Developer</h4>
                  <div className="item-meta">Tero Consulting Ltd. | Jun 2016 - Jun 2021</div>
                  <ul className="resume-list">
                  <li>Enhanced Azzier CMMS software by integrating modern UI frameworks like Telerik UI and Google APIs.</li>
                    <li>Optimized and troubleshot software, improving scalability, reliability, and overall system performance.</li>
                    <li>Designed and developed a mobile Android application, expanding accessibility and usability for field users.</li>
                    <li>Streamlined software scalability through rigorous troubleshooting, testing, and performance optimization.</li>
                  </ul>
                </div>
                <div className="item">
                  <h4 className="item-title">Software Developer Co-Op</h4>
                  <div className="item-meta">Analysisworks Inc., Vancouver, BC, Canada | Jan 2015 - Aug 2015</div>
                  <ul className="resume-list">
                    <li>Contributed to developing and maintaining web and desktop applications in an agile environment.</li>
                    <li>Designed an IT inventory app to manage licenses and assets, improving operational tracking.</li>
                    <li>Built a scheduling app to streamline team calendar management and vacation tracking.</li>
                  </ul>
                </div>
              </section>
              
              <section className="project-section">
                <h3 className="resume-section-heading">Projects</h3>
                <div className="item">
                  <h4 className="item-title">Ballard Bus Data</h4>
                  <div className="item-meta">Web Development Project, Ballard Power Systems | 2021 - 2024</div>
                  <ul className="resume-list">
                    <li>Designed and developed a real-time data ingress system, transforming large CSV files into SQL Server and Azure Cloud.</li>
                    <li>Revamped a 12-year-old VB data processing system using C# and ASP.NET, improving efficiency by 30%.</li>
                    <li>Built a real-time monitoring system with automated anomaly detection and reporting.</li>
                    <li>Integrated Azure cloud storage, enabling efficient and scalable data management.</li>
                    <li>Implemented real-time visual analytics for system performance insights.</li>
                  </ul>
                </div>
                <div className="item">
                  <h4 className="item-title">Issue Tracker</h4>
                  <div className="item-meta">Web Development Project, Ballard Power Systems | 2023</div>
                  <ul className="resume-list">
                    <li>Migrated a Microsoft Access database to a C# .NET MVC web application, improving scalability.</li>
                    <li>Developed a file-sharing feature supporting images, videos, PDFs, and Word documents.</li>
                    <li>Implemented an intuitive UI for task tracking and workflow optimization.</li>
                    <li>Created an automated email notification system to enhance deadline management.</li>
                  </ul>
                </div>
                <div className="item">
                  <h4 className="item-title">Azzier Mobile</h4>
                  <div className="item-meta">Android Mobile Project, Tero Consulting Ltd. | 2019 - 2021</div>
                  <ul className="resume-list">
                    <li>Developed an Android mobile application to integrate with Azzier CMMS.</li>
                    <li>Implemented offline functionality for work order management.</li>
                    <li>Enhanced security with user authentication and company code validation.</li>
                  </ul>
                </div>
              </section>
            </div>
            
            <aside className="resume-aside">
              <section className="skills-section">
                <h3 className="resume-section-heading">Skills</h3>
                <ul className="resume-list">
                  {/* <ul>Front-end: React.js, Angular, JavaScript, HTML, CSS</ul>
                  <ul>Back-end: ASP.NET Core, C#, Node.js, Python</ul>
                  <ul>Database: SQL Server, MySQL, MongoDB</ul>
                  <ul>DevOps: Git, Jenkins, Azure DevOps</ul>
                  <ul>Soft Skills: Problem-solving, communication, teamwork</ul> */}
                  <ul>React.js, Angular, JavaScript, </ul>
                  <ul>HTML, CSS, ASP.NET Core, C#, </ul>
                  <ul>Node.js, Python, SQL Server,</ul>
                  <ul>MySQL, MongoDB, Git, Jenkins, </ul>
                  <ul>Azure DevOps, Problem-solving, Communication, Teamwork</ul>
                </ul>
              </section>
              <section className="education-section">
                <h3 className="resume-section-heading">Education</h3>
                <div className="resume-degree">Diploma in Computer Systems Technology</div>
                <div className="resume-degree-org">British Columbia Institute of Technology | 2014 - 2016</div>
              </section>
              <section className="interests-section">
                <h3 className="resume-section-heading">Interests</h3>
                <ul className="resume-list">
                  <ul>Running</ul>
                  <ul>Board games and puzzles</ul>
                  <ul>Learning new technologies</ul>
                </ul>
              </section>
            </aside>
          </div>
          
          <div className="resume-footer">
            <small>Designed for Andrew Kim</small>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Resume;
