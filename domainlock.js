(function(){

  // ✅ Allowed domains
  const ALLOWED = [
    "techz.fun",
    "gamesaved.xyz"
  ];

  const current = window.location.hostname;

  function isAllowed(host){
    return ALLOWED.some(domain =>
      host === domain || host.endsWith("." + domain)
    );
  }

  function blockAccess(){
    console.warn("⛔ Unauthorized domain:", current);

    document.documentElement.innerHTML = `
      <div style="
        background:#000;
        color:#fff;
        height:100vh;
        display:flex;
        align-items:center;
        justify-content:center;
        font-family:sans-serif;
        text-align:center;
        flex-direction:column;
      ">
        <h1>🚫 Access Denied</h1>
        <p>This player is not allowed on this domain.</p>
      </div>
    `;

    throw new Error("Domain blocked");
  }

  // 🚫 Block iframe embedding (optional but recommended)
  if (window.top !== window.self) {
    blockAccess();
  }

  // ✅ Domain check
  if (!isAllowed(current)) {
    blockAccess();
  }

})();