import dotenv from 'dotenv';
import fs from 'fs';
import cluster from 'cluster';
import lodash from 'lodash';
import path from 'path';

export interface EnvData {
  // application
  APP_NAME: string;
  APP_DESCRIPTION?: string;
  APP_VERSION?: string;
  APP_ENV: string;
  APP_DEBUG: boolean;
  START_AT: Date;

  // database
  DB_TYPE: 'mysql' | 'postgres' | 'mongodb';
  DB_HOST?: string;
  DB_NAME?: string;
  DB_PORT?: number;
  DB_USER?: string;
  DB_PASSWORD?: string;
  DB_CONNECTION?: string;
}

export class EnvService {
  private vars: EnvData;

  constructor() {
    const environment = process.env.NODE_ENV || 'development';
    const envPath = path.join(__dirname, `../../env/.env.${environment}`);
    console.log('-------envPath:', envPath);
    const data: any = dotenv.parse(fs.readFileSync(envPath));

    data.APP_ENV = environment;
    data.APP_DEBUG = data.APP_DEBUG === 'true' ? true : false;
    data.START_AT = new Date();

    data.DB_PORT = parseInt(data.DB_PORT);

    this.vars = data as EnvData;
  }

  read(): EnvData {
    return this.vars;
  }

  isDev(): boolean {
    return this.vars.APP_ENV === 'development';
  }

  isProd(): boolean {
    return this.vars.APP_ENV === 'production';
  }

  currentWorker(): string {
    const worker = lodash.isNil(cluster.worker) ? 'master' : `worker@${cluster.worker.id}`;
    return worker;
  }
}
