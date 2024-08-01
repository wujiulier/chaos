// debug-loader.js
module.exports = function (source) {
    const processedSource = source;
    
    console.log(`Processing file: ${this.resourcePath}`);
    console.log('Source content:', source);
    console.log('Processed content:', processedSource);
  
    return processedSource;
  };
  