// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { IncomingMessage, ServerResponse } from "http"

export default function Hello(req: IncomingMessage, res: ServerResponse & {json: (json: any) => void}) {
  console.log('Hello')
  res.statusCode = 200
  res.setHeader('Cache-Control', 'max-age=3600')
  res.json({ name: 'John Doe' })
}
