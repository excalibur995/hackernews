import React from "react";
import * as RootTabs from "@radix-ui/react-tabs";
import { styled } from "@stitches/react";
import { violet, mauve, blackA } from "@radix-ui/colors";

export type TabsOptions = {
  trigger: React.ReactNode;
  value: string;
  content: React.ReactNode;
};

interface TabsProps {
  options: TabsOptions[];
  defaultValue?: string;
}
const Tabs = (props: TabsProps) => (
  <TabsRoot defaultValue={props.defaultValue}>
    <TabsList aria-label="Manage your account">
      {props.options.map((list, index) => (
        <TabsTrigger key={list.value + index.toString()} value={list.value}>
          {list.trigger}
        </TabsTrigger>
      ))}
    </TabsList>
    {props.options.map((content, index) => (
      <TabsContent key={content.value + index.toString()} value={content.value}>
        {content.content}
      </TabsContent>
    ))}
  </TabsRoot>
);

const TabsRoot = styled(RootTabs.Root, {
  display: "flex",
  flexDirection: "column",
  boxShadow: `0 2px 10px ${blackA.blackA4}`,
});

const TabsList = styled(RootTabs.List, {
  flexShrink: 0,
  display: "flex",
  borderBottom: `1px solid ${mauve.mauve6}`,
});

const TabsTrigger = styled(RootTabs.Trigger, {
  all: "unset",
  fontFamily: "inherit",
  backgroundColor: "white",
  padding: "0 20px",
  height: 45,
  flex: 1,
  display: "flex",
  alignItems: "center",
  fontSize: 15,
  lineHeight: 1,
  color: mauve.mauve11,
  userSelect: "none",
  "&:first-child": { borderTopLeftRadius: 6 },
  "&:last-child": { borderTopRightRadius: 6 },
  "&:hover": { color: violet.violet11 },
  '&[data-state="active"]': {
    color: violet.violet11,
    boxShadow: "inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor",
  },
});

const TabsContent = styled(RootTabs.Content, {
  flexGrow: 1,
  padding: 20,
  backgroundColor: "white",
  borderBottomLeftRadius: 6,
  borderBottomRightRadius: 6,
  outline: "none",
});

export default Tabs;
