import React from 'react'
import { List, ListItem } from "@material-ui/core"

interface PlayerListProps {

}

function PlayerList (props: PlayerListProps){
    const [items, setItems] = React.useState(["one","two"])
    return(
        <List>
            {() => items.forEach(x => {
                return(
                    <ListItem>
                        {x}
                    </ListItem>
                );
            })}
        </List>
    );
}

export default PlayerList;