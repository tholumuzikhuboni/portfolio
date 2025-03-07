m
/**
 * Utility function to download a canvas as an image
 * @param canvas The canvas element to download
 * @param filename The filename for the downloaded image
 */
export const downloadCanvasAsImage = (canvas: HTMLCanvasElement, filename: string): void => {
  // Create a temporary link element
  const link = document.createElement('a');
  
  // Set the download attribute with the provided filename
  link.download = filename;
  
  // Convert the canvas to a data URL and set as the link's href
  link.href = canvas.toDataURL('image/png', 1.0);
  
  // Append the link to the document body
  document.body.appendChild(link);
  
  // Trigger the download
  link.click();
  
  // Clean up by removing the link
  document.body.removeChild(link);
};

/**
 * Creates and downloads a social preview image
 * @param element The element to capture (optional)
 */
export const generateSocialPreview = (element?: HTMLElement): void => {
  // Implementation will depend on specific requirements
  console.log('Generating social preview image...');
};
