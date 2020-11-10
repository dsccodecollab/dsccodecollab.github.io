import React, { useState } from 'react'
import Login from './Login'
import Register from './Register'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index } = props

  return (
    <div hidden={value !== index}>
      <Box p={3}>
        <Typography>{children}</Typography>
      </Box>
    </div>
  )
}

const Authenticate = () => {
  const [value, setValue] = useState(0)

  function handleChange (event: React.ChangeEvent<{}>, newValue: number) {
    setValue(newValue)
  }
  return (
    <div className="container my-5 py-5 px-5" style={{ zIndex: -1 }}>
      <AppBar
        className="shadow"
        position="static"
        style={{ backgroundColor: '#53e0f3', color: 'black' }}
      >
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Register" />
          <Tab label="Login" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Register />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Login />
      </TabPanel>
    </div>
  )
}

export default Authenticate
