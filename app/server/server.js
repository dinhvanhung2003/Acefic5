const express = require('express');
const app = express();

// Dữ liệu tin tức (có thể thay thế bằng database hoặc API khác)
const newsData = {
  news: [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet aenean nisi sociis ipsum...",
      url: "http://acefic5.vn/storage/projects/20200219044240-540x360.png",
      time: { day: "25", month: "december" },
      view: "328",
      content: "Far concluded not his something extremity.Want four we face an he gate."
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet aenean nisi sociis ipsum...",
      url: "http://acefic5.vn/storage/projects/20200219044240-540x360.png",
      alt: "Test",
      time: { day: "25", month: "december" },
      view: "328",
      content: "Far concluded not his something extremity.Want four we face an he gate."
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet aenean nisi sociis ipsum...",
      url: "http://acefic5.vn/storage/projects/20200219044240-540x360.png",
      alt: "Test",
      time: { day: "25", month: "december" },
      view: "328",
      content: "Far concluded not his something extremity.Want four we face an he gate."
    }
  ]
};

// Endpoint GET /news/:id để lấy thông tin tin tức dựa trên id
app.get('/news/:id', (req, res) => {
  const { id } = req.params;
  const news = newsData.news.find(news => news.id === parseInt(id));
  if (news) {
    res.json(news);
  } else {
    res.status(404).json({ message: 'News not found' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
