// http:localhost:3000/api/revalidate?path=/&secret=431846119cf456472d6c7d9c64bb34340eb22fff90171aa024

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.query.secret !== process.env.LOCAL_API_KEY) {
        return res.status(401).json({ message: "Invalid API key" })
    }

    const path = req.query.path as string
    await res.revalidate(path)
    return res.json({ message: "Success", revalidated: true })
}
