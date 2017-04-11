import * as path from 'path';

import { Observable } from 'rxjs';
import { serverBuilder } from 'rxjs-grpc';
import { middleware } from '../proto/middleware.proto';

let applications: { [id: string]: middleware.Application };

class Master {
  protected static instance: Master;
  private settingsPath: string;
  private settings: string;
  private server: any;
  private isStarted: boolean;

  constructor(settingsPath: string) {
    if (Master.instance) {
      if (settingsPath !== Master.instance.settingsPath) {
        throw new Error('master already initialized with another'
                      + 'settings path');
      }
      return Master.instance;
    }
    Master.instance = this;
    this.settingsPath = settingsPath;

    this.server = serverBuilder<middleware.ServerBuilder>
      ('middleware.proto', 'middleware');
  };

  start() {
    if (this.isStarted) {
      return
    }
    this.isStarted = true;
    this.server.start('0.0.0.0:50051')
  }
};


let a = new Master()
