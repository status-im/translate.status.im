import React from "react";
import { Statistic, Progress, Row, Col } from "antd";
import styled from "styled-components/macro";

const StatsContainer = styled.div`
  margin-bottom: 120px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 700px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
`;

const StatsCard = styled(Row)`
  text-align: center;
  display: inline-block !important;
  margin-bottom: 50px;
`;

function Stats({ data }) {
  function makeStatsCard(stats, index) {
    return (
      <StatsCard gutter={24} key={index}>
        <h2 style={{ paddingBottom: "20px" }}>{stats.name}</h2>
        <div style={{ marginBottom: "20px" }}>
          <h3 style={{ marginBottom: "20px" }}>Progress</h3>
          <Progress type="circle" width={250} percent={stats.progress_total} />
        </div>
        <Row gutter={{ xs: 8, sm: 16, md: 16, lg: 8 }} style={{ justifyContent: "center", marginTop: "40px" }}>
          <Col span={6}>
            <Statistic title="Base Words" value={stats.base_words} />
          </Col>
          <Col span={6}>
            <Statistic title="Keys Total" value={stats.keys_total} />
          </Col>
          <Col span={6}>
            <Statistic title="Contributors" value={stats.contributors} />
          </Col>
        </Row>
      </StatsCard>
    );
  }

  return (
    <StatsContainer>
      {data.map((project, index) => {
        return makeStatsCard(project, index);
      })}
    </StatsContainer>
  );
}

export default Stats;
