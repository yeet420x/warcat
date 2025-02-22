<script>
  import MemeGenerator from '$lib/MemeGenerator.svelte';

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

<!-- Interactive layer with the only set of icons we want -->
<div class="interactive-layer">
  <div class="social-links">
    <a href="https://t.me/apesol_portal" target="_blank" rel="noopener noreferrer" class="social-link">
      <img src="tg.svg" alt="Telegram" />
    </a>
    <a href="https://twitter.com/apesolcoin" target="_blank" rel="noopener noreferrer" class="social-link">
      <img src="x.svg" alt="Twitter" />
    </a>
    <a href="https://dexscreener.com/solana/eyjskiysj15vmrg2dpxpscagcrw3cp4xrfjbdzn8pgcu" target="_blank" rel="noopener noreferrer" class="social-link">
      <img src="dexscreener.svg" alt="Raydium" />
    </a>
  </div>

  <!-- ASCII Art -->
  <pre class="ascii-art">{asciiArt}</pre>

  <!-- Keep copy address section -->
  <div class="central-address">
    <div class="address-copy-container">
      <span>{tokenMintAddress}</span>
      <button class="copy-btn" on:click={copyAddress}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24px" width="24px" version="1.1" viewBox="0 0 64 64">
          <path d="M53.7,11.9H32.3V8.7c0-1.4-1.1-2.5-2.5-2.5h-21c-1.4,0-2.5,1.1-2.5,2.5v29.7c0,1.4,1.1,2.5,2.5,2.5h3.2v13.5 c0,1.4,1.1,2.5,2.5,2.5h39.2c1.4,0,2.5-1.1,2.5-2.5V14.4C56.2,13,55.1,11.9,53.7,11.9z M11.3,35.9H8.8V8.7h21v3.2H14.5 c-1.4,0-2.5,1.1-2.5,2.5v21.5H11.3z M51.2,51.9H14.5V14.4h36.7V51.9z"/>
        </svg>
      </button>
    </div>
  </div>
</div>

<!-- Background layer - remove any duplicate icons from here -->
<div class="ape-background">
  <!-- Only keep video and matrix animation here -->
  <div class="central-video">
    <video autoplay loop muted class="centered-img">
      <source src="walk.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>

  <div class="matrix-container">
    {#each matrixItems as item}
      <div
        class="matrix-letter"
        style="left: {item.left}%; animation-delay: {item.delay}s; animation-duration: {item.duration}s"
      >
        $APE
      </div>
    {/each}
  </div>
</div>

<div class="content-wrapper" style="z-index: 10;">
  <div class="spacer"></div>
  <section class="generator-section">
    <div class="container">
      <h2>APE Generator</h2>
      <MemeGenerator />
    </div>
  </section>
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
    height: 100vh;
    background-color: #000;
    overflow: hidden;
    z-index: 1;
    pointer-events: none;
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
    z-index: 2;
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
    z-index: 1000;
    pointer-events: auto;
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
    pointer-events: auto;
  }
  .copy-btn {
    background: none;
    border: none;
    cursor: pointer;
    margin-left: 10px;
    display: flex;
    align-items: center;
    color: #fff;
    pointer-events: auto;
  }
  .copy-btn svg {
    width: 20px;
    height: 20px;
    transition: opacity 0.3s;
  }
  .copy-btn:hover svg {
    opacity: 0.8;
  }
  .notification {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0, 255, 0, 0.8);
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    font-family: monospace;
    z-index: 9999;
  }
  @media (max-width: 768px) {
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
  .content-wrapper {
    position: relative;
    z-index: 10;
    padding-top: 100vh;
  }
  .spacer {
    height: 100vh;
  }
  .generator-section {
    position: relative;
    z-index: 11;
    background: #1a1a1a;
    padding: 4rem 1rem;
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .container {
    position: relative;
    z-index: 12;
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    text-align: center;
  }
  h2 {
    color: #fff;
    font-size: 2.5rem;
    margin-bottom: 2rem;
    font-family: monospace;
  }
  /* Ensure MemeGenerator component is visible */
  :global(.generator-section :global(canvas)) {
    max-width: 100%;
    height: auto;
  }
  .central-address, 
  .copy-btn,
  .address-copy-container {
    pointer-events: auto;
  }
  .interactive-layer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    pointer-events: none;
  }

  .social-links {
    position: fixed;
    top: 20px;
    right: 20px;
    display: flex;
    gap: 20px;
    pointer-events: auto;
    z-index: 1000;
  }

  .social-link {
    display: flex;
    align-items: center;
    padding: 8px;
    cursor: pointer;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 6px;
  }

  .social-link img {
    width: 24px;
    height: 24px;
    filter: none;
    opacity: 1;
    transition: opacity 0.3s;
  }

  .social-link:hover img {
    opacity: 0.8;
  }

  .ascii-art {
    position: fixed;
    top: 20px;
    left: 10%;
    transform: translateX(-50%);
    color: white;
    font-family: monospace;
    white-space: pre;
    text-align: center;
    pointer-events: none;
    z-index: 1000;
    font-size: 14px;
    line-height: 1.2;
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
  }
</style>
