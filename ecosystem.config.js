module.exports = {
  apps: [
    {
      name: 'server-api-1',
      script: 'app.js',
      instances: 1,
      autorestart: false,
      watch: false,
      max_memory_restart: '1G',
      "exec_mode": "fork",
      "log_date_format": "YYYY-MM-DD HH:mm:ss",
      "combine_logs": true,
      error_file: '/data/logs/server-api-1-error.log',
      out_file: '/data/logs/server-api-1-out.log',
      env: {
        NODE_ENV: 'development',
        PORT: 3000,
        "TZ": "Asia/Shanghai"
      }
    }
  ]
};
