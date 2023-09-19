import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { tabViewsSkillsEducation } from '../constants';
import 'react-tabs/style/react-tabs.css'; // Import styles (you may need to adjust the path)

const SkillsTab = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabSelect = (index) => {
    setSelectedTab(index);
  };

  return (
    <div>
      <Tabs selectedIndex={selectedTab} onSelect={handleTabSelect}>
        <TabList className={`p-3 space-x-4 text-white flex flex-row items-center`}>
          {tabViewsSkillsEducation.map((skills) => (
            <Tab key={skills.id}>{skills.title}</Tab>
          ))}
        </TabList>

        <div className='m-5 border border-white p-5 rounded-xl text-white'>
          {tabViewsSkillsEducation.map((skills) => (
            <TabPanel key={skills.id}>
              <ul>
                {skills.skills && skills.skills.map((skill, skillIndex) => (
                  <li key={skillIndex}>{skill}</li>
                ))}
              </ul>
            </TabPanel>
          ))}
        </div>
      </Tabs>
    </div>
  );
};

export default SkillsTab;



