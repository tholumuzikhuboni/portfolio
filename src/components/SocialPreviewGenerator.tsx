
import React, { useEffect, useRef } from 'react';
import { fabric } from 'fabric';

const SocialPreviewGenerator = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = new fabric.Canvas(canvasRef.current, {
      width: 1200,
      height: 630,
      backgroundColor: '#ffffff'
    });

    // Background gradient
    const bgRect = new fabric.Rect({
      width: 1200,
      height: 630,
      left: 0,
      top: 0,
      fill: '#ffffff'
    });
    canvas.add(bgRect);

    // Add decorative gradient circles
    const topRightCircle = new fabric.Circle({
      radius: 300,
      left: 720,
      top: -150,
      fill: new fabric.Gradient({
        type: 'radial',
        coords: { x1: 0.5, y1: 0.5, x2: 0.5, y2: 0.5, r1: 0, r2: 1 },
        colorStops: [
          { offset: 0, color: 'rgba(99, 102, 241, 0.2)' },
          { offset: 1, color: 'rgba(168, 85, 247, 0.2)' }
        ]
      })
    });
    canvas.add(topRightCircle);

    const bottomLeftCircle = new fabric.Circle({
      radius: 300,
      left: -100,
      top: 480,
      fill: new fabric.Gradient({
        type: 'radial',
        coords: { x1: 0.5, y1: 0.5, x2: 0.5, y2: 0.5, r1: 0, r2: 1 },
        colorStops: [
          { offset: 0, color: 'rgba(234, 179, 8, 0.2)' },
          { offset: 1, color: 'rgba(34, 197, 94, 0.2)' }
        ]
      })
    });
    canvas.add(bottomLeftCircle);

    // Add code bracket decorations
    const leftBracket = new fabric.Text('{', {
      left: 100,
      top: 150,
      fontSize: 120,
      fontFamily: 'monospace',
      fill: 'rgba(16, 185, 129, 0.1)'
    });
    canvas.add(leftBracket);

    const rightBracket = new fabric.Text('}', {
      left: 1050,
      top: 350,
      fontSize: 120,
      fontFamily: 'monospace',
      fill: 'rgba(139, 92, 246, 0.1)'
    });
    canvas.add(rightBracket);

    const codeTag = new fabric.Text('</>', {
      left: 850,
      top: 200,
      fontSize: 80,
      fontFamily: 'monospace',
      fill: 'rgba(59, 130, 246, 0.1)'
    });
    canvas.add(codeTag);

    // Add name with gradient
    const nameText = new fabric.Text('Tholumuzi Khuboni', {
      left: 150,
      top: 250,
      fontSize: 72,
      fontFamily: 'Arial, sans-serif',
      fontWeight: 'bold'
    });
    
    // Apply gradient to text
    const nameGradient = new fabric.Gradient({
      type: 'linear',
      coords: { x1: 0, y1: 0, x2: nameText.width, y2: 0 },
      colorStops: [
        { offset: 0, color: '#4f46e5' },
        { offset: 0.5, color: '#a855f7' },
        { offset: 1, color: '#ec4899' }
      ]
    });
    nameText.set('fill', nameGradient);
    canvas.add(nameText);

    // Add role
    const roleText = new fabric.Text('Software Developer', {
      left: 150,
      top: 340,
      fontSize: 40,
      fontFamily: 'Arial, sans-serif',
      fill: '#4b5563'
    });
    canvas.add(roleText);

    // Add tagline
    const taglineText = new fabric.Text('Crafting elegant, user-friendly web applications', {
      left: 150,
      top: 400,
      fontSize: 28,
      fontFamily: 'Arial, sans-serif',
      fill: '#6b7280'
    });
    canvas.add(taglineText);

    // Add website URL
    const urlText = new fabric.Text('tholumuzi.co.za', {
      left: 150,
      top: 500,
      fontSize: 32,
      fontFamily: 'Arial, sans-serif',
      fontWeight: 'bold',
      fill: '#3b82f6'
    });
    canvas.add(urlText);

    // Generate the image
    setTimeout(() => {
      const dataURL = canvas.toDataURL({
        format: 'png',
        quality: 1
      });
      
      // Create a download link
      const link = document.createElement('a');
      link.href = dataURL;
      link.download = 'tholumuzi-preview.png';
      link.click();
      
      console.log('Social preview image generated!');
    }, 1000);

    return () => {
      canvas.dispose();
    };
  }, []);

  return (
    <div className="hidden">
      <canvas ref={canvasRef} />
    </div>
  );
};

export default SocialPreviewGenerator;
