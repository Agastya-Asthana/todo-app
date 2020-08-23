import React from 'react'
import { List, ListItem, ListItemText, ListItemAvatar } from "@material-ui/core";

function todo(props) {
    return (
        <List>
            <ListItem>
                <ListItemAvatar></ListItemAvatar>
                <ListItemText primary={props.todo} secondary="Dummy deadline ⏰" />
            </ListItem>
        </List>
    )
}

export default todo
