module.exports = {
  apps: [
    {
      name: 'NuxtAppName',
      exec_mode: 'fork',
      script: './node_modules/nuxt/bin/nuxt.mjs',
      args: 'start'
    }
  ]
}
