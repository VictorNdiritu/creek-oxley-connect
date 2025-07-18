
import React from 'react';
import { Rss } from 'lucide-react';

const RSSLink: React.FC = () => {
  return (
    <a 
      href="/rss.xml" 
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-gray-600 hover:text-creekoxley transition-colors"
      title="Subscribe to RSS Feed"
    >
      <Rss className="h-4 w-4" />
      <span className="text-sm">RSS Feed</span>
    </a>
  );
};

export default RSSLink;
