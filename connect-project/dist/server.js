"use strict";
// Copyright IBM Corp. 2019. All Rights Reserved.
// Node module: @loopback/example-express-composition
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
const application_1 = require("./application");
const express = require("express");
const path = require("path");
const p_event_1 = require("p-event");
class ExpressServer {
    constructor(options = {}) {
        this.app = express();
        this.lbApp = new application_1.NoteApplication(options);
        // Expose the front-end assets via Express, not as LB4 route
        this.app.use('/api', this.lbApp.requestHandler);
        // Custom Express routes
        // this.app.get('/', function(_req: Request, res: Response) {
        //   res.sendFile(path.join(__dirname, '../public/express.html'));
        // });
        // this.app.get('/hello', function(_req: Request, res: Response) {
        //   res.send('Hello world!');
        // });
        // react application   path.join(__dirname, 'build', 'index.html')
        this.app.use(express.static(path.join(__dirname, '../../connect-client/build')));
        console.log(__dirname, '__dirname');
        this.app.get('*', function (req, res) {
            // res.sendFile(path.join(__dirname, 'build', 'index.html'));
            res.sendFile(path.join(__dirname, '../../connect-client/build', 'index.html'));
        });
        // Serve static files in the public folder
        this.app.use(express.static(path.join(__dirname, '../public')));
    }
    async boot() {
        await this.lbApp.boot();
    }
    async start() {
        const port = this.lbApp.restServer.config.port || 3000;
        const host = this.lbApp.restServer.config.host || '127.0.0.1';
        this.server = this.app.listen(port, host);
        await p_event_1.default(this.server, 'listening');
    }
    // For testing purposes
    async stop() {
        if (!this.server)
            return;
        this.server.close();
        await p_event_1.default(this.server, 'close');
    }
}
exports.ExpressServer = ExpressServer;
//# sourceMappingURL=server.js.map