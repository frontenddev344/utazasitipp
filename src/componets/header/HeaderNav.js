  import React, { useState } from "react";
  import { Box } from "@mui/material";
  import { NavLink } from "react-router-dom";
  import { HeaderStyle } from "./style";
  import DehazeIcon from '@mui/icons-material/Dehaze';

  function HeaderNav() {


    const [showMediaIcons, setShowMediaIcons] = useState(false);

    return (
      <>
        <HeaderStyle >
          <Box className={showMediaIcons ? "headerNav mobile-menu-link" : "headerNav"} >
            <ul className="headerNav ">
              <li>
                <NavLink to='/'>Otthon</NavLink>
              </li>
              <li>
                <NavLink >Szállodáks</NavLink>
              </li>
              <li>
                <NavLink >Éttermek</NavLink>
              </li>
              <li>
                <NavLink >látnivalók Szórakozás</NavLink>
              </li>

            </ul>
            <Box className="hamburger-Icon">
              <a onClick={() => setShowMediaIcons(!showMediaIcons)}>
                <DehazeIcon />
              </a>
            </Box>
          </Box>
        </HeaderStyle>
      </>
    );
  }
  export default HeaderNav;