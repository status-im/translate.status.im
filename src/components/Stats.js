import React from 'react';
import { Statistic, Progress, Row, Col } from 'antd';

const Stats = ({ data }) => {
  console.log(data)

  const makeStatsCard = (stats, index) => {
    return (
      <Row gutter={24} className="stats-card" key={index}>
        <h2 style={{paddingBottom : '20px' }}>{stats.name}</h2>
        <div style={{marginBottom : '20px' }}>
          <h3 style={{ marginBottom : '20px' }}>Progress</h3>
          <Progress 
            type="circle" 
            width={250}
            percent={stats.progress_total} 
          />
        </div>
        <Row gutter={{ xs: 8, sm: 16, md: 16, lg: 8 }} style={{ justifyContent: 'center', marginTop: '40px' }}>
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
      </Row>
    )

  }

  return (
    <div className="stats-container">
      {data.map((project, index) => {
        return (
          makeStatsCard(project, index)
        )
      })}
    </div>
  );
}

export default Stats;
