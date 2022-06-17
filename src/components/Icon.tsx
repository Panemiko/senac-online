import { styled } from '@styles/stitches.config'

export default styled('a', {
    '& svg': {
        fill: '$text',
        transition: '.2s',
    },

    '&:hover svg': {
        fill: '$title',
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
