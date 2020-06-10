// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { IncomingMessage, ServerResponse } from "http"

export default (req: IncomingMessage, res: ServerResponse & {json: (json: any) => void}) => {
  res.statusCode = 200
  res.setHeader('Cache-Control', 'max-age=3600')
  res.json({ name: 'John Doe' })
}
