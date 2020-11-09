import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import '../styles/topic.css'

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

function TabPanel (props: TabPanelProps) {
  const { children, value, index } = props

  return (
    <div hidden={value !== index}>
      <Box p={3}>
        <Typography>{children}</Typography>
      </Box>
    </div>
  )
}

export default function Topic () {
  const [value, setValue] = useState(0)

  function handleChange (event: React.ChangeEvent<{}>, newValue: number) {
    setValue(newValue)
  }

  const example = {
    topic: 'Topic Name',
    contestLinks: [
      'Links to Contests',
      'Links to Contests',
      'Links to Contests',
      'Links to Contests'
    ],
    resourcesLinks: [
      'Links to Resouces',
      'Links to Resouces',
      'Links to Resouces',
      'Links to Resouces'
    ],
    videoLinks: [
      'https://www.youtube.com/embed/c_wUBeeJV9U',
      'https://www.youtube.com/embed/KELqVT7hjeE'
    ]
  }

  return (
    <div className="container my-5 py-5 px-5">
      <div className="resources-tab">
        <h1
          className="topic"
          style={{
            textAlign: 'center',
            backgroundColor: '#333456',
            margin: '0px 0',
            padding: '20px',
            color: 'white',
            fontFamily: 'sans-serif'
          }}
        >
          {example.topic}
        </h1>
        <AppBar
          className="sub-topic"
          position="static"
          style={{ backgroundColor: '#9ad3bc', color: 'black' }}
        >
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Contests" />
            <Tab label="Resources" />
            <Tab label="Videos" />
          </Tabs>
        </AppBar>
      </div>
      <TabPanel value={value} index={0}>
        {example.contestLinks.map((element, i) => {
          return <p key={i}>{element}</p>
        })}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {example.resourcesLinks.map((element, i) => {
          return <p key={i}>{element}</p>
        })}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {example.videoLinks.map((e, i) => {
          return (
            <iframe
              key={i}
              style={{
                display: 'inline-block',
                margin: '5px'
              }}
              title="Video"
              height="300"
              src={e}
            />
          )
        })}
      </TabPanel>
    </div>
  )
}
