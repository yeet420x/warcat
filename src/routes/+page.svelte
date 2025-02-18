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
  <div class="absolute top-0 left-0 p-2 text-white">
    FRwjNqzxosT9nJqxY5aoucoskBq8a1UyjKobVQ4Fpump
  </div>
  
  <!-- Utility Box below the address -->
  <div class="absolute top-0 left-0 mt-12 ml-2">
    <p class="text-white mb-1">Utility</p>
    <div class="p-6 rounded-md text-white border border-white flex items-center justify-center overflow-auto">
      <pre class="ascii-art text-xs leading-tight text-center">{asciiArt}</pre>
    </div>
  </div>

  <!-- Social Icons in the top right corner -->
  <div class="social-icons bg-white p-2 rounded-sm">
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
  .ape-background {
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: #000;
    /* SVG pattern with a Roboto-like font for a tight repeating "$APE" effect */
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='50'%3E%3Cdefs%3E%3Cpattern id='apePattern' width='100' height='50' patternUnits='userSpaceOnUse'%3E%3Ctext x='0' y='40' font-size='40' fill='white' opacity='0.1' font-family='Roboto, sans-serif'%3E%24APE%3C/text%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23apePattern)'/%3E%3C/svg%3E");
    background-repeat: repeat;
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
  }
</style>
