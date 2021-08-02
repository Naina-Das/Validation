import { useState, useContext, useEffect } from 'react';
import './css/search.css';
import { getWebsiteName, setWebsitName, getWebsiteTitleResonse } from './utils';
import { WebsiteContext } from './providers/websiteProvider';

export const Search = () =>{
  const context = useContext(WebsiteContext);
  const [webUrl, setUrl] = useState('');
  const onChange = (e) => {
    setUrl(e.target.value);
  }
  const handleClick = async() => {
    const data = await getWebsiteTitleResonse(webUrl);
    setWebsitName(data);
    setUrl('');
    context.setData(getWebsiteName);
  }

  return (
    <div className="search-container">
      <div className="search-box">
      <input type="text" className="add-url" onChange={onChange} value={webUrl}></input>
      <button type="button" className="add-btn" onClick = {handleClick}>Add Website</button>
      </div>
    </div>
  )
}