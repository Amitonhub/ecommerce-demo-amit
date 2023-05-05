import React from "react";
import styles from "../styles/Error.module.css";
import { Container, Row, Col } from "react-bootstrap";

export default function error() {
  return (
    <>
      <Container fluid className={`${styles.error}`}>
        <Row>
          <Col xs={12} md={6}>
            <div className={styles.roadmap}>
              <div className={styles.account}>Home</div>
              <div className={styles.account}>/</div>
              <div className={styles.english}>404 Error</div>
              <img className={styles.roadmapItem} alt="" src="/line-14.svg" />
              <div className={styles.nothing1}>Nothing</div>
              <img className={styles.roadmapItem} alt="" src="/line-14.svg" />
              <div className={styles.nothing1}>Nothing</div>
              <img className={styles.roadmapItem} alt="" src="/line-14.svg" />
              <div className={styles.nothing1}>Nothing</div>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className={styles.notFoundParent}>
              <div className={styles.notFound}>404 Not Found</div>
              <div className={styles.yourVisitedPage}>
                Your visited page not found. You may go home page.
              </div>
            </div>
            <div className={styles.button}>
              <div className={styles.viewAllProducts}>Back to home page</div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
