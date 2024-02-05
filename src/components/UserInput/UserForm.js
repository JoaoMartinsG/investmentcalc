import { useState } from 'react'
import styles from './UserForm.module.css'

const UserForm = (props) => {
  const initialUserInput = {
    'current-savings': 15000,
    'yearly-contribution': 1300,
    'expected-return': 8,
    'duration': 3,
  }

  const [userInput, setUserInput] = useState(initialUserInput)

  const formSubmitHandler = (event) => {
    event.preventDefault()
    props.onCalculate(userInput)
  }

  const formResetHandler = (event) => {
    setUserInput(initialUserInput)
  }

  const inputChangeHandler = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: value,
      }
    })
  }

  return (
    <form onSubmit={formSubmitHandler} className={styles.form}>
      <div className={`${styles['input-group']}`}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            value={userInput['current-savings']}
            onChange={(event) =>
              inputChangeHandler('current-savings', event.target.value)
            }
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            value={userInput['yearly-contribution']}
            onChange={(event) =>
              inputChangeHandler('yearly-contribution', event.target.value)
            }
            type="number"
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className={`${styles['input-group']}`}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            value={userInput['expected-return']}
            onChange={(event) =>
              inputChangeHandler('expected-return', event.target.value)
            }
            type="number"
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            value={userInput['duration']}
            onChange={(event) =>
              inputChangeHandler('duration', event.target.value)
            }
            type="number"
            id="duration"
          />
        </p>
      </div>
      <p className={styles.actions}>
        <button
          onClick={formResetHandler}
          type="reset"
          className={styles.buttonAlt}
        >
          Reset
        </button>
        <button type="submit" className={styles.button}>
          Calculate
        </button>
      </p>
    </form>
  )
}

export default UserForm
