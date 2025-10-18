import React, { useState } from 'react'

const Button = ({ onClick, text }) => (
    <button onClick={onClick} style={{ marginRight: 8 }}>{text}</button>
)

const StatisticLine = ({ label, value }) => (
    <tr>
        <td>{label}</td>
        <td>{value}</td>
    </tr>
)

const Statistics = ({ good, neutral, bad }) => {
    const total = good + neutral + bad

    if (total === 0) {
        return <div>No feedback given</div>
    }

    const average = (good - bad) / total
    const positive = (good / total) * 100

    const fmt = (n) => (Number.isInteger(n) ? n : n.toFixed(1))

    return (
        <table>
            <tbody>
            <StatisticLine label="good" value={good} />
            <StatisticLine label="neutral" value={neutral} />
            <StatisticLine label="bad" value={bad} />
            <StatisticLine label="all" value={total} />
            <StatisticLine label="average" value={fmt(average)} />
            <StatisticLine label="positive" value={`${fmt(positive)} %`} />
            </tbody>
        </table>
    )
}

export default function App() {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div style={{ padding: 20, fontFamily: 'Arial, Helvetica, sans-serif' }}>
            <h1>give feedback</h1>
            <div style={{ marginBottom: 16 }}>
                <Button onClick={() => setGood(g => g + 1)} text="good" />
                <Button onClick={() => setNeutral(n => n + 1)} text="neutral" />
                <Button onClick={() => setBad(b => b + 1)} text="bad" />
            </div>

            <h2>statistics</h2>
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}
