module.exports = {
    apps: [{
        name: 'sc_external',
        script: './index.js',
        instances: 0,
        exec_mode: 'cluster'
    }]
};