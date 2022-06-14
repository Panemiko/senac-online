import { globalCss } from './stitches.config'

export default globalCss({
    '*': {
        padding: 0,
        margin: 0,
        boxSizing: 'border-box',
        fontFamily: '"Roboto", sans-serif',
        color: '$main11',
        '&::selection': {
            color: '$main12',
            background: '$primary5',
        },
    },
    'html,body': {
        background: '$main1',
    },
})
