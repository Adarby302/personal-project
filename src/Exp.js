import React from 'react';
import Title from './components/title';
import ExperienceItem from './components/exp_item';

const Exp = () => {
  return (
    <div className="exp-container">
      <Title> Experience & Education </Title>
      <ExperienceItem
        title="Eductation"
        company="University of Delaware"
        date="Graduated December 2023"
      >
        <p><strong>Major:</strong> Bachelors in Computer Science. | <em>3.52/4.0</em></p>
        <p><strong>Minor:</strong> Cybersecurity.</p>
        <p><strong>Relevant Coursework:</strong> Data Structures, Algorithm Analysis & Design, Operating Systems, Computer Networks, Database 
                  Systems, System Hardening and Protection, Pen Test & Reverse Engineering, Cloud Computing & Security, and Systems Programming.</p>
        <p><strong>Activities:</strong>NSBE(National Society For Black Engineers), ACM(Association for Computing Machinery). </p>
      </ExperienceItem>
      <ExperienceItem
        title="Support Analyst & Compliance and Risk Co-Op"
        company="Berkley Technology Services"
        date="September 2023 – Present"
      >
        <li>Used Service Now, SSCM, Active Directory and Azure to administer & provide support for internal companies.</li>
        <li>Provided On-Call support for 30+ different Berkley Companies.</li>
        <li>Esclated and routed P3 issues to their respective teams.</li>
        <li>Utlized technoloiges such as Azure to query lock-outs and manage on prem devices.</li>
        <li>Created custom scripts to help remidiate some work for tedious tasks.</li>
        <li>Followed SOX Control Standards to audit various internal companies.</li>
        <li>Updated and created testing methodologies towards various existing SOX Control Standards.</li>
        <li>Created various programs/scripts to automate testing for some control procedures.</li>
        
      </ExperienceItem>
      <ExperienceItem
        title="Technology Intern (SWE)"
        company="M&T Bank"
        date="May 2023 – August 2023"
      >
        <li> Full stack development with Sails(Appian) and .NET to create a smooth and polished digital experience for Wilmington
             Trust and their internal Agent Transferring Service.</li>
        <li>Exposure to UI/UX design principles, increased clarity and workflow for highly regulated environments.</li>
        <li>Exposure to code quality tools, specifically "sonar-cube". Helped implenet the solution on a DEV enviornment.</li>
        <li>Helped piece together some of the middleware that was used to reference old data from the old enviornment to new enviornment.</li>
      </ExperienceItem>
      <ExperienceItem
        title="Teaching Assistant"
        company="University of Delaware"
        date="August 2022 – December 2023"
      >
        <li>TA'd for CISC 181(Introduction to Comptuer Science II) and CISC 220 (Data Structures).</li>
        <li>181 Topics included: Intro to Object Oriented Programming, Polymoprhism, and Abstraction Concepts in Java.</li>
        <li>220 Topics included: Recursion, Stacks/Queues, Graphs, Maps, and beginner sorting algorithms.</li>
      </ExperienceItem>
      <ExperienceItem
        title="Computer Sciences Intern"
        company="FMC"
        date="May 2022 – August 2022"
      >
        <li> Used .NET and Oracle to Automate critical tasks on various liquid handlers for screening. Automation
             increased productivity by nearly 2x, eliminating tedious manual work for storing data.</li>
        <li> Made notable improvements to existing tasks across a variety of machines reassuring quality of life.</li>
        <li> Contributed to a custom ML solution and helped do some manual tunning for the model(True and False Positives).</li>
      </ExperienceItem>
       <ExperienceItem
        title="Computing Consultant"
        company="University of Delaware"
        date="August 2021 – May 2023"
      >
        <li>Resolved and documented: hardware, software, and network issues on-site and remotely throughout the University.</li>
        <li>Assist and maintained an Active Directory for all the University’s computers on and off campus. For Mac OS, this was done with JAMF.</li>
        <li>Imaged Operating Systems for Workers Manually(USB and Ethernet).</li>
        <li>Made small UI changes to a custom imaging tool(VB), that helped imaged computers.</li>
      </ExperienceItem>
    </div>
  );
};
 
export default Exp;
