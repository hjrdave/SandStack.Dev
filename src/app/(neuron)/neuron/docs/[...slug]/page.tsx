import { Suspense } from "react";
import type { Metadata } from "next";
import { getNeuronDocs } from "@/lib/services/get-neuron-docs";
import { getNeuronIndex } from "@/lib/services/get-neuron-index";
import { Row, Col } from "react-bootstrap";
import MarkdownBody from "@/app/(neuron)/_components/MarkdownBody";
import CodeHighlighting from "@/components/atoms/CodeHighlighting";
import Breadcrumbs from "@/components/atoms/Breadcrumbs";
import BackNextBtnGroup from "@/components/atoms/BackNextBtnGroup";
import SubNav from "@/app/(neuron)/_components/SubNav/SubNav";

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
  const navIndex = await getNeuronIndex();
  const navigationArray = navIndex
    .map((item) =>
      item.filename
        ? { title: item.section, filename: item.filename }
        : item.items
    )
    .flat();
  const currentRouteIndex = navigationArray.findIndex(
    (item) => item?.filename === route
  );

  const currentRoute = navigationArray[currentRouteIndex];
  const pageSection = currentRoute?.filename.split("/")[0].replaceAll("-", " ");
  const prevRoute = () => {
    const subItems = navigationArray[currentRouteIndex - 1];
    const routeData = subItems
      ? { section: pageSection, ...subItems }
      : undefined;
    return routeData;
  };
  const nextRoute = () => {
    const subItems = navigationArray[currentRouteIndex + 1];
    const routeData = subItems
      ? { section: pageSection, ...subItems }
      : undefined;
    return routeData;
  };
  const { frontmatter, compiledSource } = (await getNeuronDocs(route)) as any;

  return (
    <>
      <CodeHighlighting />
      <Row id={"markdownBodyContainer"}>
        <Col sm={12} lg={9} className={"px-4"}>
          <Row className={"d-flex justify-content-center"}>
            <Col sm={12} lg={10} className={"pe-md-3"}>
              <Row>
                <Col>
                  <Breadcrumbs
                    section={pageSection}
                    currentPage={currentRoute?.title}
                  />
                </Col>
              </Row>
              <Row>
                <Col className={"pt-4"}>
                  <MarkdownBody
                    frontmatter={frontmatter}
                    compiledSource={compiledSource}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <BackNextBtnGroup
                    nextRoute={nextRoute()}
                    prevRoute={prevRoute()}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col sm={12} md={3} className={"pt-4 ps-4 pe-0 d-none d-lg-block"}>
          <SubNav
            items={frontmatter.subnav}
            markdownBodyContainerId={"#markdownBodyContainer"}
          />
        </Col>
      </Row>
    </>
  );
}
