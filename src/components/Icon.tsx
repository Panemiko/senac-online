import { styled } from '@styles/stitches.config'

export default styled('a', {
    '& svg': {
        fill: '$textMedium',
        transition: '$regular',
    },

    '&:hover svg': {
        fill: '$textLow',
    },

    variants: {
        size: {
            medium: {
                '& svg': {
                    height: '$8',
                    width: '$8',
                },
            },
        },
    },

    defaultVariants: {
        size: 'medium',
    },
})
