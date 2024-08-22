import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const filePath = path.join(process.cwd(), 'server', 'db.json');  // Đảm bảo đường dẫn đến tệp JSON đúng
  const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  const newsItem = jsonData.find((item: { id: string }) => item.id === id);

  if (newsItem) {
    res.status(200).json(newsItem);
  } else {
    res.status(404).json({ message: 'News not found' });
  }
}
