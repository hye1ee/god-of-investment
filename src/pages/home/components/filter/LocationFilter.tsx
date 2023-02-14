import { Wrapper } from "../../../components/Wrapper";
import Button from "../../../components/Button";
import { BorderColumn, BorderRow } from "../../../components/Border";
import { locationNames } from "../../../../utils/constants";
import { RegularText } from "../../../components/Text";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../states/store";
import { updateLocation } from "../../../../states/searchSlice";

export default () => {
  const onLocationFilter = () => {
    console.log("onLocationFilter button clicked");
  };

  return (
    <Wrapper direction="column" width="full">
      <LocationTitle />
      <BorderRow width={1} color="grayLight" />
      <LocationSelector />
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

const LocationTitle = () => {
  const location = useSelector((state: RootState) => state.search.location);

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
          {location.city}
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
          {location.district}
        </RegularText>
      </Wrapper>
    </Wrapper>
  );
};

const LocationSelector = () => {
  const location = useSelector((state: RootState) => state.search.location);
  const dispatch = useDispatch();

  return (
    <Wrapper direction="row" width="full" height={288}>
      <Wrapper direction="column" width={94.25} height="full">
        {Object.keys(locationNames)
          .slice(0, 9)
          .map((name) => (
            <LocationName
              active={name === location.city}
              name={name}
              onClick={() => dispatch(updateLocation({ key: "city", name }))}
            />
          ))}
      </Wrapper>
      <BorderColumn width={1} color="grayLight" />
      <Wrapper direction="column" width={94.25} height="full">
        {Object.keys(locationNames)
          .slice(9)
          .map((name) => (
            <LocationName
              active={name === location.city}
              name={name}
              onClick={() => {
                console.log(updateLocation({ key: "city", name }));
                dispatch(updateLocation({ key: "city", name }));
              }}
            />
          ))}
      </Wrapper>
      <BorderColumn width={1} color="grayLight" />
      <Wrapper direction="column" width={94.25} height="full">
        {locationNames[location.city].slice(0, 9).map((name) => (
          <LocationName
            active={name === location.district}
            name={name}
            onClick={() => dispatch(updateLocation({ key: "district", name }))}
          />
        ))}
      </Wrapper>
      <BorderColumn width={1} color="grayLight" />
      <Wrapper direction="column" width={94.25} height="full">
        {locationNames[location.city].slice(9).map((name) => (
          <LocationName
            active={name === location.district}
            name={name}
            onClick={() => dispatch(updateLocation({ key: "district", name }))}
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
