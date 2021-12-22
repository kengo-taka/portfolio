import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton'

const Footer = () => {
  return (
    <div>

      <div className="sp10"></div>
      <div className="sp10"></div>
      <div className="sp5"></div>
      <div className="footer">
        <div className="footerBox">
          <div>
            <IconButton onClick={()=>window.open("https://www.linkedin.com/in/kengo-takamiya/")}>
              <LinkedInIcon className="footerIcon"/>
            </IconButton>
          </div>
          <div>
            <IconButton onClick={()=>window.open("https://github.com")}>
              <GitHubIcon className="footerIcon"/>
            </IconButton>

          </div>
        </div>

        <p className="smallK">
          © 2021 Kengo.T
        </p>
      </div>

      <div className="ocean">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>

      </div>



    </div>
  );
}

export default Footer;