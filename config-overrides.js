import path from 'path';

module.exports = function override(config, env) {
  // Modify the publicPath to match your new index.html location
  config.output.publicPath = '/Users/navansh/Web_Dev_Projects/demo_CFG/team-21-jpmc-cfg';

  // Modify the entry point to the new index.js location
  config.entry = path.resolve(__dirname, '/Users/navansh/Web_Dev_Projects/demo_CFG/team-21-jpmc-cfg/src/main.jsx');

  return config;
};
