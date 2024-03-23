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

export default function App() {
  const { t, i18n } = useTranslation();

  const italiano = () => {
    i18n.changeLanguage("it");
  };

  const inglese = () => {
    i18n.changeLanguage("en");
  };

  const [selectedOption, setSelectedOption] = React.useState(
    new Set(["merge"]),
  );

  const descriptionsMap = {
    merge:
      "All commits from the source branch are added to the destination branch via a merge commit.",
    squash:
      "All commits from the source branch are added to the destination branch as a single commit.",
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
    <ButtonGroup variant="flat" className=" bg-slate-50">
      u
      <Button className=" bg-slate-100">
        {labelsMap[selectedOptionValue as keyof typeof labelsMap]}
      </Button>
      <Dropdown placement="bottom-end" className=" bg-red-50">
        <DropdownTrigger className=" bg-red-300">
          <Button isIconOnly className="bg-red-200">
            <svg
              fill="none"
              height="14"
              viewBox="0 0 24 24"
              width="14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.9188 8.17969H11.6888H6.07877C5.11877 8.17969 4.63877 9.33969 5.31877 10.0197L10.4988 15.1997C11.3288 16.0297 12.6788 16.0297 13.5088 15.1997L15.4788 13.2297L18.6888 10.0197C19.3588 9.33969 18.8788 8.17969 17.9188 8.17969Z"
                fill="currentColor"
              />
            </svg>
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          disallowEmptySelection
          aria-label="Merge options"
          selectedKeys={selectedOption}
          selectionMode="single"
          onSelectionChange={() => setSelectedOption}
          className="max-w-[300px]"
        >
          <DropdownItem
            key="merge"
            description={descriptionsMap["merge"]}
            onClick={italiano}
          >
            {labelsMap["merge"]}
          </DropdownItem>
          <DropdownItem
            key="squash"
            description={descriptionsMap["squash"]}
            onClick={inglese}
          >
            {labelsMap["squash"]}
          </DropdownItem>
          <DropdownItem key="rebase" description={descriptionsMap["rebase"]}>
            {labelsMap["rebase"]}
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </ButtonGroup>
  );
}
