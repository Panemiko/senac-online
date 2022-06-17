import { styled } from '@styles/stitches.config'

export default styled('h1', {
    fontWeight: '$normal',

    variants: {
        variant: {
            primary: {
                fontSize: '$4',
                color: '$textLow',
            },
            secondary: {
                fontSize: '$3',
                color: '$textLight',
            },
            tertiary: {
                fontSize: '$2',
                color: '$textLight',
            },
        },
    },

    defaultVariants: {
        variant: 'primary',
    },
})
