import { useRef, useState } from 'react';
import { LinksFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';

import { Button } from '../components/Button';
import dashboardStylesHref from '../styles/dashboard.css?url';
import { Mute, Unmute } from '../icons';
import { Title } from '../components/Title';
import { Message, links as messageLink } from '../components/Message';
import { messages } from '../constants/messages';
import { Status, links as statusLink } from '../components/Status';
import { Card } from '../components/Card';
import { historyStatistics, historyTable } from '../constants/statistics';
import { DonutChartV1 } from '../components/DonutChart';
import { Carousel, links as carouselLink } from '../components/Carousel';
import { carouselItems } from '../constants/history';
import { Tab, links as tabLink } from '../components/Tab';
import { tabs } from '../constants/appointments';

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: dashboardStylesHref },
    ...messageLink,
    ...statusLink,
    ...carouselLink,
    ...tabLink,
  ];
};

export default function Dashboard() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };

  return (
    <div>
      <div className="title">
        <h1>Hello, Mary</h1>
        <Button variant="default" size="large" aria-label='Book Appointment'>
          <span>Book Appointment</span>
        </Button>
      </div>
      <div className="dashboard-content">
        <div className="assigned-gp">
          <Title variant={'medium'} title="Your assigned GP" />
          <div>
            <div className="video-container">
              <div>
                <video 
                  ref={videoRef} 
                  autoPlay 
                  muted 
                  width="100%" 
                  loop
                  className="motion-video"
                >
                  <source src="../../drVideo.mp4" />
                  <track kind="captions" />
                </video>
                <img 
                  src="../../drAppointment1.png" 
                  alt="Dr. Vega portrait" 
                  width="100%" 
                  className="reduced-motion-image" 
                />
                <Button
                  variant="clean"
                  className="mute-button motion-content"
                  onClick={toggleMute}
                >
                  {isMuted ? <Unmute /> : <Mute />}
                </Button>
              </div>
              <Title variant="large" title="Dr. Vega" />
              <Status variant="active" />
            </div>
            <article className="messages-container">
              <header>
                <h3>Your messages</h3>
                <Button variant="default" size="medium">
                  New Message
                </Button>
              </header>
              <ul>
                {messages.map(({ id, title, message, date }) => (
                  <Message
                    key={id}
                    title={title}
                    message={message}
                    date={date}
                  />
                ))}
              </ul>
            </article>
          </div>
        </div>
        <div className="history">
          <Title variant={'medium'} title="Your History" />
          <div className="statistics">
            {historyStatistics.map(({ title, value, url }) => (
              <Card key={title} variant="default">
                <>
                  <p className="card-title">{title}</p>
                  <div className="card-value">
                    <p>{value}</p>
                    {url && <Link to={url} aria-label={`See all ${title}`}>See all</Link>}
                  </div>
                </>
              </Card>
            ))}
          </div>
          <div className="statistics">
            <Card variant="default">
              <>
                <div className="table-header">
                  <p className="card-title">Billing</p>
                  <Link to="/billing">See all</Link>
                </div>
                {historyTable.map(({ date, name, price }) => (
                  <div key={date} className="table-row">
                    <p>{date}</p>
                    <p>{name}</p>
                    <p>{price}</p>
                  </div>
                ))}
              </>
            </Card>
            <Card variant="default">
              <div className="chart">
                <p className="card-title">Specialties</p>
                <div>
                  <DonutChartV1 />
                </div>
              </div>
            </Card>
          </div>
        </div>
        <div className="specialties">
          <div>
            <Title variant={'medium'} title="Your History" />
            <Link to="/medical-specialties">See all</Link>
          </div>
          <Carousel items={carouselItems} interval={4000} />
        </div>
        <div className="appointments">
          <div>
            <Title variant={'medium'} title="Upcoming appointments" />
            <Link to="/appointments" aria-label="See all appointments">See allsdfsdfsdf</Link>
          </div>
          <Tab tabLabels={tabs.map((tab) => tab.label)}>
            {tabs.map((tab, tabIndex) => (
              <div className="tab-content" key={tabIndex}>
                {tab.data.map((item, itemIndex) => (
                  <Card key={itemIndex} variant="tab">
                    <>
                      <div className="tab-appointments-data">
                        <p>{item.drName}</p>
                        <p>{item.date}</p>
                        <p>{item.specialty}</p>
                      </div>
                      <div className="tab-appointments-action">
                        <div>
                          <p>{item.price}</p>
                          <div>
                            <Button variant="clean">Edit</Button>
                            <Button variant="clean">Cancel</Button>
                          </div>
                        </div>
                        <img
                          src={item.drImage}
                          alt={`${item.drName}'s profile`}
                          className="round-image"
                        />
                      </div>
                    </>
                  </Card>
                ))}
              </div>
            ))}
          </Tab>
        </div>
      </div>
    </div>
  );
}
