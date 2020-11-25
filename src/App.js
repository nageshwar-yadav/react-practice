import './App.css';
import React from 'react';
import Avatar from 'react-avatar';
import nageshwar1 from './nageshwar1.jpg';
import { FaGithub,FaHackerrank,FaLinkedin } from "react-icons/fa";
function App() {
  return (
  <div className="App">
    <header className="App-header">
      <h1>Nageshwar yadav</h1>
      <p>nageshwar482000yadav@gmail.com</p>
      <div className="dp">
      <span>
        <a href="https://github.com/nageshwar-yadav" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://hackerrank.com/techy482000" target="_blank" rel="noreferrer"><FaHackerrank /></a>
        <a href="https://www.linkedin.com/in/nageshwar-yadav-4a6912191?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BLf0KlTgiQa6%2BaF6dYyNctg%3D%3D" target="_blank" rel="noreferrer"><FaLinkedin/></a>
      </span>
      <Avatar round img src={nageshwar1} alt="img not found"/>
      </div>
    </header>
	  <p>
    </p>
	  <p>
		  <h2><u>SKILLS</u></h2>
		  <ul>
			  <li>intermediate in c/c++.</li>
			  <li>4-star ranking in c on hackerrank</li>
			  <li>basic knowledge of HTML/CSS.</li>
        <li>basic knowledge of data-structures.</li>
        <li>good in programming and logic-building</li>
		  </ul>
		</p>
	  <hr/>
	  <p>
		  <h2><u>ACHIEVEMENTS AND CERTIFICATIONS</u></h2>
		  <ul>
			  <li>participated in tech talk(on IoT) held at JMIETI,RADAUR.</li>
			  <li>got university rankings in 2nd, 3rd and 4th sem</li>
			  <li>got first position in Product-Show activity.</li>
		  </ul>
	  </p>
	  <hr/>
    <p>
		  <h2><u>SUBJECTS OF INTEREST</u></h2>
		  <ul>
			  <li>Web Development</li>
			  <li>Data Structure</li>
			  <li>c/c++</li>
        <li>Software Engineering</li>
        <li>Artificial Intelligence</li>
		  </ul>
	  </p>
	  <hr/>
    <p>
		  <h2><u>ACADEMICS</u></h2>
      <table id="center">
        <tr>
          <th>class</th>
          <th>University/Board</th>
          <th>Institution/School</th>
          <th>Marks</th>
        </tr>
        <tr>
          <td>BCA</td>
          <td>Kurukshetra University</td>
          <td>TIMT</td>
          <td>81.6%</td>
        </tr>
        <tr>
          <td>12th</td>
          <td>CBSE</td>
          <td>New Happy Public school</td>
          <td>94.2%</td>
        </tr>
        <tr>
          <td>10th</td>
          <td>CBSE</td>
          <td>New Happy Public school</td>
          <td>10 C.G.P.A.</td>
        </tr>
      </table>
		  
	  </p>
  </div>
  );
}

export default App;
