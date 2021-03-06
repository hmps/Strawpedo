import gulp from 'gulp';

class Pipeline {
    create(src) {
        if (!src) { throw new Error('All task needs a src parameter.'); }

        this.pipeline = gulp.src(src);

        return this;
    }


    addPipe(params = {}) {
        if ( params.if || params.hasOwnProperty('if') === false ) {
            this.pipeline = this.pipeline.pipe(params.fn(params.opts));
        }

        return this;
    }
}

export default new Pipeline();
