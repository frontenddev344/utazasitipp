import React from "react";
import { Data2 } from "./Data2";
import { Grid, Typography } from "@mui/material";
import { ZikZaksecWrapper } from "./style";

function ContentSec() {
    return (
        <ZikZaksecWrapper>
            {Data2?.map((item, index) => (
                <Grid key={index} container spacing={3} alignItems="center" className="content-wraper">
                    <Grid xs={8} className="img_bar">
                        <img src={item?.secImg} alt="img" />
                    </Grid>
                    <Grid className="text-wrapper" >
                        <Typography>{item?.text}</Typography>
                    </Grid>

                </Grid>
            ))}
        </ZikZaksecWrapper>
    );
}

export default ContentSec;
