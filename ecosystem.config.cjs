module.exports = {
    apps: [{
        name: 'jungsan',
        script: 'node_modules/.bin/ts-node',
        args: '-P tsconfig.json server/server.ts',
    }]
};
