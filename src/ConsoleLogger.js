import NullLogger from "./NullLogger";

class ConsoleLogger extends NullLogger {
  constructor(consoleOverride) {
    super();

    this.out = consoleOverride || console;
  }

  log(level, ...args) {
    this.out.log(`${level}:`, ...args);
  }

  warn(...args) {
    this.log("warn", ...args);
  }

  error(...args) {
    this.out.error("error:", ...args);
  }
}

export default ConsoleLogger;
