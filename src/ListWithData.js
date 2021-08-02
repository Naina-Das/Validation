import { useContext } from 'react';
import { WebsiteContext } from './providers/websiteProvider';
import moment from 'moment'
import './css/list.css';


export const ListWithLoading = (props) => {
  const context = useContext(WebsiteContext);
  const data = context.data || [];
  const getTime = (date) => {
    const dateTimeAgo = moment(new Date(date)).fromNow();
    return dateTimeAgo;
  }

  const getClassName = (status) => {
    return status;
  }

  return (
    <>
    {data.map((d, index) => {
        return (<div key={index}>
          <div className="list" onClick={() => props.refreshParticularData(index)}>
            <div className="name">
              <div className="text">
                {d.title}
              </div>
              <div className="link">
                {d.url}
              </div>
            </div>
            <div className="action-container">
              <div className="time">
                Last checked: {getTime(d.time)}
              </div>
              <div className="btn">
                <button type="button" className={getClassName(d.status)}>{d.status}</button>
              </div>
            </div>
          </div>
          <hr />
        </div>)
      })}
    </>
  )
}