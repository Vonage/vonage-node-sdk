class NullLogger {
  log(level, ...args) {}

  info(...args) {
    this.log("info", ...args);
  }

  warn(...args) {
    this.log("warn", ...args);
  }

  error(...args) {
    this.log("error", ...args);
  }
}

module.exports = NullLogger;
