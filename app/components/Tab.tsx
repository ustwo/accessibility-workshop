import { useState } from 'react';

import tabCssUrl from '../styles/tab.css?url';

import { Button } from './Button';

export const links = [{ rel: 'stylesheet', href: tabCssUrl }];

type TabProps = {
  tabLabels: string[];
  children: JSX.Element[];
};

export const Tab = ({ tabLabels, children }: TabProps) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="tab-container">
      <div className="tab-headers">
        {tabLabels.map((tabLabel, index) => (
          <Button
            variant={activeTab === index ? 'tabActive' : 'tab'}
            key={index}
            onClick={() => setActiveTab(index)}
          >
            {tabLabel}
          </Button>
        ))}
      </div>
      {children[activeTab]}
    </div>
  );
};
