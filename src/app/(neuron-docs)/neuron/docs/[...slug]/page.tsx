import { Suspense, Fragment } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { getNeuronDocs } from "@/lib/services/get-neuron-docs";
import { getNeuronIndex } from "@/lib/services/get-neuron-index";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import MDXContent from "@/components/atoms/MdxContent";
import CodeHighlighting from "@/components/atoms/CodeHighlighting";
import styles from "../../../neuron.module.scss";
import { pages } from "next/dist/build/templates/app-page";

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
              <div>
                <p className={styles.breadcrumbs}>
                  <Link href={"/neuron"}>Home</Link> /{" "}
                  <span className={"text-capitalize"}>{pageSection}</span>{" "}
                  {pageSection?.toLowerCase() !==
                  currentRoute?.title.toLowerCase() ? (
                    <>
                      /{" "}
                      <span className={"text-capitalize"}>
                        {currentRoute?.title}
                      </span>
                    </>
                  ) : null}
                </p>
              </div>
              <div className={"pt-4"}>
                <h1>{docsContent?.frontmatter?.title}</h1>
              </div>
              <Suspense fallback={<p>Loading....</p>}>
                <MDXContent {...docsContent} />
              </Suspense>
              <div className={"d-flex justify-content-between"}>
                {prevRoute ? (
                  <Link
                    href={`/neuron/docs/${prevRoute.filename}`}
                    className={"text-decoration-none"}
                  >
                    <Button
                      variant="outline-primary"
                      className={styles.outlineBtn}
                    >
                      <i className="fa-solid fa-chevron-left pe-3"></i>
                      {prevRoute?.title}
                    </Button>
                  </Link>
                ) : (
                  <div></div>
                )}
                {nextRoute ? (
                  <Link
                    href={`/neuron/docs/${nextRoute.filename}`}
                    className={"text-decoration-none"}
                  >
                    <Button
                      variant="outline-primary"
                      className={styles.outlineBtn}
                    >
                      {nextRoute?.title}
                      <i className="fa-solid fa-chevron-right ps-3"></i>
                    </Button>
                  </Link>
                ) : (
                  <div></div>
                )}
              </div>
            </Col>
          </Row>
        </Col>
        <Col sm={3} className={"pt-4 ps-4"}>
          <div className={styles.stickySideNav}>
            {(docsContent.frontmatter?.subnav as string[])?.map?.(
              (item: any, index: number) => (
                <p key={index} className={"mb-1"}>
                  <small>{item}</small>
                </p>
              )
            )}
          </div>
        </Col>
      </Row>
    </>
  );
}
