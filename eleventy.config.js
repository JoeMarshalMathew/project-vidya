export default function(eleventyConfig) {
  return {
    dir: {
      input: "src",    // Eleventy will read your files here
      output: "_site"  // Eleventy will compile the final website here
    }
  };
}