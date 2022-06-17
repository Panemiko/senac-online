import { styled } from '@styles/stitches.config'

export default styled('a', {
    color: '$textLight',
    transition: '$fast',
    textDecoration: 'none',

    '&:hover': {
        color: '$textMedium',
        textDecoration: 'none',
        cursor: 'pointer',
    },

    '&:active': {
        color: '$textLow',
    },
})
