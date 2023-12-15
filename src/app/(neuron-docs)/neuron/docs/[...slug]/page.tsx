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
  const navIndex = await getNeuronIndex();
  const docsContent = await getNeuronDocs(route);

  return (
    <>
      <Container fluid>
        <Row>
          <Col sm={2} className={"d-flex flex-column align-items-start"}>
            {navIndex.map((item, index) => (
              <Fragment key={index}>
                {item.filename ? (
                  <Button
                    variant="link"
                    className={`text-decoration-none px-0`}
                  >
                    <Link
                      href={`/neuron/docs/${item.filename}`}
                      className={"text-decoration-none"}
                    >
                      <strong>{item.section}</strong>
                    </Link>
                  </Button>
                ) : (
                  <Collapsible label={item.section} labelClassName={"fw-bold"}>
                    {item.items
                      ? item.items.map((item, index) => (
                          <p key={index} className={"ps-2 mb-2"}>
                            <Link
                              href={`/neuron/docs/${item.filename}`}
                              className={"text-decoration-none"}
                            >
                              {item.title}
                            </Link>
                          </p>
                        ))
                      : null}
                  </Collapsible>
                )}
              </Fragment>
            ))}
          </Col>

          <Col>
            <Row>
              <Col className={"pe-3"}>
                <Suspense fallback={<p>Loading....</p>}>
                  <MDXContent {...docsContent} />
                </Suspense>
              </Col>
            </Row>
          </Col>

          <Col sm={3}>
            {(docsContent.frontmatter?.subnav as string[])?.map?.(
              (item: any, index: number) => (
                <p key={index}>{item}</p>
              )
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}
