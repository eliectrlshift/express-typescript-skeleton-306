import 'winston-daily-rotate-file';

import { get as emojiGet } from 'node-emoji';
import {
  addColors,
  createLogger,
  format,
  transports,
  Logger as WinstonLoggerType,
} from 'winston';

import { Logger } from '@domain/shared/logger';
import { GlobalConfig } from '@infrastructure/shared/config';

enum LevelName {
  SILLY = 'silly',
  DEBUG = 'debug',
  VERBOSE = 'verbose',
  HTTP = 'http',
  INFO = 'info',
  WARN = 'warn',
  ERROR = 'error',
}

const LEVEL_SEVERITY = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  verbose: 4,
  debug: 5,
  silly: 6,
};

const LEVEL_COLOR = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  verbose: 'grey',
  debug: 'white',
  silly: 'cyan',
};

const DEFAULT_FORMAT = format.combine(
  format.errors({ stack: true }),
  format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss.ms' }),
  format.printf((info) =>
    `[${info.timestamp}] ${info.level.toLocaleUpperCase()} ${info.message} ${
      info.stack || ''
    }`.trim()
  )
);

const CONSOLE_FORMAT = format.combine(
  format((info) => ({ ...info, level: info.level.toUpperCase() }))(),
  format.errors({ stack: true }),
  format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss.ms' }),
  format.colorize({ all: true }),
  format.printf((info) =>
    `[${info.timestamp}] ${info.level} ${info.message} ${
      info.stack || ''
    }`.trim()
  )
);

class WinstonLogger implements Logger {
  private readonly level: string = GlobalConfig.IS_DEVELOPMENT
    ? LevelName.DEBUG
    : LevelName.INFO;

  private readonly logsFolder: string = GlobalConfig.LOGS_FOLDER;

  private readonly logger: WinstonLoggerType;

  constructor() {
    this.logger = this.configureAndGetLogger();
  }

  public silly(value: string | unknown): void {
    this.logger.silly(`${emojiGet('unicorn_face')} ${this.getValue(value)}`);
  }

  public debug(value: string | unknown): void {
    this.logger.debug(`${emojiGet('video_game')} ${this.getValue(value)}`);
  }

  public verbose(value: string | unknown): void {
    this.logger.verbose(
      `${emojiGet('eye-in-speech-bubble')} ${this.getValue(value)}`
    );
  }

  public http(value: string | unknown): void {
    this.logger.http(`${emojiGet('computer')} ${this.getValue(value)}`);
  }

  public info(value: string | unknown): void {
    this.logger.info(`${emojiGet('bulb')} ${this.getValue(value)}`);
  }

  public warn(value: string | unknown): void {
    this.logger.warn(`${emojiGet('loudspeaker')} ${this.getValue(value)}`);
  }

  public error(value: string | Error | unknown): void {
    if (value instanceof Error) {
      this.logger.error(emojiGet('x'), value);
    } else {
      this.logger.error(`${emojiGet('x')} ${this.getValue(value)}`);
    }
  }

  private configureAndGetLogger = (): WinstonLoggerType => {
    addColors(LEVEL_COLOR);

    const transportsList = [
      new transports.Console({
        level: this.level,
        handleExceptions: true,
        format: CONSOLE_FORMAT,
      }),
      new transports.File({
        filename: `${this.logsFolder}/error.log`,
        level: LevelName.ERROR,
        handleExceptions: true,
        maxsize: 5_242_880, // 5MB
        maxFiles: 1,
      }),
      new transports.DailyRotateFile({
        filename: `${this.logsFolder}/all-%DATE%.log`,
        level: this.level,
        handleExceptions: true,
        datePattern: 'YYYY-MM-DD',
        zippedArchive: true,
        maxSize: '20m',
        maxFiles: '30d',
      }),
    ];

    return createLogger({
      level: this.level,
      levels: LEVEL_SEVERITY,
      format: DEFAULT_FORMAT,
      transports: transportsList,
      exitOnError: false,
      handleExceptions: true,
    });
  };

  private getValue = (value: string | unknown): string => {
    if (typeof value === 'string') {
      return value;
    }
    return JSON.stringify(value);
  };
}

export { WinstonLogger };
