
// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles"); 
  return {
      dir: {
          input: ".",
          includes: "_includes",
          output: "_site"
      }
  };
};
