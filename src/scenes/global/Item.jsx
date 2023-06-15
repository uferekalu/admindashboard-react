import { IconButton, MenuItem, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { Link } from "react-router-dom";

export default function Item({
  title,
  to,
  icon,
  selected,
  setSelected,
  isCollapsed,
}) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={`${selected === title}`}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
    >
      {isCollapsed ? (
        <>
          <Link to={to}>
            <IconButton>{icon}</IconButton>
          </Link>
        </>
      ) : (
        <>
          <Link to={to}>
            <IconButton>{icon}</IconButton>
          </Link>
          <Link to={to}>
            <Typography>{title}</Typography>
          </Link>
        </>
      )}
    </MenuItem>
  );
}
