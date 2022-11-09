import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Textarea,
  Input,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const MainPanel = ({ mainLang, changeLang }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [lang, setLang] = useState("");
  useEffect(() => {
    changeLang({name,description,lang})
  }, [changeLang,name,description,lang]);


  return (
    <>
      <Tabs>
        <TabList>
          {mainLang.map((l) => (
            <Tab key={l.id}>{l.langKey}</Tab>
          ))}
        </TabList>
        <TabPanels>
          {mainLang.map((l) => (
            <TabPanel key={l.id}>
              <div className="">
                <Input
                  mb={3}
                  type="text"
                  onChange={(e) => {
                    setName(e.target.value);
                    setLang(l.langKey);
                  }}
                />
                <Textarea
                  onChange={(e) => {
                    setDescription(e.target.value);
                    setLang(l.langKey);
                  }}
                  type="text"
                ></Textarea>
              </div>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </>
  );
};

export default React.memo(MainPanel);
