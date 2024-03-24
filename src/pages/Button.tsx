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
import exodia from "../../public/assets/clerk.png";

export default function App() {
  const { t, i18n } = useTranslation();

  const italiano = () => {
    i18n.changeLanguage("it");
    setSelectedOption(new Set(["merge"]));
  };

  const inglese = () => {
    i18n.changeLanguage("en");
    setSelectedOption(new Set(["squash"]));
  };

  const [selectedOption, setSelectedOption] = React.useState(
    new Set(["merge"]),
  );

  const descriptionsMap = {
    merge: <strong>dd</strong>,
    squash: "inglese credo",
    rebase:
      "All commits from the source branch are added to the destination branch individually.",
  };

  const labelsMap = {
    merge: "Italiano",
    squash: "English",
    rebase: "Netherlands",
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
        <div className="max-w-[16px]">
          <img alt="logo" src={exodia.src} />
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
          aria-label="Merge options"
          selectedKeys={selectedOption}
          selectionMode="single"
          className="max-w-[300px]"
        >
          <DropdownItem
            key="merge"
            description={descriptionsMap["merge"]}
            onClick={italiano}
            className="rounded-lg  "
          >
            <div className="flex items-center">
              <div className="max-w-[30px]">
                <img alt="logo" src={exodia.src} />
              </div>
              <strong>Italiano</strong>
            </div>
          </DropdownItem>
          <DropdownItem
            key="squash"
            description={descriptionsMap["squash"]}
            onClick={inglese}
            className="rounded-lg "
          >
            <strong>Inglese</strong>
          </DropdownItem>
          <DropdownItem
            key="rebase"
            description={descriptionsMap["rebase"]}
            className="rounded-lg  "
          >
            <strong>Italiano</strong>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </ButtonGroup>
  );
}
