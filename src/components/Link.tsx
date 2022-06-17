import Link from 'next/link'
import { styled } from '@styles/stitches.config'

export default styled(Link, {
    transition: '$regular',
    '& a': {
        color: '$textLight',
        textDecoration: 'none',
    },

    '& a:hover': {
        color: '$textMedium',
        textDecoration: 'none',
    },

    '& a:active': {
        color: '$textLow',
    },
})
