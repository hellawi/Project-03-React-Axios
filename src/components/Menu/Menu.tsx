import * as React from 'react'
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText  from "@mui/material/ListItemText";
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch';
import ThemeButtons from '../Theme/ThemeButtons';
import './Menu.scss'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ListItemIcon } from '@mui/material';
import { Contacts, House, Lan, Newspaper, People } from '@mui/icons-material';

type Anchor = "left";

export default function SwipeableTemporaryDrawer() {
  const { t } = useTranslation()
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event &&
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: Anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[<ThemeButtons/>].map((text, index) => (
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {[<Link to="/" className='a'>{t('home')}</Link>, <Link to="/news" className='a'>{t('news')}</Link>, <a href='#rowh' className='a'>{t('ourp')}</a>, <a href='#footer' className='a'>{t('contacts')}</a>].map((text, index) => (
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {(["left"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <label onClick={toggleDrawer(anchor, true)} className='label'>
            <span></span>
          </label>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
          <p className='menu-heading'>{t('menu')}</p>
          {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}