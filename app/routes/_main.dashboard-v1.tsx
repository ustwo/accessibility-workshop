import { useRef, useState } from 'react';

import { LinksFunction } from '@remix-run/node';

import { Button } from '../components/Button';
import dashboardStylesHref from '../styles/dashboard.css?url';
import { Mute, Unmute } from '../icons';
import { Title } from '../components/Title';
import { Message, links as messageLink } from '../components/Message';
import { messages } from '../constants/messages';
import { Status, links as statusLink } from '../components/Status';

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: dashboardStylesHref },
    ...messageLink,
    ...statusLink,
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
        <Button variant="default" size="large">
          Book Appointment
        </Button>
      </div>
      <div className="dashboard-content">
        <div className="assigned-gp">
          <Title variant={'medium'} title="Your assigned GP" />
          <div>
            <div className="video-container">
              <div>
                <video ref={videoRef} autoPlay muted width="100%" loop>
                  <source src="../../drVideo.mp4" />
                  <track kind="captions" />
                </video>
                <Button
                  variant="clean"
                  className="mute-button"
                  onClick={toggleMute}
                >
                  {isMuted ? <Unmute /> : <Mute />}
                </Button>
              </div>
              <Title variant="large" title="Dr. Vega" />
              <Status variant="active" />
            </div>
            <div className="messages-container">
              <div>
                <h3>Your messages</h3>
                <Button variant="default" size="medium">
                  New Message
                </Button>
              </div>
              <div>
                {messages.map(({ id, title, message, date }) => (
                  <Message
                    key={id}
                    title={title}
                    message={message}
                    date={date}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
