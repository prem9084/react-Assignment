import logo from "../src/asserts/logo.png";
import photo1 from "./asserts/1.png";
import photo2 from "./asserts/2.png";
import photo3 from "./asserts/3.png";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import LanguageIcon from "@mui/icons-material/Language";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className="trophy">
        <div id="img1">
          <img src={photo1} alt="trophy" />
        </div>
        <div id="summary">
          <h4 id="title">
            C.R.I PUMPS WINS THE BATIONAL CONSERVATION AWRD 2018 FOR THE 4TH
            TIME
          </h4>
          <ul id="paragraf">
            <li>
              C.R.I's energy efficient products are well recognized by various
              Goverment instutions,as trustworthy products for
              <br /> various products the globe to save energy
            </li>
            <li>
              C.R.I is the highest constructor inthe country for the project of
              EESL. (Energy Efficiency Services Limited) to replace the <br />
              old ineffient pumps with 5 Star rated energy efficent pumps with
              IOT enabled control panle
            </li>
          </ul>
          <img src={photo2} alt="photo2" id="photo2" />
          <p id="photo2-about">
            Goverment of India has awarded the "National Energy Conservation
            Award 2018" Mr. Selvaraj, join Managing <br /> Director of C.R.I
            Geoup recived the award from SMT. Sumitra Mahajan, Speaker of Lok
            Sabha & Shri. Raj Kumar Singh,
            <br /> Honorable Minister of State
          </p>
        </div>
      </div>
      <div>
        <p id="paragraf2">
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A COMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION
        </p>
        <img src={photo3} alt="photo3" id="photo3" />
        <p id="items">
          Valves-Pumps-Pipes-IOT Drives & Controllers-Wires & Cables-Solar
          System-Motorts
        </p>
        <hr id="hr-line" />
        <div>
          <p id="item">C.R.I FLUID SYSTEM PRODUCTS CATER TO DIVERSE SEGMENTS</p>
          <p id="all-tems">
            CHEMICALS PROCESS | POWER | WATER & WASTER WATER | OILS & GASE |
            PHARMA | SUGARS & DISTILERIES | PAPER & PULP | MARINE & DEFENCE |
            METAL & MINING | FOOD & DEVERAGE
          </p>
          <p id="items1">
            PETROCHEMICAL & REFINERISE | BUIDING | HVAC | FIRE FIGHTING |
            AGRICULTER & RESIDENTIAL
          </p>
        </div>
      </div>
      <footer className="footer">
        <a href="#">
          <PhoneIcon /> Toll Free 1800 200 1234
        </a>
        <a href="#">
          <FacebookIcon /> www.facebook.com/cripumps
        </a>
        <a href="#">
          <LanguageIcon /> www.cripumps.com
        </a>
      </footer>
    </div>
  );
}

export default App;
