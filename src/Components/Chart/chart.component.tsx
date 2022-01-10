import { useState } from 'react';
import CustomHighcharts from './highCharts.component';
import { Nav } from 'react-bootstrap';
import styles from './chart.module.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import DownloadIcon from '@mui/icons-material/Download';
import OpenWithIcon from '@mui/icons-material/OpenWith';

const Chart = () => {

    const [startYear, setStartYear] = useState(2012);
    const [endYear, setEndYear] = useState(2021);

    return (
        <div>
            <div className={styles.chartContainer} >

                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: 'solid 2px' }}>
                    <div className={styles.heading} >AUM & Net Flows</div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                            <DownloadIcon fontSize= "small" style={{color: '#0b64b4'}} />
                        </div>
                        <div>
                        < OpenWithIcon fontSize= "small" style={{color: '#0b64b4'}} />
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.7rem' }}>
                    <div style={{ marginBottom: '20px' }}>
                        <Nav
                            activeKey="/home"
                            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                        >
                            <Nav.Item>
                                <Nav.Link href="/home" disabled>AUM</Nav.Link>
                            </Nav.Item>
                            <Nav.Item >
                                <Nav.Link style={{ borderBottom: 'solid 2px', color: '#0864b4' }} eventKey="link-1">Net Flows</Nav.Link>
                            </Nav.Item>

                        </Nav>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-around', width: '20%' }} >
                        <div>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Start Date</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={startYear}
                                    label="start year"
                                    onChange={(e) => setStartYear(+e.target.value)}
                                >
                                    <MenuItem value={2011}>2011</MenuItem><br />
                                    <MenuItem value={2012}>2012</MenuItem>

                                </Select>
                            </FormControl>
                        </div>
                        <div>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">End Date</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={endYear}
                                    label="end year"
                                    onChange={(e) => setEndYear(+e.target.value)}

                                >
                                    <MenuItem value={2020}>2020</MenuItem><br />
                                    <MenuItem value={2021}>2021</MenuItem>

                                </Select>
                            </FormControl>
                        </div>
                    </div>
                </div>
                <CustomHighcharts startYear={startYear} endYear={endYear} />
            </div>
        </div>
    );

}

export default Chart;