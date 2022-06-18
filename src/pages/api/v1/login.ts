import type { NextApiRequest, NextApiResponse } from 'next'

export default async function LoginController(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') return res.status(405).end()
}
