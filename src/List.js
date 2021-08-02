import { useContext, useEffect, useState } from 'react';
import './css/list.css';
import { WebsiteContext } from './providers/websiteProvider';

import { getWebsiteName, getWebsiteTitleResonse, setParticularWebsitName } from './utils';
import { isLoading } from './HOC/isLoading';
import { ListWithLoading } from './ListWithData';
const WebsiteListWithLoading = isLoading(ListWithLoading);
export const List = (props) => {
  const [loading, setLoading] = useState(false);
  const context = useContext(WebsiteContext);
  console.log(context);

  const refreshParticularData = async(index) => {
    setLoading(true);
    const websites = getWebsiteName();
    const data = websites[index];
    const result = await getWebsiteTitleResonse(data.url);
    setParticularWebsitName(result, index);
    context.setData(getWebsiteName);
    setLoading(false);
  }

  const fetchAPI = async() => {
    setLoading(true);
    const websites = getWebsiteName();
    let result = [];
    for( let website of websites) {
      result.push(getWebsiteTitleResonse(website.url));
    }
    const resultData = await Promise.all(result);
    return resultData;
  }

  useEffect(() => {
    const timer = setInterval(
      async() => {
        let result =  await fetchAPI();
        localStorage.clear('website');
        localStorage.setItem('website', JSON.stringify(result));
        context.setData(getWebsiteName);
        context.setLoad(2);
        setLoading(false);
      },
      context.initialLoad === 1 ? 0: 50000
    );
    return () => clearInterval(timer);
  });

  
  return (
    <div className="list-container">
      <div className="title">
        Websites
      </div>
      <WebsiteListWithLoading isLoading = {loading} refreshParticularData = {refreshParticularData}></WebsiteListWithLoading>
    </div>
  )
}

