export class Logger {
  static info(message: string): void {
    console.log(`ℹ️ ${message}`);
  }

  static success(message: string): void {
    console.log(`✅ ${message}`);
  }

  static warning(message: string): void {
    console.log(`⚠️ ${message}`);
  }

  static error(message: string): void {
    console.error(`❌ ${message}`);
  }
}