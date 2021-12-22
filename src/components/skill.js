import { Grid } from "@mui/material";
import AppleIcon from '@mui/icons-material/Apple';
import DesktopMacIcon from '@mui/icons-material/DesktopMac';

const Skill = () => {
  return (
    <div id="skill">
      <div className="sp10"></div>
      <div className="skill">
        <p className="skillTitle">SKILL</p>
        <div className="skillLine"></div>
        <div className="sp5"></div>

        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <div className="skillBox">
              <AppleIcon className="skillIcon" style={{ fontSize: 80, color: "rgb(57, 114, 160)" }} />
              <p className="skillBoxTitle">iOS Developer</p>
              <p className="skillItem">Swift</p>
              <p className="skillItem">Objective-C</p>
            </div>

          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={6}>
            <div className="skillBox">
              <DesktopMacIcon className="skillIcon" style={{ fontSize: 80, color: "rgb(57, 114, 160)" }} />
              <p className="skillBoxTitle">Web Developer</p>
              <p className="skillItem">React.js / Next.js / Material UI</p>
              <p className="skillItem">Redux</p>
              <p className="skillItem">Firebase / MongoDB / MySQL</p>
              <p className="skillItem">Java</p>
              <p className="skillItem">JavaScript(Express)</p>
              <p className="skillItem">HTML / CSS / BootStrap</p>
              <p className="skillItem">WordPress(with PHP)</p>
            </div>
          </Grid>
        </Grid>
        <div className="itemLine"></div>
      </div>
    </div>
  );
}

export default Skill;