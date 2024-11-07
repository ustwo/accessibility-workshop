import messageCssUrl from '../styles/message.css?url';

export const links = [{ rel: 'stylesheet', href: messageCssUrl }];

type MessageProps = {
  title: string;
  message: string;
  date: string;
};

export const Message = ({ title, message, date }: MessageProps) => {
  return (
    <div className="message">
      <div>
        <h4>{title}</h4>
        <p>{date}</p>
      </div>
      <div>
        <p>{message}</p>
      </div>
    </div>
  );
};
