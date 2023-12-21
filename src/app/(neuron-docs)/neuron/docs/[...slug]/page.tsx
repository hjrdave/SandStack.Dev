import { Suspense } from "react";
import type { Metadata } from "next";
import { getNeuronDocs } from "@/lib/services/get-neuron-docs";
import { getNeuronIndex } from "@/lib/services/get-neuron-index";
import { Row, Col } from "react-bootstrap";
import MDXContent from "@/components/atoms/MdxContent";
import CodeHighlighting from "@/components/atoms/CodeHighlighting";
import Breadcrumbs from "@/components/atoms/Breadcrumbs";
import BackNextBtnGroup from "@/components/atoms/BackNextBtnGroup";
import SubNav from "@/app/(neuron-docs)/_components/SubNav/SubNav";

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
  const prevRoute = navigationArray[currentRouteIndex - 1];
  const nextRoute = navigationArray[currentRouteIndex + 1];
  const pageSection = currentRoute?.filename.split("/")[0].replaceAll("-", " ");
  const docsContent = (await getNeuronDocs(route)) as any;

  return (
    <>
      <CodeHighlighting />
      <Row>
        <Col>
          <Row className={"d-flex justify-content-center"}>
            <Col sm={10} className={"pe-3"}>
              <Breadcrumbs
                section={pageSection}
                currentPage={currentRoute?.title}
              />
              <Suspense fallback={<p>Loading....</p>}>
                <MDXContent {...docsContent} />
              </Suspense>
              <BackNextBtnGroup nextRoute={nextRoute} prevRoute={prevRoute} />
            </Col>
          </Row>
        </Col>
        <Col sm={3} className={"pt-4 ps-4 pe-0"}>
          <SubNav items={docsContent.frontmatter.subnav} />
        </Col>
      </Row>
    </>
  );
}
