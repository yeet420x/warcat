<script>
  // No JavaScript required for this background.
  const asciiArt = `_    ____  _____   ____ _____ ____   ___  _   _  ____ 
/ \\  |  _ \\| ____| / ___|_   _|  _ \\ / _ \\| \\ | |/ ___|
/ _ \\ | |_) |  _|   \\___ \\ | | | |_) | | | |  \\| | |  _ 
/ ___ \\|  __/| |___   ___) || | |  _ <| |_| | |\\  | |_| |
/_/   \\_\\_|   |_____| |____/ |_| |_| \\_\\\\___/|_| \\_|\\____|`;
</script>

<div class="ape-background">
  <!-- Address in the top left -->
  <div class="address">
    FRwjNqzxosT9nJqxY5aoucoskBq8a1UyjKobVQ4Fpump
  </div>
  
  <!-- Utility Box below the address -->
  <div class="utility-box">
    <p class="utility-title">Utility</p>
    <div class="ascii-container">
      <pre class="ascii-art">{asciiArt}</pre>
    </div>
  </div>

  <!-- Social Icons in the top right corner (desktop) or bottom right (mobile) -->
  <div class="social-icons">
    <a href="https://www.dextools.io/app/en/solana/pair-explorer/FRwjNqzxosT9nJqxY5aoucoskBq8a1UyjKobVQ4Fpump?t=1739924199849" target="_blank" rel="noopener noreferrer">
      <img src="dextools.svg" alt="dex" style="filter: brightness(0); width: 30px; height: 30px;">
    </a>
    <a href="https://t.me/acquireprofitevolve" target="_blank" rel="noopener noreferrer">
      <img src="tg.svg" alt="tg">
    </a>
    <a href="https://x.com/evolutionapesol" target="_blank" rel="noopener noreferrer">
      <img src="x.svg" alt="x">
    </a>
  </div>
  
  <!-- Centered Ape Image -->
  <img src="ApeSolo2.png" alt="Ape" class="centered-img">
</div>

<style>
  /* Reset default margins and padding */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  /* Prevent scrolling on body and html */
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
    /* SVG pattern with a Roboto-like font for a tight repeating "$APE" effect */
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='50'%3E%3Cdefs%3E%3Cpattern id='apePattern' width='100' height='50' patternUnits='userSpaceOnUse'%3E%3Ctext x='0' y='40' font-size='40' fill='white' opacity='0.1' font-family='Roboto, sans-serif'%3E%24APE%3C/text%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23apePattern)'/%3E%3C/svg%3E");
    background-repeat: repeat;
    overflow: hidden;
  }
  
  .address {
    position: absolute;
    top: 0;
    left: 0;
    padding: 8px;
    color: white;
    font-size: 14px;
  }
  
  .utility-box {
    position: absolute;
    top: 48px;
    left: 8px;
    max-width: 95%;
  }
  
  .utility-title {
    color: white;
    margin-bottom: 4px;
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
  
  .centered-img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 90%;
    max-height: 90%;
    z-index: 0;
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
  
  /* Ensure the ASCII art displays in a monospace font with preserved whitespace */
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
  
  /* Media query for smaller screens */
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
    
    /* Reposition social icons to bottom right on mobile */
    .social-icons {
      top: auto;
      bottom: 20px;
      right: 20px;
    }
  }
</style>