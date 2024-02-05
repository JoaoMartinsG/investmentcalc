import { useState } from 'react'
import Header from './components/Header/Header'
import ResultsTable from './components/ResultsTable/ResultsTable'
import UserForm from './components/UserInput/UserForm'

function App() {
  const [userInput, setuserInput] = useState(null)
  const calculateHandler = (userInput) => {
    setuserInput(userInput)
  }

  const yearlyData = []

  if (userInput) {
    let currentSavings = userInput['current-savings']
    const yearlyContribution = userInput['yearly-contribution']
    const expectedReturn = userInput['expected-return'] / 100
    const duration = userInput['duration']

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn
      currentSavings += yearlyInterest + yearlyContribution
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      })
    }
  }

  return (
    <div>
      <Header />
      <UserForm onCalculate={calculateHandler} />

      {!userInput && (
        <p style={{ textAlign: 'center' }}>No investment calculated yet</p>
      )}
      {userInput && (
        <ResultsTable
          data={yearlyData}
          initialInvestment={userInput['current-savings']}
        />
      )}
    </div>
  )
}

export default App
