import React from 'react'

import {
    MenuList
    , MenuHeading
    , MenuItem
    , Select
    , Divider
    , Button
} from '@looker/components'

const Sidebar = (props: any) => {

  return (
    <>
        <MenuList>
            <MenuHeading>Interactivity</MenuHeading>
            <MenuItem><Button>Button Here</Button></MenuItem> 
            <MenuItem>
                <Select
                    options={[
                    { value: 'cheddar', label: 'Cheddar' },
                    { value: 'gouda', label: 'Gouda' },
                    { value: 'swiss', label: 'Swiss' },
                    ]}
                    defaultValue="gouda"
                />
            </MenuItem>
            <MenuItem onClick={() => alert('Hello world!')}>Gouda</MenuItem>

            <Divider/>

            <MenuHeading>Sections</MenuHeading>
            <MenuItem>Page One</MenuItem>
            <MenuItem>Pag Two</MenuItem>
        </MenuList>
    </>
  )
}

export default Sidebar