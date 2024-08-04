class MyCustomWebpackPlugin {
    apply(compiler) {
      compiler.hooks.compile.tap('MyCustomWebpackPlugin', (params) => {
        console.log('The compiler is starting to compile...');
        debugger;
      });
  
      compiler.hooks.done.tap('MyCustomWebpackPlugin', (stats) => {
        console.log('Compile is done.');
        if (stats.hasErrors()) {
          console.error(stats.toJson().errors);
        }
        if (stats.hasWarnings()) {
          console.warn(stats.toJson().warnings);
        }
      });
    }
  }
  
  module.exports = MyCustomWebpackPlugin;
  