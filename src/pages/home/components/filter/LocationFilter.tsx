import { useState } from "react";
import { Wrapper } from "../../../components/Wrapper";
import Button from "../../../components/Button";
import { BorderColumn, BorderRow } from "../../../components/Border";
import { locationNames } from "../../../../utils/constants";
import { RegularText } from "../../../components/Text";

export default () => {
  const [location, setLocation] = useState(["서울시", "종로구"]);

  const onLocationFilter = () => {
    console.log("onLocationFilter button clicked");
  };

  return (
    <Wrapper direction="column" width="full">
      <LocationTitle location={location} />
      <BorderRow width={1} color="grayLight" />
      <LocationSelector location={location} setLocation={setLocation} />
      <BorderRow width={1} color="grayLight" />

      <Wrapper direction="row" width="full" height={75} center={true}>
        <Button
          onClick={onLocationFilter}
          textOption={{
            text: "해당 조건으로 검색하기",
            weight: "regular",
            size: 14,
            color: "white",
          }}
          color="purple"
          width={320}
          height={40}
          radius={10}
        />
      </Wrapper>
      <BorderRow width={1} color="grayLight" />
    </Wrapper>
  );
};

const LocationTitle = ({ location }: { location: string[] }) => {
  return (
    <Wrapper direction="row" width="full" height={59}>
      <Wrapper
        direction="row"
        width={190}
        height="full"
        center={true}
        color="purpleBright"
      >
        <RegularText size={14} absolute={true} left={24}>
          {location[0]}
        </RegularText>
      </Wrapper>
      <Wrapper
        direction="row"
        width={190}
        height="full"
        center={true}
        color="purpleBright"
      >
        <RegularText size={14} absolute={true} left={24}>
          {location[1]}
        </RegularText>
      </Wrapper>
    </Wrapper>
  );
};

const LocationSelector = ({
  location,
  setLocation,
}: {
  location: string[];
  setLocation: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  return (
    <Wrapper direction="row" width="full" height={288}>
      <Wrapper direction="column" width={94.25} height="full">
        {Object.keys(locationNames)
          .slice(0, 9)
          .map((name) => (
            <LocationName
              active={name === location[0]}
              name={name}
              onClick={() => setLocation([name, locationNames[name][0]])}
            />
          ))}
      </Wrapper>
      <BorderColumn width={1} color="grayLight" />
      <Wrapper direction="column" width={94.25} height="full">
        {Object.keys(locationNames)
          .slice(9)
          .map((name) => (
            <LocationName
              active={name === location[0]}
              name={name}
              onClick={() => setLocation([name, locationNames[name][0]])}
            />
          ))}
      </Wrapper>
      <BorderColumn width={1} color="grayLight" />
      <Wrapper direction="column" width={94.25} height="full">
        {locationNames[location[0]].slice(0, 9).map((name) => (
          <LocationName
            active={name === location[1]}
            name={name}
            onClick={() => setLocation((location) => [location[0], name])}
          />
        ))}
      </Wrapper>
      <BorderColumn width={1} color="grayLight" />
      <Wrapper direction="column" width={94.25} height="full">
        {locationNames[location[0]].slice(9).map((name) => (
          <LocationName
            active={name === location[1]}
            name={name}
            onClick={() => setLocation((location) => [location[0], name])}
          />
        ))}
      </Wrapper>
    </Wrapper>
  );
};

const LocationName = ({
  active,
  name,
  onClick,
}: {
  active: boolean;
  name: string;
  onClick: () => void;
}) => {
  return (
    <Wrapper
      direction="row"
      width="full"
      height={32}
      color={active ? "purpleLight" : "white"}
      center={true}
      onClick={onClick}
    >
      <RegularText color="gray" size={13} absolute={true} left={19}>
        {name}
      </RegularText>
    </Wrapper>
  );
};
