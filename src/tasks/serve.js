import { Task } from '../task';

import browserSync from 'browser-sync';
import args from '../args';

function serveFactory(opts) {
    if ( !opts.hasOwnProperty('browsersync') ) {
        opts.browsersync = Object.assign({}, opts);
    }

    opts.browsersync.open = args.openBrowser;

    return Task.addGulpTask(opts.name || 'serve', done => {
        browserSync(opts.browsersync, done);
    });
}

export { serveFactory as serve };
