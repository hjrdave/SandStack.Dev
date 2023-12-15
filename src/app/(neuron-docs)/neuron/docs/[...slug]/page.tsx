import { Suspense, Fragment } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { getNeuronDocs } from "@/lib/services/get-neuron-docs";
import { getNeuronIndex } from "@/lib/services/get-neuron-index";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import MDXContent from "@/components/atoms/MdxContent";
import Collapsible from "@/components/atoms/Collapsible";

export const metadata: Metadata = {
  title: "Docs | Neuron",
  description: "Documentation for the Neuron Global State Manager library.",
};
interface Props {
  params: {
    slug: string | string[];
  };
}
export default async function Page({ params }: Props) {
  const slug = params.slug;
  const route = slug
    ? typeof slug === "string"
      ? slug
      : Array.isArray(slug)
      ? slug.join("/")
      : "/404"
    : "/404";
  const docsContent = await getNeuronDocs(route);

  return (
    <>
      <Col className={"pt-4"}>
        <Row>
          <Col className={"pe-3"}>
            <Suspense fallback={<p>Loading....</p>}>
              <MDXContent {...docsContent} />
            </Suspense>
          </Col>
        </Row>
      </Col>
      <Col sm={3} className={"pt-4"}>
        {(docsContent.frontmatter?.subnav as string[])?.map?.(
          (item: any, index: number) => (
            <p key={index}>{item}</p>
          )
        )}
      </Col>
    </>
  );
}
