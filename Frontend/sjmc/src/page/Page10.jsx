import React, { useEffect } from 'react';

function Page10() {
  useEffect(() => {
    window.location.replace("https://akubihar.ac.in/Administration/Recruitments.aspx");
  }, []);

  return (
    <noscript>
      <div style={{ margin: '50px' }} className="container text-center">
        <h4>Redirecting to Career Page...</h4>
        <p>If you are not redirected automatically, <a href="https://akubihar.ac.in/Administration/Recruitments.aspx">click here</a>.</p>
      </div>
    </noscript>
  );
}

export default Page10;
