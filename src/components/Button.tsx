import { styled } from '@styles/stitches.config'

export default styled('button', {
    paddingY: '$5',
    paddingX: '$7',
    border: 'none',
    borderRadius: '$3',
    color: '$textMedium',
    background: '$accentLight',
    transition: '$regular',

    '&:hover': {
        color: '$textLow',
        background: '$accentMedium',
        cursor: 'pointer',
    },

    '&:active': {
        background: '$accentDark',
    },
})
