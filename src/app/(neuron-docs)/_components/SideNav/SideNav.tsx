"use client";
import { Fragment, useEffect } from "react";
import Collapsible from "../../../../components/atoms/Collapsible";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "react-bootstrap";
import styles from "./SideNav.module.scss";

interface Props {
  navItems: {
    section: string;
    filename?: string;
    items?: {
      title: string;
      filename: string;
    }[];
  }[];
}
export default function SideNav({ navItems }: Props) {
  const pathname = usePathname();
  const rootPath = "/neuron/docs/";

  return (
    <>
      <div
        className={`d-flex flex-column align-items-start ${styles.compContainer} ${styles.sticky}`}
      >
        {navItems.map((navItem, index) => {
          const navItemRoute = `${rootPath}${navItem.filename}`;
          const sectionFilename = navItem.filename;
          const section = navItem.section;
          const isActive = navItemRoute === pathname;
          return (
            <Fragment key={index}>
              {sectionFilename ? (
                <Button
                  className={`py-3 ps-4 w-100 text-decoration-none bg-transparent border-0 rounded-0 rounded-end-5 d-flex justify-content-start ${
                    isActive ? styles.active : ""
                  }`}
                >
                  <Link
                    href={navItemRoute}
                    className={`d-flex justify-content-start text-decoration-none text-white w-100`}
                  >
                    <strong>{section}</strong>
                  </Link>
                </Button>
              ) : (
                <Collapsible
                  label={section}
                  labelClassName={`fw-bold text-white ps-4 w-100 d-flex justify-content-between`}
                >
                  {navItem.items
                    ? navItem.items.map((item, index) => (
                        <Button
                          size="sm"
                          key={index}
                          className={`py-3 ps-4 w-100 text-decoration-none bg-transparent border-0 rounded-0 rounded-end-5 d-flex justify-content-start ${
                            `${rootPath}${item.filename}` === pathname
                              ? styles.active
                              : ""
                          }`}
                        >
                          <Link
                            href={`${rootPath}${item.filename}`}
                            className={`d-flex justify-content-start text-decoration-none text-white w-100`}
                          >
                            {item.title}
                          </Link>
                        </Button>
                      ))
                    : null}
                </Collapsible>
              )}
            </Fragment>
          );
        })}
      </div>
    </>
  );
}
