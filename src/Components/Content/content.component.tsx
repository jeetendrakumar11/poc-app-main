import React from 'react';
import styles from './Content.module.css';
import Chart from '../Chart/chart.component';
import CustomSeparator from '../NavBar/navBar.component';
import { Box, Container, Grid } from '@material-ui/core';
import NativeSelectDemo from './selectBox.component';
import axios from 'axios';
import TableContent from './TabContent';

export const ContentComponent = () => {
    const [serverData, setServerData] = React.useState([]);

    const getData = async() => {
        const resp = await fetch('http://localhost:8082/api/pocdatas');
        const data = await resp.json();
        return data;
    };

  React.useEffect ( () => {
    // const response = axios.get('http://localhost:8082/api/pocdatas')
    // .then(res => {
    //   return res.data;
    // })
    // .catch(err =>{
    //   console.log('Error from ShowBookList');
    // })

    if(serverData.length === 0 ){  
        const data = getData();
        console.log(data);
        data.then(result =>  setServerData(result));
        // setServerData(data)
       }
  },[]);


  console.log('serverData',serverData);


    const { tables, contentContainer, netFlows } = styles

    return (
        serverData.length > 0 ? (
            <Box className={contentContainer}>
            <Grid container spacing={2}>
                <Grid item xs={1}>
                </Grid>
                <Grid item xs={7}>
                    <p className={netFlows}>Net Flows</p>
                    <h3>{CustomSeparator()}</h3>
                </Grid>
                <Grid item xs={4}>
                    {NativeSelectDemo()}
                </Grid>
                <Grid item xs={12}  >
                    <div className="container" >
                        <div className="card">
                            <div className="card-body">
                                <Chart />
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12}  >
                    <div className="container" >
                        <div className="card">
                            <div className="card-body">
                               { <TableContent data= {serverData} />}
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Box>
    )
     : <></>
    )  
}

