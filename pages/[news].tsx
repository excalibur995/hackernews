import { GetServerSidePropsContext } from "next";
import React from "react";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  console.log(context.query.news);
  return {
    props: {},
  };
};

const NewsDynamicPages = () => {
  return <div>NewsPages</div>;
};

export default NewsDynamicPages;
