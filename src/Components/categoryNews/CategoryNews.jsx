import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCards from '../NewsCard/NewsCards';

const CategoryNews = () => {
  const { catId } = useParams();
  const id = parseInt(catId);

  const data = useLoaderData();
  const [categoryNews, setCategoryNews] = useState([]);
  // console.log(categoryNews);

  // console.log(id, data);
  useEffect(() => {
    if (id === 0) {
      setCategoryNews(data);
      return;
    } else if (id === 1) {
      const filterNew = data.filter(news => news.others.is_today_pick === true);
      setCategoryNews(filterNew);
      return;
    } else {
      const filterNew = data.filter(news => news.category_id === id);
      setCategoryNews(filterNew);
    }
  }, [data, id]);

  return (
    <div className=" grid grid-cols-1 gap-5">
      {categoryNews.map(news => (
        <NewsCards key={news.id} news={news}></NewsCards>
      ))}
    </div>
  );
};

export default CategoryNews;
