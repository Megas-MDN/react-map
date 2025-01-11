import React from "react";
import { CardItemListed } from "./CardItemListed";
import { IBusiness } from "@/data/type";
import { Stack } from "./Stack";

interface SidebarProps {
  businesses: IBusiness[];
  sx?: React.CSSProperties;
}

const Sidebar: React.FC<SidebarProps> = ({ businesses, sx }) => (
  <Stack>
    <p key={"total"}>Total {businesses.length}</p>
    <Stack
      key={"sidebar-container"}
      // className="bbb"
      sx={{
        alignItems: "center",
        padding: "8px",
        gap: "8px",
        overflowX: "auto",
        flexDirection: "row",
        ...sx,
      }}
    >
      {businesses.length > 0 ? (
        businesses.map((business, index) => (
          <CardItemListed
            {...business}
            key={`${index}x${business.id}x${business.name}`}
          />
        ))
      ) : (
        <p key={"empty-feedback"}>No businesses available in this area.</p>
      )}
    </Stack>
  </Stack>
);

export default Sidebar;
