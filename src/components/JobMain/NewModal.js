import React from 'react'
import{Box,Grid,
    FilledInput,
    Select,MenuItem,Dialog,DialogTitle,
    DialogContent,DialogActions,styled,
     Typography, Button,IconButton} from '@mui/material'
import { Close as CloseIcon} from '@mui/icons-material'

const useStyles=styled((theme)=>({
    skillChip:{
        margin:theme.spacing(0.5),
        padding:theme.spacing(0.75),
        fontSize:"14.5px",
        borderRadius:"5px",
        trasition:".3s",
        fontWeight:600,
        border: `1px solid ${theme.palette.secondary.main}`,
        color:theme.palette.secondary.main,
        cursor:"pointer",

        '&:hover':{
            backgoundColor:theme.palette.secondary.main,
            color:"#dd33fa",
            
        }
    },
}))
export default props=> 
{
    const classes=useStyles();
    const skills=[
        "Javascript",
        "React",
        "Node",
        "Vue",
        "Firebase",
        "MongoDB",
        "SQL",
    ];
    return(
        <Dialog open={true} fullWidth>
            <DialogTitle>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                Post Job
                <IconButton>
                    <CloseIcon/>
                </IconButton>
            </Box>
            
            </DialogTitle>
            <DialogContent>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                    
                        <FilledInput placeholder='Job title*' disableUnderline fullWidth/>
                    </Grid>
                    <Grid item xs={6}>
                    <Select fullWidth disableUnderline variant="filled" defaultValue="Full time">
                <MenuItem value="Full time">Full time</MenuItem>
                <MenuItem value="Part time">Part time</MenuItem>
                <MenuItem value="Contract">Contract</MenuItem>
                  </Select>
                        </Grid>
                        <Grid item xs={6}>
                    <FilledInput placeholder='Company name*' disableUnderline fullWidth/>
                    </Grid>
                    <Grid item xs={6}>
                    
                        <FilledInput placeholder='Company URL*' disableUnderline fullWidth/>
                    </Grid>
                    <Grid item xs={6}>
                    <Select fullWidth disableUnderline variant="filled" defaultValue="Remote">
                <MenuItem value="Remote">Remote</MenuItem>
                <MenuItem value="In-office">In-office</MenuItem>
                </Select>
                 </Grid>
                 <Grid item xs={6}>
                    <FilledInput placeholder='Job link*' disableUnderline fullWidth/>
                    </Grid>
                    <Grid item xs={12}>
                    <FilledInput placeholder='Job description*' disableUnderline fullWidth multiline rows={4}/>
                    </Grid>
                </Grid>
                <Box mt={2}>
                    <Typography>Skills</Typography>
                    <Box display="flex">
                        {skills.map((skill)=>(
                            <Box className={classes.skillChip}key={skill}>
                            {skill}
                            </Box>
                            ))}
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <Box color="red"
                 width="100%"
                  display="flex"
                 justifyContent="space-between"
                 alignItems="center"
                 >
                    <Typography variant='caption'>*Required fields</Typography>
                    <Button variant="contained" disableElevation color="primary">Post job</Button>
                </Box>
            </DialogActions>
        </Dialog>
    )
}