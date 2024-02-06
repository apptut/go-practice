const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.jsx',
})

// output config
module.exports = withNextra({
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true
    },
    basePath: "/go/fill-hole",
})

// If you have other Next.js configurations, you can pass them as the parameter:
// module.exports = withNextra({ /* other next.js config */ })
