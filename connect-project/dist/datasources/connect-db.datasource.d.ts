import { juggler } from '@loopback/repository';
export declare class ConnectDbDataSource extends juggler.DataSource {
    static dataSourceName: string;
    constructor(dsConfig?: object);
}
