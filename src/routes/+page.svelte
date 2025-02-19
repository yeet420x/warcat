<script>
  let showNotification = false;

  const asciiArt = `_    ____  _____   ____ _____ ____   ___  _   _  ____ 
/ \\  |  _ \\| ____| / ___|_   _|  _ \\ / _ \\| \\ | |/ ___|
/ _ \\ | |_) |  _|   \\___ \\ | | | |_) | | | |  \\| | |  _ 
/ ___ \\|  __/| |___   ___) || | |  _ <| |_| | |\\  | |_| |
/_/   \\_\\_|   |_____| |____/ |_| |_| \\_\\\\___/|_| \\_|\\____|`;

  function copyAddress() {
    const address = "FRwjNqzxosT9nJqxY5aoucoskBq8a1UyjKobVQ4Fpump";
    navigator.clipboard.writeText(address).then(() => {
      showNotification = true;
      setTimeout(() => {
        showNotification = false;
      }, 2000);
    }).catch(err => {
      console.error("Failed to copy address", err);
    });
  }
</script>

<div class="ape-background">
  <!-- Utility Box with ASCII art -->
  <div class="utility-box">
    <div class="ascii-container">
      <pre class="ascii-art">{asciiArt}</pre>
    </div>
  </div>

  <!-- Social Icons -->
  <div class="social-icons">
    <a href="https://dexscreener.com/solana/hb4wn99ahtgykcu6uwznwnrxbdjtbmnhooygnhzxgc5r" target="_blank" rel="noopener noreferrer">
      <img src="dexscreener.svg" alt="dexs" style="filter: brightness(0); width: 30px; height: 30px;">
    </a>
    <a href="https://www.dextools.io/app/en/solana/pair-explorer/FRwjNqzxosT9nJqxY5aoucoskBq8a1UyjKobVQ4Fpump" target="_blank" rel="noopener noreferrer">
      <img src="dextools.svg" alt="dex" style="filter: brightness(0); width: 30px; height: 30px;">
    </a>
    <a href="https://t.me/acquireprofitevolve" target="_blank" rel="noopener noreferrer">
      <img src="tg.svg" alt="tg">
    </a>
    <a href="https://x.com/evolutionapesol" target="_blank" rel="noopener noreferrer">
      <img src="x.svg" alt="x">
    </a>
  </div>
  
  <!-- Centered Ape Image and Address Copy Section -->
  <div class="centered-container">
    <img src="ApeSolo2.png" alt="Ape" class="centered-img">
    <div class="address-copy-container">
      <span class="address-text">
        FRwjNqzxosT9nJqxY5aoucoskBq8a1UyjKobVQ4Fpump
      </span>
      <button class="copy-btn" on:click={copyAddress} title="Copy Address">
        <!-- Inline SVG for the copy icon -->
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="800px" width="800px" version="1.1" id="Layer_1" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">
<g id="Text-files">
	<path d="M53.9791489,9.1429005H50.010849c-0.0826988,0-0.1562004,0.0283995-0.2331009,0.0469999V5.0228   C49.7777481,2.253,47.4731483,0,44.6398468,0h-34.422596C7.3839517,0,5.0793519,2.253,5.0793519,5.0228v46.8432999   c0,2.7697983,2.3045998,5.0228004,5.1378999,5.0228004h6.0367002v2.2678986C16.253952,61.8274002,18.4702511,64,21.1954517,64   h32.783699c2.7252007,0,4.9414978-2.1725998,4.9414978-4.8432007V13.9861002   C58.9206467,11.3155003,56.7043495,9.1429005,53.9791489,9.1429005z M7.1110516,51.8661003V5.0228   c0-1.6487999,1.3938999-2.9909999,3.1062002-2.9909999h34.422596c1.7123032,0,3.1062012,1.3422,3.1062012,2.9909999v46.8432999   c0,1.6487999-1.393898,2.9911003-3.1062012,2.9911003h-34.422596C8.5049515,54.8572006,7.1110516,53.5149002,7.1110516,51.8661003z    M56.8888474,59.1567993c0,1.550602-1.3055,2.8115005-2.9096985,2.8115005h-32.783699   c-1.6042004,0-2.9097996-1.2608986-2.9097996-2.8115005v-2.2678986h26.3541946   c2.8333015,0,5.1379013-2.2530022,5.1379013-5.0228004V11.1275997c0.0769005,0.0186005,0.1504021,0.0469999,0.2331009,0.0469999   h3.9682999c1.6041985,0,2.9096985,1.2609005,2.9096985,2.8115005V59.1567993z"/>
</g>
</svg>      </button>
    </div>
  </div>

  <!-- Internal Notification Alert -->
  {#if showNotification}
    <div class="notification">Address copied to clipboard!</div>
  {/if}
</div>

<style>
  /* Reset defaults */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :global(body),
  :global(html) {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    margin: 0;
    padding: 0;
  }

  .ape-background {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #000;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='50'%3E%3Cdefs%3E%3Cpattern id='apePattern' width='100' height='50' patternUnits='userSpaceOnUse'%3E%3Ctext x='0' y='40' font-size='40' fill='white' opacity='0.1' font-family='Roboto, sans-serif'%3E%24APE%3C/text%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23apePattern)'/%3E%3C/svg%3E");
    background-repeat: repeat;
    overflow: hidden;
  }

  .utility-box {
    position: absolute;
    top: 20px;
    left: 20px;
    max-width: 95%;
  }

  .ascii-container {
    padding: 24px;
    border-radius: 6px;
    border: 1px solid white;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: auto;
    max-width: 100%;
  }

  /* Centered container for the image and address section */
  .centered-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 0;
  }

  .centered-img {
    max-width: 90%;
    max-height: 90%;
    display: block;
    margin: 0 auto;
  }

  /* Address and copy button styling */
  .address-copy-container {
    margin-top: 20px;
    display: inline-flex;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.6);
    padding: 8px 12px;
    border-radius: 6px;
    color: white;
    font-family: monospace;
    font-size: 14px;
  }

  .copy-btn {
    background: none;
    border: none;
    cursor: pointer;
    margin-left: 10px;
    display: flex;
    align-items: center;
    color: white; /* Ensure the SVG using currentColor is white */
  }

  .copy-btn svg {
    width: 20px;
    height: 20px;
    fill: currentColor;
    transition: opacity 0.3s;
  }

  .copy-btn:hover svg {
    opacity: 0.8;
  }

  .social-icons {
    position: absolute;
    top: 20px;
    right: 20px;
    display: flex;
    gap: 10px;
    z-index: 1;
    background-color: white;
    padding: 8px;
    border-radius: 4px;
  }

  .social-icons img {
    width: 30px;
    height: 30px;
    filter: invert(1);
    transition: opacity 0.3s;
  }

  .social-icons img:hover {
    opacity: 0.8;
  }

  .ascii-art {
    font-family: monospace;
    white-space: pre;
    margin: 0;
    font-size: 12px;
    line-height: 1.2;
    text-align: center;
    max-width: 100%;
    overflow-x: auto;
  }

  /* Notification alert styling */
  .notification {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.8);
    color: #fff;
    padding: 10px 20px;
    border-radius: 4px;
    transition: opacity 0.3s;
    z-index: 2;
  }

  @media (max-width: 768px) {
    .ascii-art {
      font-size: 8px;
    }
    
    .ascii-container {
      padding: 12px;
    }
    
    .utility-box {
      max-width: 80%;
    }
    
    .social-icons {
      top: auto;
      bottom: 20px;
      right: 20px;
    }
  }
</style>
