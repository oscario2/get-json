const esbuild = require("esbuild");

esbuild
    .build({
        entryPoints: ['./index.ts'],
        outfile: './build/index.js',
        minify: false,
        sourcemap: true,
        bundle: true,
        platform: 'node',
        watch: {
            onRebuild(error, result) {
                if (error) {
                    console.error('watch build failed:', error);
                } else {
                    console.log(new Date().toUTCString(), result);
                }
            }
        }
    })
    .then((bundle, error) => {
        if (error) {
            throw new Error(error);
        }
        if (bundle && bundle.warnings && bundle.warnings.length > 0) {
            console.log(bundle);
        } else {
            console.log('[Bundled]:', new Date());
        }
    });
