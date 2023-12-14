import type { Metadata } from "next";
import { getNeuronDocs } from "@/lib/services/get-neuron-docs";
import { getNeuronIndex } from "@/lib/services/get-neuron-index";
import { Container, Row, Col } from "react-bootstrap";

export const metadata: Metadata = {
  title: "Docs | Neuron",
  description: "Documentation for the Neuron Global State Manager library.",
};

export default async function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navIndex = await getNeuronIndex();
  const mdxSource = await getNeuronDocs("about");
  console.log(mdxSource);
  return (
    <>
      <Container fluid>
        <Row>
          <Col sm={3}>
            {navIndex.map((item) => (
              <>
                <p>
                  <strong>{item.section}</strong>
                </p>
                {item.items
                  ? item.items.map((item, index) => (
                      <p key={index}>{item?.title}</p>
                    ))
                  : null}
              </>
            ))}
          </Col>
          <Col>{children}</Col>
          <Col sm={3}>
            {(mdxSource.frontmatter?.subnav as string[])?.map?.(
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
