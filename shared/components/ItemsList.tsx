import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Link from "next/link";

type Props = {
  articles: [];
};

export default function AlignItemsList({ articles }: Props) {
  return (
    <List sx={{ width: "100%", maxWidth: 800, bgcolor: "background.paper" }}>
      {articles.map((article: any) => (
        <Link href={`/enemy-strategy/${article._id}`} key={article._id}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt={article.enemy_info.media_1.alt}
                src={article.enemy_info.media_1.url}
              />
            </ListItemAvatar>
            <ListItemText
              primary={article._title}
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="caption"
                    sx={{ color: "text.primary", display: "inline" }}
                  >
                    公開日:{article._published_at}
                  </Typography>
                  {/* {" — I'll be in your neighborhood doing errands this…"} */}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </Link>
      ))}
    </List>
  );
}
