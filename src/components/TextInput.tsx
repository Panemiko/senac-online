import { styled } from '@styles/stitches.config'

export default styled('input', {
    paddingX: '$7',
    paddingY: '$5',
    border: 'none',
    background: '$backgroundDark',
    borderBottom: '1px solid',
    borderBottomColor: '$backgroundDark',
    color: '$text',
    outline: 'none',
    borderRadius: '$3',
    transition: '.2s',

    '&:focus': {
        borderBottomColor: '$accentDark',
        borderRadius: '$1',
    },

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
