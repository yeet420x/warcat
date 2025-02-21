import { createCanvas } from 'canvas';
import { writeFileSync } from 'fs';
import { join } from 'path';

// Create a placeholder base image
const canvas = createCanvas(300, 300);
const ctx = canvas.getContext('2d');

// Fill with a placeholder color
ctx.fillStyle = '#666666';
ctx.fillRect(0, 0, 300, 300);

// Add some text
ctx.fillStyle = 'white';
ctx.font = '20px Arial';
ctx.textAlign = 'center';
ctx.fillText('Base Ape', 150, 150);

// Save the file
const buffer = canvas.toBuffer('image/png');
writeFileSync(join(process.cwd(), 'static', 'ape-base.png'), buffer); 