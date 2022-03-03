import React from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import {
  PageHeader,
  ServiceMenu,
  ServiceMenuItem,
  LogoWrapper,
} from "./pageHeader";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const Header = () => {
  return (
    <PageHeader>
      <LogoWrapper>
        <Box>Logo goes here</Box>
      </LogoWrapper>

      <ServiceMenu>
        <ServiceMenuItem>
          <Link href="/cart">
            <ShoppingCartIcon fontSize="large" />
          </Link>
        </ServiceMenuItem>
        <ServiceMenuItem>
          <Link href="/cart">
            <BookmarkIcon fontSize="large" />
          </Link>
        </ServiceMenuItem>
      </ServiceMenu>
    </PageHeader>
  );
};

export default Header;
