export const setWebsitName = (data) => {
  let websites = getWebsite();
  websites.push(data);
  localStorage.setItem('website', JSON.stringify(websites));
}

export const setParticularWebsitName = (data, index) => {
  let websites = getWebsite();
  websites[index] = data;
  localStorage.setItem('website', JSON.stringify(websites));
}

function getWebsite() {
  const websites = localStorage.getItem('website');
  return JSON.parse(websites) || [];
}

export const getWebsiteName = () => {
  return getWebsite();
}

export const getWebsiteTitleResonse = async(webUrl, time) => {
     try {
        let response = await fetch(webUrl);
        let status = response.status === 200 ? 'Live' : 'Error';
        let html = await response.text();
        const doc = new DOMParser().parseFromString(html, "text/html");
        const title = doc.querySelectorAll('title')[0];
        const data = { title: title.innerText, url: webUrl, status: status || 'FETCHING', time: time || Date.now()};
        return data;
     } catch(error) {
        const data = { title: "API Failed", url: webUrl, status: 'Error', time: time || Date.now()};
        return data;
     }
}