import { styled } from '@styles/stitches.config'

export default styled('h1', {
    fontWeight: '$normal',

    variants: {
        variant: {
            primary: {
                fontSize: '$4',
                color: '$title',
            },
            secondary: {
                fontSize: '$3',
                color: '$support',
            },
            tertiary: {
                fontSize: '$2',
                color: '$support',
            },
        },
    },

    defaultVariants: {
        variant: 'primary',
    },
})
