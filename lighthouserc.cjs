module.exports = {
    ci: {
        collect: {
            url: ['http://localhost:4173/'],
            startServerCommand: 'npm run preview',
            startServerReadyPattern: 'Local',
            numberOfRuns: 1,
        },
        assert: {
            assertions: {
                'categories:pwa': ['warn', {minScore: 0.9}],
                'categories:performance': ['warn', {minScore: 0.8}],
                'categories:accessibility': ['warn', {minScore: 0.9}],
            },
        },
        upload: {
            target: 'temporary-public-storage',
        },
    },
};
