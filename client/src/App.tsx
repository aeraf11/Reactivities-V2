import {List, ListItem, ListItemText, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react"

function App() {
  // const activities: never[];
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    getData();

    async function getData() {
      const response = await axios.get<Activity[]>(
        `http://localhost:5280/api/activities`
      );
      const data = await response.data;

      setActivities(data);
    }
  }, []);

// const title = "Welcome to Reactivities!"
  return (
    <>
      <Typography variant="h3" >Reactivities</Typography>
      <List>
        {activities && activities.map((a) => (
          <ListItem key={a.id}>
            <ListItemText>{a.title}</ListItemText>
            
            </ListItem>
        ))}
      </List>
    </>
  )
}

export default App
