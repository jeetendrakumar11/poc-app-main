import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

export default function NativeSelectDemo() {
    return (
        <Box style={{ width: '250px', marginLeft: '85px'}} sx={{ minWidth: 100 }}>
            <FormControl fullWidth >
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Advisor Id
                </InputLabel>
                <NativeSelect
                    defaultValue={10}
                    inputProps={{
                        name: 'advisor',
                        id: 'uncontrolled-native',
                    }}
                >
                    <option value={10}>All</option>
                    <option value={20}>Advisor 1</option>
                    <option value={30}>Advisor 2</option>
                </NativeSelect>
            </FormControl>
        </Box>
    );
}
