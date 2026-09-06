import { useEffect, useState } from "react";

const API_BASE = (process.env.REACT_APP_API_URL || "https://localhost:7050/api").replace(/\/api\/?$/, "");

const Header = () => {
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE}/api/settings`)
      .then((response) => response.json())
      .then((response) => setSettings(response.data || null))
      .catch(() => setSettings(null));
  }, []);

  const headerStyle = {
    color: "white !important",
    fontWeight: "900",
  };
  return (
    // <header
    //   className=""
    //   style={{
    //     backgroundImage: `url('./image/banner3-2.webp')`,
    //     height: "30rem",
    //     backgroundSize: "cover",
    //     position: "relative",
    //   }}
    // >
    //   <div className="container text-white">
    //     <div className="navLogos">
    //       <div className="logo">
    //         <img src={logo} />
    //         <h1>
    //           आर्यभट्ट नॉलेज यूनिवर्सिटी
    //           <br />
    //           Aryabhatt Knowledge University
    //         </h1>
    //       </div>
    //       <div className="logo2">
    //         <img src={logo2} alt="" />
    //       </div>
    //     </div>
    //     <h1 style={headerStyle}>SCHOOL OF JOURNALISM AND MASS COMMUNICATION</h1>
    //   </div>
    // </header>
    <header className="header width100 flex alignCenter justifyCenter flexColumn" style={{ height: "20rem" }}>
      <div className="headerParent width100 flex alignStart justifyCenter" style={{ height: "20rem" }}>
        <div className="headerContainer width95 maxWidth flex alignCenter justifyCenter flexColumn" style={{ height: "20rem" }}>
          <div className="nav flex alignCenter spaceBtw width100">
            <div className="logo flex alignCenter justifyCenter gap1" >
              {settings?.logoPath ? <img src={`${API_BASE}${settings.logoPath}`} alt={settings.siteName || 'SJMC'} style={{height:'8rem', width:'11rem',filter: 'drop-shadow(0px 0px 3px white)'}} /> : <div style={{ height: '8rem', width: '11rem' }} />}
              <h1 style={{margin:'-25px'}}>
                {settings?.siteName || 'SJMC'}
                <br />
                Aryabhatta Knowledge University
              </h1>
            </div>
          </div>
          <div className="heading">
            <h1 style={{position:'relative',bottom:'55px'}}>{settings?.metaTitle || 'SCHOOL OF JOURNALISM AND MASS COMMUNICATION'}</h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
