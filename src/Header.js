import { useContext } from 'react';
import './css/header.css';
import { WebsiteContext } from './providers/websiteProvider';

export const Header = () => {
  const context = useContext(WebsiteContext);
  console.log('context', context);
  return (
    <div className="header-container">
      <div className="tracking">
        <div className="title">Live Website Tracking</div>
        <div className="stats">Currently Tracking {context.data.length} Websites</div>
      </div>
    </div>
  )
}