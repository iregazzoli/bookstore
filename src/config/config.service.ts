import * as dotenv from 'dotenv';

export class ConfigService {
  constructor() {
    const isDevelopmentEnv = process.env.NODE_ENV !== 'production';

    if (isDevelopmentEnv) {
      dotenv.config(); 
    }
  }

  get(key: string): string {
    const value = process.env[key];
    if (!value) {
      throw new Error(`Configuration key "${key}" is not defined in the environment variables`);
    }
    return value;
  }
}
