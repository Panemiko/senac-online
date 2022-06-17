import { globalCss } from './stitches.config'

export default globalCss({
    '*': {
        padding: 0,
        margin: 0,
        boxSizing: 'border-box',
        fontFamily: '"Roboto", sans-serif',
        color: '$text',
        '&::selection': {
            color: '$title',
            background: '$accentLight',
        },
    },
    'html,body': {
        background: '$backgroundLight',
    },
})
