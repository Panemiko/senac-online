import { styled } from '@styles/stitches.config'

export default styled('input', {
    paddingX: '$7',
    paddingY: '$5',
    border: 'none',
    background: '$backgroundDark',
    color: '$text',
    outline: 'none',
    borderRadius: '$3',

    '&::placeholder': {
        color: '$placeholder',
    },

    variants: {
        size: {
            full: {
                width: 'stretch',
            },
        },
    },

    defaultVariants: {
        size: 'full',
    },
})
