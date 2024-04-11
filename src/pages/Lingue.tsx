import React from "react";
import {
  Button,
  ButtonGroup,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import { set } from "zod";
import italy from "../../public/assets/italy.png";
import uk from "../../public/assets/uk.png";
import global from "../../public/assets/global.png";
import kanjis from "../../public/assets/kanjis.svg";

export default function App() {
  const { t, i18n } = useTranslation();

  const [selectedOption, setSelectedOption] = React.useState(
    new Set(["italiano"]),
  );

  const italiano = () => {
    i18n.changeLanguage("it");
    setSelectedOption(new Set(["italiano"]));
  };

  const inglese = () => {
    i18n.changeLanguage("en");
    setSelectedOption(new Set(["english"]));
  };

  const descriptionsMap = {
    italiano: "Lingua originale",
    english: "Translated",
  };

  const labelsMap = {
    italiano: "Italiano",
    english: "English",
  };

  // Convert the Set to an Array and get the first value.
  const selectedOptionValue = Array.from(selectedOption)[0];

  return (
    <ButtonGroup variant="flat" className="mr-2 md:mr-4">
      <Button
        className=" max-w-[40vw]
    rounded-lg border-2  border-slate-300 bg-slate-50
    px-2 py-2 text-xs focus:border-violet-500 focus:outline-none md:px-4 md:py-2 md:text-base"
      >
        <div className="mr-1 max-w-[18px]">
          <img alt="logo" src={kanjis.src} />
        </div>
        {labelsMap[selectedOptionValue as keyof typeof labelsMap]}
      </Button>
      <Dropdown
        placement="bottom-end"
        className=" rounded-lg border-2  border-slate-300 bg-slate-50"
      >
        <DropdownTrigger className=" bg-red-300">
          <Button
            isIconOnly
            className=" ml-[2px] aspect-square h-8 rounded-full  border-2 border-slate-300 bg-violet-400 px-1
            py-1 text-xs focus:border-violet-500 focus:outline-none md:ml-1  md:py-1 md:text-base"
          >
            <svg
              fill="none"
              height="18"
              viewBox="0 0 24 24"
              width="18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.9188 8.17969H11.6888H6.07877C5.11877 8.17969 4.63877 9.33969 5.31877 10.0197L10.4988 15.1997C11.3288 16.0297 12.6788 16.0297 13.5088 15.1997L15.4788 13.2297L18.6888 10.0197C19.3588 9.33969 18.8788 8.17969 17.9188 8.17969Z"
                fill="white"
              />
            </svg>
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          disallowEmptySelection
          aria-label="aria label"
          selectedKeys={selectedOption}
          selectionMode="single"
          className="max-w-[300px]"
        >
          <DropdownItem
            key="italiano"
            description={descriptionsMap["italiano"]}
            onClick={italiano}
            className="rounded-lg  "
          >
            <div className="flex items-center">
              <div className="mr-2 max-w-[20px]">
                <img alt="logo" src={italy.src} />
              </div>
              <strong>Italiano</strong>
            </div>
          </DropdownItem>
          <DropdownItem
            key="english"
            description={descriptionsMap["english"]}
            onClick={inglese}
            className="rounded-lg "
          >
            <div className="flex items-center">
              <div className="mr-2 max-w-[20px]">
                <img alt="logo" src={uk.src} />
              </div>
              <strong>English</strong>
            </div>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </ButtonGroup>
  );
}
