import React from 'react'
import "./HomeAchievement.scss"

function HomeAchievement() {
  const stats = [
    {
      number: "10+",
      description: "Years of delivering excellence",
    },
    {
      number: "1000+",
      description: "Strong and diverse people",
    },
    {
      number: "100+",
      description: "Our Products",
    },
  ];
  return (
    <div className="stats-container">
      <h2 className="stats-heading">Our Numbers Tell the Story</h2>
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div className="stat-item" key={index}>
            <h3 className="stat-number">{stat.number}</h3>
            <p className="stat-description">{stat.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomeAchievement