import { Typography, type TypographyProps } from "@mui/material";

export const Text = (props: TypographyProps) => {
  return <Typography color="var(--foreground-primary)" {...props} />;
};
