(function(window) {
    window.env = window.env || {};
    // Environment variables
    window["env"]["baseUrl"] = "${APP_BASE_URL}";
    window["env"]["maxDays"] = "${APP_MAX_DAYS}";
  })(this);