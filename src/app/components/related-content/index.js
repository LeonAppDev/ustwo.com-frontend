import React from 'react';
import { get } from 'lodash';
import WorkItem from 'app/components/work-item';
import BlogPostListItem from 'app/components/blog-post-list-item';

export default ({ content }) => {
  const renderItems = content.map(data => {
    let item;
    if (data.type === 'post') {
      item = <div className="related-content-item" key={data.id}><BlogPostListItem data={data} /></div>;
    } else {
      item = <div className="related-content-item" key={data.id}><WorkItem data={data} /></div>;
    }
    return item;
  });

  return (
    <div className="related-content">
      <div className="wrapper">
        <h2 className="more-juice-title">More Juice</h2>
        <div className="related-content-cards">
          {renderItems}
        </div>
      </div>
    </div>
  );
}
