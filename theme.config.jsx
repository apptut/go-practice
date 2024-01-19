export default {
    logo: <span style={{ fontWeight: "500", fontSize: '24px' }}>Go填坑指南</span>,
    project: {
        link: 'https://github.com/apptut/go-practice'
    },
    editLink: {
      text: null
    },
    feedback: {
        content: null
    },
    useNextSeoProps() {
        return {
            titleTemplate: '%s – Go 填坑指南'
        }
    },
    sidebar: {
        toggleButton: true
    },
    toc: {
        title: '大纲',
        backToTop: true
    }
}
