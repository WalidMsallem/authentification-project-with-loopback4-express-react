import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './connect-db.datasource.json';

export class ConnectDbDataSource extends juggler.DataSource {
  static dataSourceName = 'connectDB';

  constructor(
    @inject('datasources.config.connectDB', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
