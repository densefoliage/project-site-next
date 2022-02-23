import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";

import { useRouter } from "next/router";

import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import CallMadeIcon from '@mui/icons-material/CallMade';

const NavigationBar = ({ navLinks }) => {
  const router = useRouter()

  const getIcon = (title) => {
    switch (title.toLowerCase()) {
      case "projects":
        return (<HomeIcon />);
      case "about":
        return (<InfoIcon />);
      case "contact":
        return (<EmojiEmotionsIcon />);
      default:
        return (<CallMadeIcon />);
    }
  };

  const handleClick = (e, path) => {
    e.preventDefault()
    path = path ? path : '/';
    router.push(path);
  };

  return (
    <List>
      {
        navLinks.map(({ title, path }, i) => {
          return (
            <ListItem
              button
              key={`${i}-${title}`}
              onClick={(e) => handleClick(e, path)}
              aria-label={title}
            >
              <ListItemIcon>
                {getIcon(title)}
              </ListItemIcon>
              <ListItemText
                primary={title}
                sx={{
                  textTransform: "capitalize"
                }}
              />
            </ListItem>
          )
        })
      }
    </List>
  );
};

export default NavigationBar;