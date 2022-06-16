import { styled } from '@styles/stitches.config'

export default styled('h1', {
    color: '$title',
    fontWeight: '$medium',

    variants: {
        variant: {
            primary: {
                fontSize: '$6',
            },
            secondary: {
                fontSize: '$5',
            },
            tertiary: {
                fontSize: '$4',
            },
            quaternary: {
                fontSize: '$3',
            },
            quinary: {
                fontSize: '$2',
            },
        },
    },

    defaultVariants: {
        variant: 'primary',
    },
})
