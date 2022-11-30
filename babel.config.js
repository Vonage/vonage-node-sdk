module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current',
                },
            },
        ],
        '@babel/preset-typescript',
    ],

    plugins: [
        [
            'module-resolver',
            {
                alias: {
                    '^@vonage/jwt': './packages/jwt/lib',
                },
            },
        ],
    ],
};
