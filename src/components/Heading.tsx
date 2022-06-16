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
                color: '$placeholder',
            },
            tertiary: {
                fontSize: '$2',
                color: '$placeholder',
            },
        },
    },

    defaultVariants: {
        variant: 'primary',
    },
})
