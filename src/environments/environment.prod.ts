export const environment = {
  production: true,
  baseUrl: window["env"] ? window["env"]["baseUrl"] : "http://localhost:8088",
  maxDays: window["maxDays"] ? window["maxDays"]["maxDays"] : 90
};
