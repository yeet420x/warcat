<script lang="ts">
  type Trait = {
    name: string;
    options: string[];
    selected: string;
  };

  // Updated traits based on your folder structure
  let traits: Trait[] = [
    {
      name: 'backgrounds',
      options: [
        'none',
        'blue',
        'brown',
        'green',
        'grey',
        'island',
        'magma',
        'purple',
        'red',
        'yellow'
      ],
      selected: 'none'
    },
    {
      name: 'body_color',
      options: [
        'none',
        'base_monkey',
        'blue_monkey',
        'brown_monkey',
        'gold_monkey',
        'green_monkey',
        'orange',
        'purple_monkey',
        'red_monkey',
        'yellow_monkey'
      ],
      selected: 'none'
    },
    {
      name: 'glasses',
      options: [
        'none',
        'laser_eyes',
        'mog_glasses',
        'moneybag',
        'nerd_glasses',
        'sunglasses'
      ],
      selected: 'none'
    },
    {
      name: 'head',
      options: [
        'none',
        'banana_hat',
        'cat_ears',
        'hat',
        'sungoku_hair',
        'wukong_crown'
      ],
      selected: 'none'
    },
    {
      name: 'neck',
      options: [
        'none',
        'yeezus chain',
        'scarf',
        'spikder_collars'
      ],
      selected: 'none'
    },
    {
      name: 'overlays',
      options: ['none',
      'ape_sign',
      'banana_rain',
      'money_rain',
      'raibow_vomit',
      'web_black',
      'web_white'
      ],
      selected: 'none'
    }
  ];

  // Base image path
  const baseImagePath = '/ape-base.jpg'; // Make sure to add this image to your static/public folder

  let canvas: HTMLCanvasElement;

  // Define the render order (from bottom to top)
  const renderOrder = ['backgrounds','overlays', 'body_color', 'neck', 'head', 'glasses'];

  function randomize() {
    traits = traits.map(trait => {
      // For background and body_color, exclude 'none' from options
      if (trait.name === 'backgrounds' || trait.name === 'body_color') {
        const validOptions = trait.options.filter(option => option !== 'none');
        return {
          ...trait,
          selected: validOptions[Math.floor(Math.random() * validOptions.length)]
        };
      }
      // For other traits, keep 'none' as a possible option
      return {
        ...trait,
        selected: trait.options[Math.floor(Math.random() * trait.options.length)]
      };
    });
  }

  function updateTrait(traitIndex: number, value: string) {
    traits[traitIndex].selected = value;
    traits = [...traits]; // Trigger reactivity
  }

  async function compositeAndDownload() {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw traits in specific order (bottom to top)
    for (const traitName of renderOrder) {
      const trait = traits.find(t => t.name === traitName);
      if (trait && trait.selected !== 'none') {
        const traitImage = new Image();
        traitImage.src = `/traits/${trait.name}/${trait.selected}.png`;
        await new Promise(resolve => traitImage.onload = resolve);
        ctx.drawImage(traitImage, 0, 0, canvas.width, canvas.height);
      }
    }

    const link = document.createElement('a');
    link.download = 'my-ape.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  }
</script>

<div class="meme-generator">
  <div class="preview-container">
    {#each renderOrder as traitName}
      {@const trait = traits.find(t => t.name === traitName)}
      {#if trait && trait.selected !== 'none'}
        <img 
          src={`/traits/${trait.name}/${trait.selected}.png`}
          alt={trait.selected}
          class="trait-overlay"
        />
      {/if}
    {/each}
  </div>

  <canvas 
    bind:this={canvas}
    width="300"
    height="300"
    class="hidden"
  ></canvas>

  <div class="button-container">
    <button class="randomize-btn" on:click={randomize}>
      Randomize
    </button>
    <button class="download-btn" on:click={compositeAndDownload}>
      Download Image
    </button>
  </div>

  <div class="traits-selector">
    {#each traits as trait, i}
      <div class="trait-group">
        <label for={`trait-${trait.name}`}>{trait.name}</label>
        <select 
          id={`trait-${trait.name}`}
          value={trait.selected}
          on:change={(e) => updateTrait(i, e.currentTarget.value)}
        >
          {#each trait.options as option}
            <option value={option}>{option}</option>
          {/each}
        </select>
      </div>
    {/each}
  </div>
</div>

<style>
  .meme-generator {
    background: rgba(0, 0, 0, 0.8);
    padding: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }

  .preview-container {
    position: relative;
    width: 300px;
    height: 300px;
  }

  .trait-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .hidden {
    display: none;
  }

  .traits-selector {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .trait-group {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  select {
    background: #333;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid #555;
    cursor: pointer;
  }

  select:hover {
    background: #444;
  }

  label {
    font-size: 14px;
    color: #fff;
  }

  .download-btn {
    background: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
  }

  .download-btn:hover {
    background: #45a049;
  }

  .button-container {
    display: flex;
    gap: 10px;
    margin: 10px 0;
  }

  .randomize-btn {
    background: #9C27B0;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
  }

  .randomize-btn:hover {
    background: #7B1FA2;
  }
</style> 