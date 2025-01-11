import { IBusiness } from "@/data/type";
import { Stack } from "./Stack";

export const CardItemListed = (props: IBusiness) => {
  return (
    <Stack
      className="bb"
      key={props.id}
      sx={{
        maxWidth: "300px",
        minWidth: "200px",
        borderRadius: "16px",
        padding: "4px",
        flexDirection: "row",
        gap: "8px",
        backdropFilter: "blur(3px)",
      }}
    >
      <Stack
        sx={{
          width: "150px",
          height: "100px",
          borderRadius: "32px",
          overflow: "hidden",
        }}
      >
        <img
          style={{ width: "100px", height: "100px" }}
          src="https://static.vecteezy.com/system/resources/previews/008/214/517/non_2x/abstract-geometric-logo-or-infinity-line-logo-for-your-company-free-vector.jpg"
          alt="Company"
        />
      </Stack>
      <Stack>
        <h3>{props.name}</h3>
        <p>{props.address}</p>
        <p>{props.cost}</p>
      </Stack>
    </Stack>
  );
};
