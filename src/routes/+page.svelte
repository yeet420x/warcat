<script>
  // Removed token holders logic and onMount

  let showNotification = false;

  // The token mint address
  const tokenMintAddress = "FRwjNqzxosT9nJqxY5aoucoskBq8a1UyjKobVQ4Fpump";

  // Generate falling "$APE" elements for the background effect
  const matrixCount = 30;
  const matrixItems = Array.from({ length: matrixCount }, () => ({
    left: Math.random() * 100, // random horizontal position (%)
    delay: Math.random() * 5,  // random delay (seconds)
    duration: 5 + Math.random() * 5 // random duration (seconds)
  }));

  const asciiArt = `
░█▀█░█▀█░█▀▀░░░█▀▀░▀█▀░█▀▄░█▀█░█▀█░█▀▀
░█▀█░█▀▀░█▀▀░░░▀▀█░░█░░█▀▄░█░█░█░█░█░█
░▀░▀░▀░░░▀▀▀░░░▀▀▀░░▀░░▀░▀░▀▀▀░▀░▀░▀▀▀
`;

  function copyAddress() {
    navigator.clipboard.writeText(tokenMintAddress)
      .then(() => {
        showNotification = true;
        setTimeout(() => { showNotification = false; }, 2000);
      })
      .catch(err => console.error("Failed to copy address", err));
  }
</script>

<div class="ape-background">
  <!-- Central Video (Bottom Layer) -->
  <div class="central-video">
    <video autoplay loop muted class="centered-img">
      <source src="walk.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>

  <!-- Matrix Falling Background (Layered above the video) -->
  <div class="matrix-container">
    {#each matrixItems as item}
      <div class="matrix-letter" style="left: {item.left}%; animation-delay: {item.delay}s; animation-duration: {item.duration}s;">
        $APE
      </div>
    {/each}
  </div>

  <!-- Central Address Copy Container (Above the matrix) -->
  <div class="central-address">
    <div class="address-copy-container">
      <span class="address-text">{tokenMintAddress}</span>
      <button class="copy-btn" on:click={copyAddress} title="Copy Address">
        <!-- Copy Icon SVG -->
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="800px" width="800px" version="1.1" viewBox="0 0 64 64" xml:space="preserve">
          <g>
            <path d="M53.9791489,9.1429005H50.010849c-0.0826988,0-0.1562004,0.0283995-0.2331009,0.0469999V5.0228 C49.7777481,2.253,47.4731483,0,44.6398468,0h-34.422596C7.3839517,0,5.0793519,2.253,5.0793519,5.0228v46.8432999 c0,2.7697983,2.3045998,5.0228004,5.1378999,5.0228004h6.0367002v2.2678986C16.253952,61.8274002,18.4702511,64,21.1954517,64 h32.783699c2.7252007,0,4.9414978-2.1725998,4.9414978-4.8432007V13.9861002 C58.9206467,11.3155003,56.7043495,9.1429005,53.9791489,9.1429005z M7.1110516,51.8661003V5.0228 c0-1.6487999,1.3938999-2.9909999,3.1062002-2.9909999h34.422596c1.7123032,0,3.1062012,1.3422,3.1062012,2.9909999v46.8432999 c0,1.6487999-1.393898,2.9911003-3.1062012,2.9911003h-34.422596C8.5049515,54.8572006,7.1110516,53.5149002,7.1110516,51.8661003z M56.8888474,59.1567993c0,1.550602-1.3055,2.8115005-2.9096985,2.8115005h-32.783699 c-1.6042004,0-2.9097996-1.2608986-2.9097996-2.8115005v-2.2678986h26.3541946 c2.8333015,0,5.1379013-2.2530022,5.1379013-5.0228004V11.1275997c0.0769005,0.0186005,0.1504021,0.0469999,0.2331009,0.0469999 h3.9682999c1.6041985,0,2.9096985,1.2609005,2.9096985,2.8115005V59.1567993z"/>
          </g>
        </svg>
      </button>
    </div>
  </div>

  <!-- Content Overlay for Utility Box & Social Icons -->
  <div class="content-overlay">
    <div class="utility-box">
      <div class="ascii-container">
        <pre class="ascii-art">{asciiArt}</pre>
      </div>
    </div>
    <div class="social-icons">
      <a href="https://dexscreener.com/solana/hb4wn99ahtgykcu6uwznwnrxbdjtbmnhooygnhzxgc5r" target="_blank" rel="noopener noreferrer">
        <img src="dexscreener.svg" alt="dexs" />
      </a>
      <a href="https://www.dextools.io/app/en/solana/pair-explorer/FRwjNqzxosT9nJqxY5aoucoskBq8a1UyjKobVQ4Fpump" target="_blank" rel="noopener noreferrer">
        <img src="dextools.svg" alt="dex" />
      </a>
      <a href="https://t.me/acquireprofitevolve" target="_blank" rel="noopener noreferrer">
        <img src="tg.svg" alt="tg" />
      </a>
      <a href="https://x.com/evolutionapesol" target="_blank" rel="noopener noreferrer">
        <img src="x.svg" alt="x" />
      </a>
    </div>
  </div>

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
    overflow: hidden;
  }
  /* Central Video: placed at the bottom layer */
  .central-video {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -3;
  }
  .centered-img {
    max-width: 90%;
    max-height: 90%;
    display: block;
  }
  /* Matrix Falling Background: layered above the video */
  .matrix-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -2;
  }
  .matrix-letter {
    position: absolute;
    top: -50px;
    font-family: monospace;
    font-size: 24px;
    color: #fff;
    text-shadow: 0 0 5px #fff, 0 0 10px #fff;
    opacity: 0;
    animation: fall linear infinite;
  }
  @keyframes fall {
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(110vh);
      opacity: 0;
    }
  }
  /* Central Address Container: positioned below the video */
  .central-address {
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 0;
  }
  .address-copy-container {
    display: inline-flex;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.6);
    padding: 8px 12px;
    border-radius: 6px;
    color: #fff;
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
    color: #fff;
  }
  .copy-btn svg {
    width: 20px;
    height: 20px;
    transition: opacity 0.3s;
  }
  .copy-btn:hover svg {
    opacity: 0.8;
  }
  /* Content Overlay for Utility Box & Social Icons */
  .content-overlay {
    position: relative;
    z-index: 2;
  }
  .utility-box {
    position: absolute;
    top: 20px;
    left: 20px;
    max-width: 95%;
    z-index: 3;
  }
  .ascii-container {
    padding: 6px 24px 24px 24px;
    border-radius: 6px;
    border: 1px solid #fff;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: auto;
    max-width: 100%;
  }
  .social-icons {
    position: absolute;
    top: 20px;
    right: 20px;
    display: flex;
    gap: 10px;
    z-index: 4;
    background-color: #fff;
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
    font-size: 12px;
    line-height: 1.2;
    text-align: center;
    max-width: 100%;
    overflow-x: auto;
  }
  .notification {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.8);
    color: #fff;
    padding: 10px 20px;
    border-radius: 4px;
    z-index: 5;
    transition: opacity 0.3s;
  }
  @media (max-width: 768px) {
    .social-icons {
      position: fixed; /* Changed from absolute to fixed */
      top: auto;
      bottom: 20px;
      right: 20px;
      z-index: 7;
    }
    .centered-img {
      width: 100%;
      max-width: 100%;
      height: auto;
    }
    .ascii-art {
      font-size: 8px;
    }
    .ascii-container {
      padding: 12px;
    }
    .utility-box {
      max-width: 80%;
    }
  }
</style>
