import { styled } from '@styles/stitches.config'

export default styled('button', {
    paddingY: '$5',
    paddingX: '$7',
    border: 'none',
    borderRadius: '$3',
    color: '$text',
    background: '$accentLight',

    '&:hover': {
        background: '$accentMedium',
        cursor: 'pointer',
    },

    '&:active': {
        background: '$accentDark',
    },
})
