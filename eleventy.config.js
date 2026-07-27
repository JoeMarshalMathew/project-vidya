export default function(eleventyConfig) {
  // Pass the assets folder straight through to the compiled site
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
}