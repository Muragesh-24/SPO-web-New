import "./App.css";
import Insight from "./Components/Insight";
import Navbar from "./Components/Navbar";


function App() {

  if(window.location.pathname==="/insights")
    return(
  <div className="maindash">
    <Insight/>

  </div>
    )
  return (
    <div className="maindash">
      <Navbar />
      <div className="sdiv">
        <div className="wh">
          <h1>For students</h1>
          <p>A collection of resources for students at IIT Kanpur.</p>
          <div className="box">
            <div className="inbox"><a href="#procedures-link"> Procedures</a></div>
           <div className="inbox"><a href="/insights" >INSIGHTS</a></div>
<div className="inbox"><a href="#resources-link">Resources</a></div>
<div className="inbox"><a href="#roadmaps-links" >PREPARATION ROADMAPS</a></div>
<div className="inbox"><a href="#faqs-link">FAQS</a></div>

          </div>
        </div>
      </div>
      <div className="proce" id="procedures-link">
        <h1>Procedure</h1>
        <div className="egrid">
          <div className="g1">
            <h3>1</h3>
            <p>
              You must prepare a master resume and submit it by the specified
              deadline.
            </p>
          </div>
          <div className="g1">
            <h3>2</h3>
            <p>
              Before the deadline, the Students' Placement Office must receive
              the proofs justifying each point in your resume as well as PVFs
              (Project Verification Forms) from the project or internship
              mentor.
            </p>
          </div>
          <div className="g1">
            <h3>3</h3>
            <p>
              You must register on the Recruitment Automation System (RAS)
              within the specified timeframe as notified by SPO.
            </p>
          </div>
          <div className="g1">
            <h3>4</h3>
            <p>
              After you've registered, you are supposed to upload all one/two
              page resumes on the portal.
            </p>
          </div>
          <div className="g1">
            <h3>5</h3>
            <p>
              The Students' Placement Office appoints a point of contact (PoC)
              for your resume verification.
            </p>
          </div>
          <div className="g1">
            <h3>6</h3>
            <p>
              You would be assigned a time window during which the allotted POC
              would verify your resume.
            </p>
          </div>
          <div className="g1">
            <h3>7</h3>
            <p>
              Once your resume has been verified, you may begin applying to
              companies on the RAS in which you are eligible.
            </p>
          </div>
          <div className="g1">
            <h3>8</h3>
            <p>
              Following your application, you must attend all of the company's
              hiring events (PPTs / Tests / GDs).
            </p>
          </div>
          <div className="g1">
            <h3>9</h3>
            <p>
              If you get an offer from a company, the SPO would notify you and
              your account would be frozen.
            </p>
          </div>
        </div>
      </div>
      <div className="res" id="resources-link">
        <h1>Resources</h1>
        <div className="eegrid">
          <div className="g11">
            <a href="./deferred_placement_policy.pdf">Deferred Placement Policy</a>
          </div>
          <div className="g11">
            <a href="">Placement Policy</a>
          </div>
          <div className="g11">
            <a href="">Internship Policy</a>
          </div>
          <div className="g11">
            <a href="">Leave Application</a>
          </div>
          <div className="g11">
            <a href="">Project Verification Form</a>
          </div>
          <div className="g11">
            <a href="">PPT Absence Form</a>
          </div>
          <div className="g11">
            <a href="">Corporate Internship Waiver Form</a>
          </div>
          <div className="g11">
            <a href="">List of Companies</a>
          </div>
          <div className="g11">
            <a href="">Previous Year Internship Proforma</a>
          </div>
          <div className="g11">
            <a href="">Previous Year Placement Proforma</a>
          </div>
        </div>
      </div>
      <div className="res" id="roadmaps-links">
        <h1>Preparation Roadmap</h1>
        <div className="eegrid">
       <div className="g11"><a href="./ME Core Roadmap.pdf">Mechanical Core</a></div>
  <div className="g11"><a href="">Electrical Core</a></div>
  <div className="g11"><a href="">Analyst</a></div>
  <div className="g11"><a href="">Product Management</a></div>
  <div className="g11"><a href="">SDE</a></div>
  <div className="g11"><a href="">Consulting</a></div>
  <div className="g11"><a href="">MSE Core</a></div>
  <div className="g11"><a href="">CHE Core</a></div>
  <div className="g11"><a href="">AE Core</a></div>
        </div>
      </div>
      <div className="faq" id="faqs-link">
    <h1>Resume FAQs</h1>
    <div className="que">
    <div className="one">
  <h3 className="q">What are the restrictions on resume format?</h3>
  <h3 className="ans">There are no restrictions on the resume format barring a few mentioned below. The top heading of your resume should be your Name, Department, year of study, and contact information. A table of educational qualifications should follow it including 10th, 12th marks, and CPI(UG and PG both if applicable) in reverse chronological order.</h3>
</div>

<div className="one">
  <h3 className="q">What should be the name of the resume file (one page)?</h3>
  <h3 className="ans">The resume file should be named as RollNumber_Name_Program_Department_ResumeNumber. For example: 190351_Gyanendra_BT_ME_1</h3>
</div>

<div className="one">
  <h3 className="q">How to mention JEE Mains/JEE Adv/any other examination ranks or other scholastic achievements in my resume?</h3>
  <h3 className="ans">Mention ranks as AIR numbers (not percentiles), e.g., AIR 1234 in JEE Mains 2019. To mention department rank, you need email verification from HoD. Always mention the year of the achievement.</h3>
</div>

<div className="one">
  <h3 className="q">I don't have any proof for some points on my resume, but I can provide them after campus reopens. What should I do?</h3>
  <h3 className="ans">Only allowed for Scholastic and Extracurricular Achievements. Fill an undertaking form (bit.ly/spoundertaking) and email it with the zip file of proofs to spoproofs2022@gmail.com. Mark such points with # and add the footnote 'not verified by SPO' only on the master resume, not on the one-page resume.</h3>
</div>

<div className="one">
  <h3 className="q">When is a Project Verification Form (PVF) required?</h3>
  <h3 className="ans">A PVF is needed for any project under an IITK professor or external organization (not required for institute clubs or course projects). Ask your mentor to send the signed PVF to spoproofs2022@gmail.com and mark you in CC. Resume description must match the PVF. Form link: spo.iitk.ac.in/docs/2021-22/PVF.doc</h3>
</div>

<div className="one">
  <h3 className="q">How will my PoR/projects under the institute clubs be verified?</h3>
  <h3 className="ans">They will be ratified using lists provided by PSG, Senate Chairperson, MnC Gensec, or SnT Gensec.</h3>
</div>

<div className="one">
  <h3 className="q">I have some Self projects, how will they be verified?</h3>
  <h3 className="ans">Submit code, GitHub repo, or any valid proof. Clearly mention that it's a self-project on your resume.</h3>
</div>

<div className="one">
  <h3 className="q">How to verify online courses/online projects?</h3>
  <h3 className="ans">Submit the PDF certificate from the course provider. Mention in the resume that it was an "online course/project".</h3>
</div>

<div className="one">
  <h3 className="q">Is proof required for Extracurricular points?</h3>
  <h3 className="ans">Proof is not required unless a position is claimed, e.g., "2nd place in school debate competition".</h3>
</div>

<div className="one">
  <h3 className="q">My internship/project is ongoing and will not be finished before resume submission. What should I do?</h3>
  <h3 className="ans">Submit the PVF with whatever work is completed. Mention clearly in your resume that the internship/project is ongoing.</h3>
</div>

<div className="one">
  <h3 className="q">Can I update my resume after the deadline?</h3>
  <h3 className="ans">No, once verified, resumes cannot be updated. You may update it in Phase-2 of internship/placement season.</h3>
</div>

<div className="one">
  <h3 className="q">Will the Summer CPI be included?</h3>
  <h3 className="ans">The CPI visible on Pingala during resume verification will be considered final.</h3>
</div>

    </div>
    <div className="one">
      <h3><b>NOTE:</b> Whenever you send a mail containing proofs/PVFs or anything related to resume submission, kindly ensure that the subject contains your roll number. For detailed guidelines and recommendations on resume making, all the students are advised to visit this link.</h3>
    </div>
    
      </div>
      <div className="foot">
  <div className="grid">
 <div className="g">
  <h3>IITK Links</h3>
  <p><a href="https://www.iitk.ac.in" target="_blank" rel="noopener noreferrer">IITK Homepage</a></p>
  <p><a href="https://www.iitk.ac.in/doaa" target="_blank" rel="noopener noreferrer">DoAA</a></p>
  <p><a href="https://www.iitk.ac.in/dosa" target="_blank" rel="noopener noreferrer">DoSA</a></p>
  <p><a href="https://students.iitk.ac.in" target="_blank" rel="noopener noreferrer">Students' Gymkhana</a></p>
</div>

<div className="g">
  <h3>For Companies</h3>
  <p><a href="/company-registration" target="_blank" rel="noopener noreferrer">Steps - Company registration</a></p>
  <p><a href="/recruitment-policy" target="_blank" rel="noopener noreferrer">Recruitment Procedure and Policy</a></p>
  <p><a href="/brochures" target="_blank" rel="noopener noreferrer">Brochures</a></p>
  <p><a href="/departmental-brochures" target="_blank" rel="noopener noreferrer">Departmental Brochures</a></p>
  <p><a href="/company-faqs" target="_blank" rel="noopener noreferrer">FAQs</a></p>
</div>

<div className="g " id="target-section">
  <h3>For Students</h3>
  <p><a href="/student-registration" target="_blank" rel="noopener noreferrer">Steps - Students Registration</a></p>
  <p><a href="/student-policy" target="_blank" rel="noopener noreferrer">Policy</a></p>
  <p><a href="/preparation-portal" target="_blank" rel="noopener noreferrer">Preparation Portal</a></p>
  <p><a href="/insights" target="_blank" rel="noopener noreferrer">Insights</a></p>
  <p><a href="/student-faqs" target="_blank" rel="noopener noreferrer">FAQs</a></p>
</div>

<div className="g">
  <h3>Contact</h3>
  <p>Students' Placement Office</p>
  <p>109, Outreach Building</p>
  <p>IIT Kanpur, Kanpur-208016</p>
  <p>Phone: +91 512 259 4433/34</p>
  <p>Email: <a href="mailto:spo@iitk.ac.in">spo@iitk.ac.in</a></p>
</div>

  </div>
  <div className="li">
  {/* Social Media Icons */}
  <div className="social-icons">
    <a href="mailto:spo@iitk.ac.in" target="_blank" rel="noopener noreferrer">
      <img src="https://img.icons8.com/ios-filled/50/007bff/email.png " alt="Email" />
    </a>
    <a href="https://www.facebook.com/iitk.spo" target="_blank" rel="noopener noreferrer">
    <img src="https://img.icons8.com/ios-filled/50/007bff/facebook.png" alt="Facebook" />

    </a>
    <a href="https://www.linkedin.com/school/iitk/" target="_blank" rel="noopener noreferrer">
      <img src="https://img.icons8.com/ios-filled/50/007bff/linkedin.png" alt="LinkedIn" />
    </a>
  </div>

  {/* Copyright Text */}
  <div className="copyright">
    © Copyright 2025 SPO, IIT Kanpur
  </div>
</div>

</div>
    </div>
  );
}

export default App;
