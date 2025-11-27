
import React from 'react';

interface BlogPost {
  title: string;
  description: string;
  url: string;
  pubDate: string;
  author: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "Samburu Elephant Lodge Grand Opening: Where Conservation Meets Hospitality",
    description: "The launch of Samburu Elephant Lodge set a new standard in Kenya's hospitality sector. Discover how Creek Oxley's management consulting expertise helped create a sustainable, well-managed eco-tourism venture in one of Kenya's most remarkable ecosystems.",
    url: "https://creekoxley.com/blog/samburu-elephant-lodge-opening",
    pubDate: "Wed, 27 Nov 2025 00:00:00 GMT",
    author: "Creek Oxley Team",
    category: "Portfolio Projects"
  },
  {
    title: "Checklist: What You Should Have Ready Before Handing Over Management",
    description: "A comprehensive checklist for smooth management transitions. Learn what documentation, systems, and information you need ready before handing over business leadership.",
    url: "https://creekoxley.com/blog/handover-management-checklist",
    pubDate: "Sun, 17 Nov 2025 00:00:00 GMT",
    author: "Creek Oxley Team",
    category: "Management Transition"
  },
  {
    title: "From Nairobi to Kigali: 5 Management Consulting Pillars for Mastering Cross-Border Operations in the EAC",
    description: "Learn the five essential management consulting pillars for successful cross-border operations across East Africa. From strategic alignment to data-driven growth, master regional expansion in the EAC.",
    url: "https://creekoxley.com/blog/eac-cross-border-operations",
    pubDate: "Tue, 12 Nov 2025 18:05:12 +0000",
    author: "Creek Oxley Team",
    category: "Regional Business"
  },
  {
    title: "Stop Missing Out: The Cost of Ignoring Global Exhibitions",
    description: "Don't let logistics fears hold you back from global exhibitions. Learn how DMCs can transform your international trade show strategy and why your competitors are already there.",
    url: "https://creekoxley.com/blog/global-exhibitions",
    pubDate: "Tue, 08 Jul 2025 18:05:12 +0000",
    author: "Creek Oxley Team",
    category: "Business Strategy"
  },
  {
    title: "The Remarkable Turnaround of Adidas: A Management Masterclass",
    description: "In 2022, Adidas was dragged into its biggest crisis in decades through no fault of its own. Learn how decisive management actions turned a €58 million loss into a €1.34 billion profit and a 48% stock price increase.",
    url: "https://creekoxley.com/blog/adidas-turnaround",
    pubDate: "Mon, 22 Jul 2024 18:05:12 +0000",
    author: "Creek Oxley Team",
    category: "Crisis Management"
  },
  {
    title: "Resolving Management Problems: Why Leadership Conflicts Can Break — or Build — Your Business",
    description: "At some point in nearly every company's journey, complex management problems emerge. Conflicting visions, leadership deadlocks, or operational growing pains can threaten even the strongest founding teams.",
    url: "https://creekoxley.com/blog/management-problems",
    pubDate: "Mon, 15 Jul 2024 18:05:12 +0000",
    author: "Creek Oxley Team",
    category: "Leadership"
  },
  {
    title: "Choosing Between a Business Name, LLP and Company Formation in Kenya",
    description: "Starting a business in Kenya isn't just about the idea or the market — it's also about structure. The choice between registering a Business Name, setting up a Limited Liability Partnership (LLP), or incorporating a Private Limited Company can have lasting consequences.",
    url: "https://creekoxley.com/blog/business-structure-kenya",
    pubDate: "Mon, 08 Jul 2024 18:05:12 +0000",
    author: "Creek Oxley Team",
    category: "Business Formation"
  }
];

export const generateRSSFeed = (): string => {
  const rssItems = blogPosts.map(post => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.description}]]></description>
      <link>${post.url}</link>
      <guid isPermaLink="true">${post.url}</guid>
      <pubDate>${post.pubDate}</pubDate>
      <author>info@creekoxley.com (${post.author})</author>
      <category>${post.category}</category>
    </item>`).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Creek Oxley Management Insights</title>
    <description>Strategic insights, operational excellence, and industry expertise from Creek Oxley's consulting team.</description>
    <link>https://creekoxley.com</link>
    <atom:link href="https://creekoxley.com/rss.xml" rel="self" type="application/rss+xml"/>
    <language>en-us</language>
    <managingEditor>info@creekoxley.com (Creek Oxley Team)</managingEditor>
    <webMaster>info@creekoxley.com (Creek Oxley Team)</webMaster>
    <copyright>Copyright ${new Date().getFullYear()} Creek Oxley Management Consultant. All rights reserved.</copyright>
    <category>Business Consulting</category>
    <category>Management</category>
    <category>Leadership</category>
    <ttl>1440</ttl>
    <image>
      <url>https://creekoxley.com/lovable-uploads/484943ae-2c20-4228-8536-7081b6c91bbd.png</url>
      <title>Creek Oxley Management Insights</title>
      <link>https://creekoxley.com</link>
      <description>Creek Oxley Logo</description>
      <width>144</width>
      <height>144</height>
    </image>${rssItems}
  </channel>
</rss>`;
};

const RSSFeed: React.FC = () => {
  return null; // This component is used only for RSS generation
};

export default RSSFeed;
