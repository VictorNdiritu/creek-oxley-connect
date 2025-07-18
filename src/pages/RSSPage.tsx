
import React, { useEffect } from 'react';
import { generateRSSFeed } from '@/components/RSSFeed';

const RSSPage: React.FC = () => {
  useEffect(() => {
    // Set the content type to XML for RSS feed
    const rssContent = generateRSSFeed();
    
    // Create a blob with the RSS content
    const blob = new Blob([rssContent], { type: 'application/rss+xml' });
    const url = URL.createObjectURL(blob);
    
    // Replace the current page content with RSS XML
    document.open();
    document.write(rssContent);
    document.close();
    
    // Set proper content type header (if possible in client-side)
    if (document.head) {
      const metaContentType = document.createElement('meta');
      metaContentType.httpEquiv = 'Content-Type';
      metaContentType.content = 'application/rss+xml; charset=utf-8';
      document.head.appendChild(metaContentType);
    }
    
    return () => {
      URL.revokeObjectURL(url);
    };
  }, []);

  return (
    <div style={{ display: 'none' }}>
      RSS Feed Loading...
    </div>
  );
};

export default RSSPage;
